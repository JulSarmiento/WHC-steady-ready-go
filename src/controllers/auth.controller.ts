import { Request, Response } from "express";
import { UserSchema } from "../models";
import JWT from "jsonwebtoken";
import httpStatus from "http-status";

export const signIn = async (req: Request, res: Response) => {
  console.log("Auth -> signIn", req.body);
  
  try {
    const { username, password } = req.body;
    const user = await UserSchema.login(username, password);
    
    if(!user) {
      res.json({error: "user / password combination does not exists"});
      return
    }
  
    // token que se le envia al cliente con la informacion del usuario
    const token = JWT.sign(
      { email: user.email ,
        name: user.getFullName(),
        id: user.id},
      String(process.env.JWT_SECRET_KEY),
      { expiresIn: "1d" }
    )
    
    res.json({token, email: user.email, name: user.getFullName()});
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

export const restrictedView = async (req: Request, res: Response) => {
  return res.status(httpStatus.OK).json({
    success: true,
    message: "confidential view!",
  });
};

const httpStatus = require('http-status');
const JWT = require('jsonwebtoken');
const User = require('../models/users.schema');

exports.signIn = async (req, res) => {
  console.log("Auth -> signIn", req.body);
  
  try {
    const { username, password } = req.body;
    const user = await User.login(username, password);
    
    if(!user) {
      res.json({error: "user / password combination does not exists"});
      return
    }
  
    // token que se le envia al cliente con la informacion del usuario
    const token = JWT.sign(
      { email: user.email ,
        name: user.getFullName(),
        id: user.id},
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    )
    
    res.json({token, email: user.email, name: user.getFullName()});
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

export const login = async (req, res) => {
  console.log("Auth -> signIn", req.body);

  try {
    const { username, password } = req.body;
    const user = await User.login(username, password);

    if (!user) {
      res.json({ error: "user / password combination does not exists" });
      return;
    }

    const token = JWT.sign({ email: user.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.json({ token, email: user.email, name: user.getFullName() });
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

export const restrictedView = async (_req, res) => {
  return res.status(httpStatus.OK).json({
    success: true,
    message: "confidential view!",
  });
};

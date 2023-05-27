const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');

exports.signIn = async (req, res) => {
  console.log("Auth -> signIn", req.body);
  
  try {
    const { username, password } = req.body;
    const user = await User.login(username, password);
    
    if(!user) {
      res.json({error: "user / password combination does not exists"});
      return
    }
    
    const token = JWT.sign(
      { email: user.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    )
    
    res.json({token, email: user.email, name: user.getFullName()});
  } catch (e) {
    console.error(e);
    res.send(e);
  }
};

exports.login = async (req, res) => {
  const {email} = req.body;

  token = jwt.sign({email}, process.env.JWT_SECRET, {expiresIn: '1h'});
  return res.status(httpStatus.OK).json({
    success: true,
    token
  });
};

exports.restrictedView = async (_req, res) => {
  return res.status(httpStatus.OK).json({
    success: true,
    message: 'confidential view!'
  });
};
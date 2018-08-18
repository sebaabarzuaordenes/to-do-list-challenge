const jwt = require('jsonwebtoken');
if(process.env.NODE_ENV === undefined){
  require('dotenv').config();
}

module.exports = class {
  constructor(user) {
    this.secretOrPrivateKey = process.env.JWT_SECRET;
    this.secretOrPublicKey = process.env.JWT_SECRET;
    this.options = { expiresIn: process.env.JWT_EXPIRATION };
    this.user = user;
  }

  config() {
    return jwtConfig;
  }

  createToken() {
    return new Promise((resolve, reject) =>
      jwt.sign(
        { data: user },
        this.secretOrPrivateKey,
        this.options,
        (err, obj) => (err ? reject(err) : resolve(obj))
      )
    );
  }

  verifyToken(token) {
    return jwt.verify(token, this.secretOrPublicKey);
  }
};

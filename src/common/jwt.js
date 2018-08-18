const jwt = require('jsonwebtoken');
if(process.env.NODE_ENV === undefined){
  require('dotenv').config();
}

const jwtConfig = {
  'secret': process.env.JWT_SECRET,
  'expiresIn': process.env.JWT_EXPIRATION
};

module.exports = class {
  constructor(user) {
    this.secretOrPrivateKey = jwtConfig.secret;
    this.secretOrPublicKey = jwtConfig.secret;
    this.options = { expiresIn: jwtConfig.expiresIn };
  }

  config() {
    return jwtConfig;
  }

  createToken(payload) {
    return new Promise((resolve, reject) =>
      jwt.sign(
        { data: payload },
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

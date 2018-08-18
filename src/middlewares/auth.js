const Jwt = require('../common/jwt');
const jwt = new Jwt();

module.exports = async function handler(req, res, next) {
  try {
    if (!req.headers.authorization) {
      throw new Error('unauthorized, headers.authorization not exist');
    }

    const token = req.headers.authorization.replace('Bearer', '').trim();

    jwt.verify(token);
    jwt.tokenExists(token);

    next();
  } catch (e) {
    res.status(401);
    next(e);
  }
};


const Auth = require('../common/jwt');
const auth = new Auth();

module.exports = async function handler(req, res, next) {
  try {
    if (!req.headers.authorization) {
      throw new Error('unauthorized, headers.authorization not exist');
    }

    const token = req.headers.authorization.replace('Bearer', '').trim();

    auth.verify(token);
    auth.tokenExists(token);

    next();
  } catch (e) {
    res.status(401);
    next(e);
  }
};


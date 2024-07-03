const util = require('util');
const jwt = require('jsonwebtoken');

const sign = util.promisify(jwt.sign);

module.exports = {
    sign,
}
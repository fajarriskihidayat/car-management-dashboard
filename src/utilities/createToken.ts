const jwt = require("jsonwebtoken");

interface Payload {
  id: number;
  email: string;
}

const createToken = (payload: Payload) => {
  return jwt.sign(payload, process.env.SIGNATURE_KEY || "rahasia");
};

module.exports = createToken;

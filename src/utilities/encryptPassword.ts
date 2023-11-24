// @ts-ignore
const bycrpt = require("bcrypt");

const encryptPassword = async (pass: string) => {
  return await bycrpt.hash(pass, 10);
};

module.exports = encryptPassword;

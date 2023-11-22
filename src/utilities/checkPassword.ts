// @ts-ignore
const bycrpt = require("bcrypt");

const checkPassword = async (password: string, encryptPwd: string) => {
  return await bycrpt.compare(password, encryptPwd);
};

module.exports = checkPassword;

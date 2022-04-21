/**
 * Generates a random string containing numbers and letters
 * @param {number} length The lenght of the string
 * @returns {string} The generated string
 */
const generateRandomString = (length = 16) => {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return str;
};

export default generateRandomString;

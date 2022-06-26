const cryptoJS = require("crypto-js");

const secretKey = "Web3Bridge";

//Encrypting....
let cipher = cryptoJS.AES.encrypt("Immutable", secretKey);
cipher = cipher.toString();

console.log("The Cipher: ", cipher);

//Decrypting
let decipher = cryptoJS.AES.decrypt(cipher, secretKey);
decipher = decipher.toString(cryptoJS.enc.Utf8);

console.log("The Original String", decipher);

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.isDirect = direct !== undefined ? direct : true;
  }

  encrypt(message, key) {
    // must throw an Error if no args
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;
    const codeA = "A".charCodeAt(0);
    const abcCount = 26;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (/^[A-Z]$/.test(char)) {
        // calculate shift
        const shift = key[keyIndex % key.length].charCodeAt(0) - codeA;
        result += String.fromCharCode(
          ((char.charCodeAt(0) - codeA + shift) % abcCount) + codeA
        );
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;
    const codeA = "A".charCodeAt(0);
    const abcCount = 26;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (/^[A-Z]$/.test(char)) {
        const shift = key[keyIndex % key.length].charCodeAt(0) - codeA;
        result += String.fromCharCode(
          ((char.charCodeAt(0) - codeA - shift + abcCount) % abcCount) + codeA
        );
        keyIndex++;
      } else {
        result += char;
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

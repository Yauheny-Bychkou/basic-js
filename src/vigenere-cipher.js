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
const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
class VigenereCipheringMachine {
  constructor(f = true) {
    this.f = f;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);
    return this.f == false
      ? this.cryprt(message, key, "encrypt").reverse().join("")
      : this.cryprt(message, key, "encrypt").join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);
    return this.f == false
      ? this.cryprt(message, key, "decrypt").reverse().join("")
      : this.cryprt(message, key, "decrypt").join("");
  }
  cryprt(message, key, action) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let n = 0;

    for (let i = 0; i < message.length; i++) {
      if (LETTERS.indexOf(message[i]) !== -1) {
        let count = 0;
        if (action === "decrypt") {
          count = (LETTERS.indexOf(message[i]) - LETTERS.indexOf(key[n]) + 26) % 26;
        } else count = (LETTERS.indexOf(message[i]) + LETTERS.indexOf(key[n])) % 26;
        result.push(LETTERS[count]);
        if (n + 1 == key.length) {
          n = 0;
        } else n++;
      } else {
        result.push(message[i]);
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};

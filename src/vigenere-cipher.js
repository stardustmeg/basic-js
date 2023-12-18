const { NotImplementedError } = require('../extensions/index.js');

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

  encrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    // let kf = Math.ceil(text.length / key.length);
    // key = key.repeat(kf);
  
    // let codeA = 'A'.charCodeAt(0);
    // let abcCount = 26;
  
    // let result = [];
  
    // for (let i = 0; i < text.length; i++) {
    //   if (text[i] === ' ') {
    //     result.push(text[i]);
    //   } else {
    //     let letterIdx = text.charCodeAt(i) - codeA;
    //     let shift = key.charCodeAt(i) - codeA;
  
    //     result.push(
    //       String.fromCharCode( codeA + (letterIdx + shift) % abcCount )
    //     );
    //   }
    // }
  
    // return result.join('');
  }
  

  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  //   let kf = Math.ceil(text.length / key.length);
  // key = key.repeat(kf);

  // let codeA = 'A'.charCodeAt(0);
  // let abcCount = 26;

  // let result = [];

  // for (let i = 0; i < text.length; i++) {
  //   if (text[i] === ' ') {
  //     result.push(text[i]);
  //   } else {
  //     let letterIdx = text.charCodeAt(i) - codeA;
  //     let shift = key.charCodeAt(i) - codeA;

  //     result.push(
  //       String.fromCharCode( codeA + (letterIdx - shift + abcCount) % abcCount )
  //     );
  //   }
  // }

  // return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

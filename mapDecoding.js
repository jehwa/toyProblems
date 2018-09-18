/**
 * A top secret message containing uppercase letters from 'A' to 'Z' has been encoded as numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
You are an FBI agent and you need to determine the total number of ways that the message can be decoded.

Since the answer could be very large, take it modulo 109 + 7.

Example

For message = "123", the output should be
mapDecoding(message) = 3.

"123" can be decoded as "ABC" (1 2 3), "LC" (12 3) or "AW" (1 23), so the total number of ways is 3.
 */

let mapDecoding = (message) => {
  // need to improve time complexity
  let output = 0;
  let recursion = (msg) => {
    if(!msg.length) {
      output++;
      return;
    }
    if(msg[0] === '0') {
      return 0;
    }
    recursion(msg.slice(1));
    if(msg[0] + msg[1] < 27) {
      recursion(msg.slice(2));
    }
  }
  recursion(message);
  return output;
}

let test = '123' // 3
let test1 = '1221112111122221211221221212212212111221222212122221222112122212121212221212122221211112212212211211'
//782204094

console.log(mapDecoding(test));
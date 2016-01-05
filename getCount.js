'use strict';

// Initial Problem: http://www.codewars.com/kata/566859a83557837d9700001a/train/javascript

// Question: Why does the for-in construct (23-31) produce the correct output,
//    but the traditional for construct (33-42) produces an Incorrect output?

// Ponder: The for-in construct behaves differently within recursively called functions
//    when compared to a traditional for loop.

function getCount(n) {
  var numString = n.toString(),
      count = 0;

  recItr(numString);

  return count;

  function recItr(str) {
    if(str.length === 0) { return; }

    //// for-in -> Correct Output (1230 -> 5)
    for(var i in str){
      if(str.length - i !== numString.length) {
        var num = Number(str.substring(0, str.length - i));

        if(n % num === 0){ count++; }
      }

      recItr(str.substring(i + 1, str.length));
    }

    //// Traditional ->  Incorrect Output (1230 -> 7)
    // for(var i = 0; i < str.length; i++){
    //   if(str.length - i !== numString.length) {
    //     var num = Number(str.substring(0, str.length - i));
    //
    //     if(n % num === 0){ count++; }
    //   }
    //
    //   recItr(str.substring(i + 1, str.length));
    // }
  }
}

console.log(getCount(1230)); // Correct Output: 1230 -> 5
console.log('');


//// Isolated Example
var thing = 'thing';

for(var i in thing) { // i is the character index
  console.log(i);
}

console.log('');

for(var i = 0; i < thing.length; i++) { // i is the character index
  console.log(i);
}

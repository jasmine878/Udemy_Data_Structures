//we have a hash table limited by the size of arrayLength

//BASIC HASH FUNCTION DEFICIENCES
//1 - IT ONLY HASHES STRINGS
//2 - TIME COMPLEXITY IS NOT O(1).  INSTEAD TIME COMPLEXITY IS O(n)
//3 - RESULT IS NOT RANDOM ENOUGH.  RESULTS CAN GET CLUSTERED.
function hashFunction(str, arrayLength) {
  let strConversion = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    let charConversion = char.charCodeAt(0) - 96

    strConversion = (strConversion + charConversion) % arrayLength
  }

  //location for our str in the hash table
  return strConversion
}

console.log(hashFunction("hello", 11))        //expect 8
console.log(hashFunction("pink", 10))         //expect 0
console.log(hashFunction("orangered", 10))    //expect 7
console.log(hashFunction("cyan", 10))         //expect 3

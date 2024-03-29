//we have a hash table limited by the size of arrayLength

//BASIC HASH FUNCTION DEFICIENCES
//1 - IT ONLY HASHES STRINGS
//2 - TIME COMPLEXITY IS NOT O(1).  INSTEAD TIME COMPLEXITY IS O(n)
//3 - RESULT IS NOT RANDOM ENOUGH.  RESULTS CAN GET CLUSTERED.
// function hashFunction(str, arrayLength) {
//   let strConversion = 0

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i]
//     let charConversion = char.charCodeAt(0) - 96
//     console.log(charConversion);

//     strConversion = (strConversion + charConversion) % arrayLength
//   }

//   //location for our str in the hash table
//   return strConversion
// }

//IMPROVED HASH FUNCTION
//2 - Time Complexity is closer to O(1).  For loop maxes out at 100 loops.
//3 - PRIME NUMBERS INCREASE THE RANDOMNESS OF OUR HASHFUNCTION AND BETTER DISTRIBUTES OUR RESULTS
//having an arrayLength that is prime is better.  The larger the prime number is best
// function betterHashFunction(str, arrayLength) {
//   // debugger
//   let strConversion = 0
//   let primeNumber = 31

//   for (let i = 0; i < Math.min(str.length, 100); i++) {
//     let char = str[i]
//     let charConversion = char.charCodeAt(0) - 96
//     // console.log(charConversion)
//     strConversion = (strConversion * primeNumber + charConversion) % arrayLength
//   }

//   return strConversion
// }

// console.log(hashFunction("hello", 11))        //expect 8
// console.log(hashFunction("pink", 10))         //expect 0
// console.log(hashFunction("orangered", 10))    //expect 7
// console.log(hashFunction("cyan", 10))         //expect 3

// console.log(betterHashFunction("hello", 7))        //expect 4
// console.log(betterHashFunction("pink", 13))         //expect 5
// console.log(betterHashFunction("orangered", 13))    //expect 0
// console.log(betterHashFunction("cyan", 13))         //expect 5
// console.log(betterHashFunction("halloween", 17))         //expect 8


class HashTable {
  constructor(arrayLength = 4) {
    this.keyMap = new Array(arrayLength)
  }

  _hash(key) {
    let strConversion = 0
    let primeNumber = 31

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let charConversion = char.charCodeAt(0) - 96

      strConversion = (strConversion * primeNumber + charConversion) % this.keyMap.length
    }

    return strConversion
  }

  set(key, value) {
    const hashedKey = this._hash(key)
    // console.log(hashedKey)
    let slot = this.keyMap[hashedKey]

    if (slot) {
      for (let i = 0; i < slot.length; i++) {
        const keyVal = slot[i]

        //CANNOT SET DUPLICATE KEYS
        if (keyVal[0] === key) return "Key is already in use"
        else slot.push([key, value]);
      }
    } else this.keyMap[hashedKey] = [[key, value]]

    return this.keyMap
  }

  get(key) {
    // debugger
    const hashedKey = this._hash(key)
    const slot = this.keyMap[hashedKey]

    if (!slot) return undefined

    for (let i = 0; i < slot.length; i++) {
      const subkey = slot[i][0]

      if (subkey === key) return slot[i][1]
    }
  }

  keys() {
    let keysArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      const slot = this.keyMap[i]

      if (slot) {
        for (let j = 0; j < slot.length; j++) {
          keysArr.push(slot[j][0])
        }
      }
    }

    return keysArr
  }

  values() {
    let keysArr = []

    for (let i = 0; i < this.keyMap.length; i++) {
      const slot = this.keyMap[i]

      if (slot) {
        for (let j = 0; j < slot.length; j++) {
          const value = slot[j][1]

          //remove duplicates from valueArray
          if (!keysArr.includes(value)) {
            keysArr.push(value);
          }
        }
      }
    }

    return keysArr
  }

}

//BEST TIME COMPLEXITY WHEN THE HASH FUNCTION EVENLY DISTRIBUTES THE DATA
//TIME COMPLEXITY:  (INSERTION) O(1)
//TIME COMPLEXITY:  (DELETION) O(1)
//TIME COMPLEXITY:  (ACCESS) O(1)

let newHashTable = new HashTable()
newHashTable.set("halloween", "candy")
newHashTable.set("christmas", "presents");
newHashTable.set("easter", "eggs");
newHashTable.set("thanksgiving", "turkey");
newHashTable.set("birthday", "presents")
console.log(newHashTable.set("halloween", "costume"))
//expect "Key is already in use"

console.log(newHashTable.get("easter"))
//expect "eggs"
console.log(newHashTable.get("halloween"))
//expect "candy"

console.log(newHashTable.keys())
//expect ["halloween", "christmas", "easter", "thanksgiving"]

console.log(newHashTable.values())
//expect ["candy", "presents", "eggs", "turkey"]

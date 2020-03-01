module.exports = function toReadable (number) {
    let numbersToWordsArray =
    [ {number: 0, word: "zero"},{number: 1, word: "one"},{number: 2, word: "two"},{number: 3, word: "three"},{number: 4, word: "four"},
      {number: 5, word: "five"},{number: 6, word: "six"},{number: 7, word: "seven"},{number: 8, word: "eight"},{number: 9, word: "nine"},
      {number: 10, word: "ten"},{number: 11, word: "eleven"},{number: 12, word: "twelve"},{number: 13, word: "thirteen"},
      {number: 14, word: "fourteen"},{number: 15, word: "fifteen"},{number: 16, word: "sixteen"},{number: 17, word: "seventeen"},
      {number: 18, word: "eighteen"},{number: 19, word: "nineteen"},{number: 20, word: "twenty"},{number: 30, word: "thirty"},
      {number: 40, word: "forty"},{number: 50, word: "fifty"},{number: 60, word: "sixty"},{number: 70, word: "seventy"},
      {number: 80, word: "eighty"},{number: 90, word: "ninety"}
    ];
  
    numbersToWordsMap = new Map();

// Converting array to map named "numbersToWordsMap"
    numbersToWordsArray.forEach(e => numbersToWordsMap.set(e.number, e.word));
    
    if (number.toString().length = 3) {
      numberToWords = numbersToWordsMap.get(Math.trunc(number/100)) + ' hundred';
      number = number%100;
    }

  /* checking if we have number with "teen" or any number specified in numbersToWordsArray */
    if (numbersToWordsMap.get(number)) {
      numberToWords = numberToWords + ' ' + numbersToWordsMap.get(number);
    } 
    
    else {
      numberToWords = numberToWords + ' ' + numbersToWordsMap.get(number - number%10) + ' ' + numbersToWordsMap.get(number%10);
    }
    return numberToWords.replace('zero hundred ','').replace(' zero','');
    }
  

  


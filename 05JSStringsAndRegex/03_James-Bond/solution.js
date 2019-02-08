function solve() {
  let input = document.getElementById('arr').value;
  let inputArr = JSON.parse(input);
  let keyword = inputArr[0];
  //let keywordToLower = keyword.toLowerCase();
  let text = inputArr[1];

  let pattern = new RegExp(`${keyword}`, "i");
 // let search = text.search(pattern);
  let textWithReplacedKeyWord = text.replace(pattern, '####');
  textWithReplacedKeyWord = textWithReplacedKeyWord.replace(pattern, '####');
  textWithReplacedKeyWord = textWithReplacedKeyWord.replace(pattern, '####');
  textWithReplacedKeyWord = textWithReplacedKeyWord.replace(pattern, '####');
  textWithReplacedKeyWord = textWithReplacedKeyWord.replace(pattern, '####');
  textWithReplacedKeyWord = textWithReplacedKeyWord.replace(pattern, '####');
  textWithReplacedKeyWord = textWithReplacedKeyWord.replace(pattern, '####');
  textWithReplacedKeyWord = textWithReplacedKeyWord.replace(pattern, '####');

  let sentences = textWithReplacedKeyWord.split('####').map(s => s);

  let encodedPattern = /\s+[!%$#A-Z]{8}[!%$#A-Z]*[\s\.\,$]/;
  let modifiedMessages = [];

  for (let i = 0; i < sentences.length; i++) {
       if (sentences[i].search(encodedPattern) === 0) {
          let match = sentences[i].match(encodedPattern)[0];
          if (match) {
              sentences[i].replace(match, modifyWord(match));
              modifiedMessages.push(modifyWord(match));
          }
        }
    }

    for (let sentence of sentences) {
    let match = sentence.match(encodedPattern)[0];
        if (match != null) {
          sentence.replace(match, modifiedMessages.shift());
        }
    }
  function modifyWord(str){
      let arr = str.split('');
      let result = '';
    for (let i = 0; i < arr.length; i++) {
          if (arr[i] === '!') {
              arr[i] = 1
          } else if (arr[i] === '%') {
              arr[i] = 2
          } else if (arr[i] === '#') {
              arr[i] = 3
          } else if (arr[i] === '$') {
              arr[i] = 4
          } else {
              arr[i] = arr[i].toLowerCase()
          }
          result += arr[i];
      }
      return result;
  }

  console.log(sentences);
  //console.log(search);

  let resultSpan = document.getElementById('result');


}
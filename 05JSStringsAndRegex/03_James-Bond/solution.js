function solve() {
  let input = document.getElementById('arr').value;
  let inputArr = JSON.parse(input);
  let keyword = inputArr[0];
  let keywordToLower = keyword.toLowerCase();
  let text = inputArr[1];

  let pattern = new RegExp(`${keyword}`, "gi");
 // let search = text.search(pattern);
  let modifiedText = text.replace(pattern, keywordToLower);


  console.log(keyword);
  console.log(keywordToLower);
  console.log(modifiedText);
  //console.log(search);

  let resultSpan = document.getElementById('result');


}
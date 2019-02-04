function solve() {
  let str = document.getElementById('str').value;
  let resultSpan = document.getElementById('result');

  let inputTokens = str.split(' ').filter(a => a !== '');
  let messageSeparator = inputTokens.shift();

  const regex = new RegExp(`(${messageSeparator})(\\w+)(${messageSeparator})`);
  let regexTest = (/[A-Z][a-z]+/g);
  let body = '';

  for (let i = 0; i < inputTokens.length; i++) {
        body += inputTokens[i];
    }

let match = regex.exec(body);
let message = match[2];
  console.log(message);
}
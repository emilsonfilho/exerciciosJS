const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');
let motherInfo = 'The mother cats are called:';
let kittenInfo;
const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json';

fetch(requestURL)
  .then(response => response.text())
  .then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

// Add your code here
  let dataObj = JSON.parse(catString)
  console.log(dataObj)
  
  for (let mother in dataObj) {
    motherInfo += ` ${dataObj[mother].name},`
  } 
  
  motherInfo = motherInfo.substring(0, motherInfo.length - 1)
  motherInfo = motherInfo.concat('.')
  
// Don't edit the code below here!

  para1.innerText = motherInfo.replace(motherInfo[motherInfo.length - 2], '.');
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    
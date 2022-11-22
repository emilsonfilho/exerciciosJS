
let response;
let score = 75;
let machineActive = true;

if(machineActive) {

switch (score) {
 case score < 0 || score > 100:
 response = 'This is not possible, an error has occurred';
 break;

 case score <= 19:
 response = 'That was a terrible score — total fail!';
 break;

 case score <= 39:
 response = 'You know some things, but it\'s a pretty a pretty bad score.';
 break;

 case score <= 69:
 response = 'You did a passable job, not nas!';
 break;

 case score <= 89:
 response = 'That\'s a great score, you really know your stuff.';
 break;

 case score <= 100:
 response = 'What an amazing score! Did tou cheat? Are you for real?';
 break;

 default:
 response = 'nada ok';
}
} else {
  response = 'The machine is turned off. Turn it on to process your score.';
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);
    
const divs = document.querySelectorAll('div.square');
for (let i = 0 ; i < divs.length ; i++) {
	divs[i].addEventListener('click', function(e) {
		e.target.style.backgroundColor = bgChange();
	});
}

function bgChange() {
	let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	return rndCol
}

function random(number) {  
   return Math.floor(Math.random()*(number+1));
}
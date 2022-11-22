const btn = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', bgChange);

function bgChange(e) {
	let rdnCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	e.target.style.backgroundColor = rdnCol; 
	console.log(e);
}

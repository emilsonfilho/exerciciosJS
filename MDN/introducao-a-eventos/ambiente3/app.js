const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');
const p = document.querySelector('p');

form.onsubmit = function(e) {
	if (fname.value === '' || lname.value === '') {
		e.preventDefault();
		p.textContent = 'Você precisa preencher em ambos os campos.';
	}
}
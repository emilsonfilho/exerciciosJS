let btn = document.querySelector('button')
let txt = document.querySelector('p')

btn.addEventListener('click', updateBtn)

function updateBtn() {
	if (btn.textContent === 'Iniciar Máquina') {
		btn.textContent = 'Parar Máquina'
		txt.textContent = 'A máquina iniciou.'
	} else {
		btn.textContent = 'Iniciar Máquina'
		txt.textContent = 'A máquina está parada.'
	}
}
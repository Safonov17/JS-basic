const output = document.getElementById('output')
const full = document.getElementById('full')
const date = document.getElementById('date')
const time = document.getElementById('time')
let mode = 'time'

setInterval(update, 1000)
update()

time.onclick = toggleMode('time')
date.onclick = toggleMode('date')
full.onclick = toggleMode('full')

function toggleMode(modeName) {
	return function () {
		mode = modeName
		update()
	}
}

function update() {
	output.textContent = format(mode)
}

function format(formatMode) {
	const now = new Date()

	switch (formatMode) {
		case 'time':
			return now.toLocaleTimeString()
		case 'date':
			return now.toLocaleDateString()
		case 'full':
			return `${now.toLocaleTimeString()} ${now.toLocaleDateString()}`

		default:
			return now.toLocaleTimeString()
	}
}

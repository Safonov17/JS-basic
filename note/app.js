const input = document.getElementById('title')
const btnCreate = document.getElementById('create')
const list = document.getElementById('list')

const notes = [
	{ title: 'Погулять с собакой', completed: true },
	{ title: 'Помыть посуду', completed: true }
]

function getNoteTemplate(notes, i) {
	return `
		<li
			class="list-group-item d-flex justify-content-between align-items-center"
		>
			<span class="${notes.completed ? 'text-decoration-line-through' : ''}">${
		notes.title
	}</span>
			<span>
				<span class="btn btn-small btn-${
					notes.completed ? 'warning' : 'success'
				}" data-index=${i} data-type="toggle" >&check;</span>
				<span class="btn btn-small btn-danger" data-index=${i} data-type="remove" >&times;</span>
			</span>
		</li>
	`
}

list.onclick = function (event) {
	if (event.target.dataset.index) {
		const index = +event.target.dataset.index
		const type = event.target.dataset.type

		if (type == 'toggle') {
			notes[index].completed = !notes[index].completed
		}
		if (type == 'remove') notes.splice(index, 1)
	}

	render()
}

function render() {
	list.innerHTML = ''
	if (notes.length == 0) {
		list.innerHTML = '<p>Список заметок пуст :(</p>'
	}
	for (let i = 0; i < notes.length; i++) {
		list.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
	}
}
render()

btnCreate.onclick = function () {
	if (input.value === '') return
	const newNote = {
		title: input.value,
		completed: false
	}
	notes.push(newNote)
	render()
	input.value = ''
}

// const notes = ['Погулять с собакой', 'Помыть посуду']

// function getNoteTemplate(text) {
// 	return `
// 		<li
// 			class="list-group-item d-flex justify-content-between align-items-center"
// 		>
// 			<span>${text}</span>
// 			<span>
// 				<span class="btn btn-small btn-success">&check;</span>
// 				<span class="btn btn-small btn-danger">&times;</span>
// 			</span>
// 		</li>
// 	`
// }

// function render() {
// 	for (let note of notes) {
// 		list.insertAdjacentHTML('beforeend', getNoteTemplate(note))
// 	}
// }
// render()

// btnCreate.onclick = function () {
// 	if (input.value === '') return
// 	list.insertAdjacentHTML('beforeend', getNoteTemplate(input.value))
// 	input.value = ''
// }

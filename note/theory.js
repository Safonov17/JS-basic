// ARRAY
const array = [1, 3, 5, 7, 10]

console.log(`Массив => ${array}`)
console.log('')

console.log('"Array.length" = получить длину массива')
console.log(array.length)
console.log('')

console.log('"array[1]" = получить второй элемент массива')
console.log(array[1])
console.log('')

console.log('"array[array.length - 1]" = получить последний элемент массива')
console.log(array[array.length - 1])
console.log('')

const people = [
	{
		name: 'Ilia',
		budget: 1000
	},
	{
		name: 'Ivan',
		budget: 3000
	},
	{
		name: 'Anna',
		budget: 5000
	}
]

// const find = people.find(p => p.budget === 3000)
// console.log(find)

// Вернуть суммарный бюджет всех людей, с бюджетом более 1000
const sumBudget = people
	.filter(p => p.budget > 1000)
	.map(p => p.budget)
	.reduce((acc, p) => acc + p, 0)
console.log(sumBudget)

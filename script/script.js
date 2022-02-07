const addTaskInput = document.querySelector('.todomato-list_task');
const addTaskButton = document.querySelector('.todomato-list_button')
const todomatoContainer = document.querySelector('.todomato-task')

// Создаем массив через let чтобы можно было менять его содержимое.
let todomatoList = []

// Проверяем есть ли локальные таски в сторейдже.
function getLocalTasks() {
	if (localStorage.getItem('todomato')) {
		todomatoList = JSON.parse(localStorage.getItem('todomato'))
		displayTask()
	}
}

getLocalTasks()

// Функция добавляющая таску в массив.
function displayTask() {
	let displayTask = "";
	todomatoList.forEach(function (item, i) {
		console.log(item)

		displayTask += `
        <li>
            <button id="item_${i}">Удалить</button>
            <label for="item_${i}">${item.todomato}></label>
        </li>
        `;
		todomatoContainer.innerHTML = displayTask
		localStorage.setItem('todomato', JSON.stringify(todomatoList))
	})
}


addTaskButton.addEventListener('click', () => {

	const newTodomatoList = {
		todomato: addTaskInput.value
	}
	todomatoList.push(newTodomatoList)
	displayTask()
	console.log(todomatoList)

})

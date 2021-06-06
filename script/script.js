const addTaskInput = document.querySelector('.todomato-list_task');
const addTaskButton = document.querySelector('.todomato-list_button')
const todomatoTask = document.querySelector('.todomato-task')
const todomatoList = []

addTaskButton.addEventListener('click', () => {

    const newTodomatoList = {
        todomato: addTaskInput.value
    }
    todomatoList.push(newTodomatoList)
    displayTask()
    console.log(todomatoList)

})

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
        todomatoTask.innerHTML = displayTask
    })
}
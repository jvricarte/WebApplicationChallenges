window.addEventListener('onload', showTaskList)
const ulElement = document.querySelector("ul")
const input = document.querySelector("#input")

const taskList = []

function showTaskList() {
    ulElement.innerHTML = ''
    for (task of taskList) {
        const liElement = document.createElement("li")
        const position = taskList.indexOf(task)
        const localStorageItem = localStorage.getItem(task.id)
        const textTask = document.createTextNode(localStorageItem)
        const done = document.createElement("i")
        done.classList.add("fas")
        done.classList.add("fa-check-square")
        const toDelete = document.createElement("i")
        toDelete.classList.add("fas")
        toDelete.classList.add("fa-trash-alt")
        done.setAttribute('onclick', `taskDone(${position})`)
        toDelete.setAttribute('onclick', `taskDelete(${position})`)
        const breaking = document.createElement("br")

        liElement.appendChild(done)
        liElement.appendChild(toDelete)
        liElement.appendChild(textTask)
        ulElement.appendChild(liElement)
        ulElement.appendChild(breaking)

        if (task.isDone == 1) {
            liElement.classList.add("task-done")
        }

    }
}

const button = document.querySelector(".fas.fa-plus-square")
button.setAttribute('onclick', `addTask()`)

function addTask() {
    const obj = new Object
    const inputTask = input.value
    obj.taskName = inputTask
    obj.isDone = 0
    taskList.push(obj)
    input.value = ''

    const id = Math.random().toString(32).substr(2, 9)
    obj.id = id
    localStorage.setItem(obj.id, obj.taskName)
    showTaskList()
}

function taskDone(pos) {
    const listOfLi = document.querySelectorAll("li")
    listOfLi[pos].classList.toggle("task-done")
    taskList[pos].isDone == 0 ? taskList[pos].isDone = 1 : taskList[pos].isDone = 0
}

function taskDelete(pos) {
    localStorage.removeItem(taskList[pos].id)
    taskList.splice(pos, 1)
    showTaskList()
}
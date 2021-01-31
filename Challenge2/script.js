const ulElement = document.querySelector("ul")
const input = document.querySelector("#input")

let taskList = []

function showTaskList() {
    const newArray = getLocalStorage()
    taskList = JSON.parse(newArray)
    ulElement.innerHTML = ''
    for (task of taskList) {
        const liElement = document.createElement("li")
        const textTask = document.createTextNode(task.taskName)
        const done = document.createElement("i")
        done.classList.add("fas")
        done.classList.add("fa-check-square")
        const toDelete = document.createElement("i")
        toDelete.classList.add("fas")
        toDelete.classList.add("fa-trash-alt")
        const position = taskList.indexOf(task)
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
    if (input.value == "") {
        input.style.borderStyle = 'solid'
        input.style.borderColor = '#F00000'
    } else {
        input.style.borderStyle = 'none'
        const obj = new Object
        obj.taskName = input.value
        obj.isDone = 0
        taskList.push(obj)
        input.value = ''
        setLocalStorage()
        showTaskList()
    }
}

function taskDone(pos) {
    const listOfLi = document.querySelectorAll("li")
    listOfLi[pos].classList.toggle("task-done")
    taskList[pos].isDone == 0 ? taskList[pos].isDone = 1 : taskList[pos].isDone = 0
    removeLocalStorage()
    setLocalStorage()
}

function taskDelete(pos) {
    localStorage.removeItem(taskList[pos].id)
    taskList.splice(pos, 1)
    removeLocalStorage()
    setLocalStorage()
    getLocalStorage()
    showTaskList()
}

function setLocalStorage() {
    localStorage.setItem('json', JSON.stringify(taskList))
}

function getLocalStorage() {
    return localStorage.getItem('json')
}

function removeLocalStorage() {
    localStorage.removeItem('json')
}

showTaskList()
const ulElement = document.querySelector("ul")
const input = document.querySelector("#input")

const taskList = [{
    taskName: "Teste1", isDone: 0
}]

function showTaskList() {
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
button.addEventListener('click', addTask)

function addTask() {
    const obj = new Object
    const inputTask = input.value
    obj.taskName = inputTask
    obj.isDone = 0
    taskList.push(obj)
    input.value = ''

    showTaskList()
}

function taskDone(pos) {
    const listOfLi = document.querySelectorAll("li")
    listOfLi[pos].classList.toggle("task-done")
    taskList[pos].isDone == 0 ? taskList[pos].isDone = 1 : taskList[pos].isDone = 0
}

function taskDelete(pos) {
    taskList.splice(pos, 1)
    showTaskList()
}

const ulElement = document.querySelector("ul")
const input = document.querySelector("#input")


const taskList = []

function showTaskList() {
    ulElement.innerHTML = ''

    for (task of taskList) {
        const liElement = document.createElement("li")
        const textTask = document.createTextNode(task)
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
    }

}

const button = document.querySelector(".fas.fa-plus-square")
button.addEventListener('click', addTask)

function addTask() {
    const inputTask = input.value
    taskList.push(inputTask)
    input.value = ''

    showTaskList()
}

function taskDone(pos) {
    const listOfLi = document.querySelectorAll("li")
    listOfLi[pos].classList.toggle("task-done")
    
}

function taskDelete(pos) {
    taskList.splice(pos, 1)
    showTaskList()
}

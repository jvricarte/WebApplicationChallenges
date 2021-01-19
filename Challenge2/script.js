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
    const findingClass = document.querySelector(".task-done")
    if (findingClass != undefined) {
        listOfLi[pos].classList.remove("task-done")
    } else {
        listOfLi[pos].classList.add("task-done")
    }
    

}

function taskDelete(pos) {
    taskList.splice(pos, 1)
    showTaskList()
}




// function addTask() {
//     let taskInput = document.querySelector('#input').value
//     let taskOutput = document.createElement("li")
//     let done = document.createElement("i")
//     done.classList.add("fas")
//     done.classList.add("fa-check-square")
//     let toDelete = document.createElement("i")
//     toDelete.classList.add("fas")
//     toDelete.classList.add("fa-trash-alt")
//     let text = document.createTextNode(taskInput)
//     taskOutput.appendChild(text)
//     let breaking = document.createElement("br")

//     document.querySelector("ol").appendChild(done)
//     document.querySelector("ol").appendChild(toDelete)
//     document.querySelector("ol").appendChild(taskOutput)
//     document.querySelector("ol").appendChild(breaking)
// }
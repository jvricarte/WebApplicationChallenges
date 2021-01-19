function addTask() {
    let taskInput = document.querySelector('#input').value
    let taskOutput = document.createElement("li")
    let done = document.createElement("i")
    done.classList.add("fas")
    done.classList.add("fa-check-square")
    let toDelete = document.createElement("i")
    toDelete.classList.add("fas")
    toDelete.classList.add("fa-trash-alt")
    let text = document.createTextNode(taskInput)
    taskOutput.appendChild(text)
    let breaking = document.createElement("br")

    document.querySelector("ol").appendChild(done)
    document.querySelector("ol").appendChild(toDelete)
    document.querySelector("ol").appendChild(taskOutput)
    document.querySelector("ol").appendChild(breaking)
}
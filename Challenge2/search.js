// const inputSearch = document.querySelector('#input-search')
// const buttonSearch = document.querySelector('.fas.fa-search')
// const listOfTasks = document.querySelectorAll('li')
// const newList = []
// buttonSearch.setAttribute('onclick', 'render()')

// function render() {
//     if (inputSearch == "") {
//         inputSearch.style.borderStyle = 'solid'
//         inputSearch.style.borderColor = '#F00000'
//         document.querySelector('html')
//             .addEventListener('onload', showTaskList())
//     } else {
//         input.style.borderStyle = 'none'
//         ulElement.innerHTML = ''
//         document.querySelector('html').removeAttribute('onload')
//         getWords()
//         appendElement()
//     }
// }

// function getWords() {
//     for (let i = 0; i <= listOfTasks.length; i++) {
//         if (listOfTasks[i].innerText == inputSearch) {
//             newList.push(listOfTasks[i])
//         }
//     }
// }

// function appendElement() {
//     for (let i = 0; i <= newList.length; i++) {
//         ulElement.appendChild(newList[i])
//     }
// }
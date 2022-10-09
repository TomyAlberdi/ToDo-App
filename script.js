const body = document.querySelector('body')
const sw = document.querySelectorAll('.switch')

sw.forEach(e => {
    e.addEventListener('click', () => {
        body.classList.toggle('light')
        body.classList.toggle('dark')
    })
})

const form = document.querySelector('form')
const input = document.querySelector('input')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value != '' || input.value != null || input.value != undefined) {
        crearTask(input.value)
    }
})

const taskList = document.querySelector('.task-list')
const cont = document.querySelector('.cont')

const crearTask = (val) => {
    let div = document.createElement('div')
    div.classList.add('task')
    let temp = `
        <div class="subt">
            <div class="check"></div>
            <p>${val}</p>
        </div> 
        <img src="./images/icon-cross.svg" alt="" class="cross">
    `
    div.innerHTML = temp
    taskList.insertBefore(div,cont)
}
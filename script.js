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

    let subt = document.createElement('div')
    subt.classList.add('subt')

    let checkDiv = document.createElement('div')
    checkDiv.classList.add('check')

    let checkImg = document.createElement('img')
    checkImg.setAttribute('src','./images/icon-check.svg')

    let p = document.createElement('p')
    p.innerHTML = val

    let img = document.createElement('img')
    img.setAttribute('src','./images/icon-cross.svg')
    img.classList.add('cross')
    
    checkDiv.appendChild(checkImg)
    subt.appendChild(checkDiv)
    subt.appendChild(p)
    div.appendChild(subt)
    div.appendChild(img)

    div.addEventListener('mouseover', () => {
        div.lastElementChild.style.display = "block"
    })
    div.addEventListener('mouseleave', () => {
        div.lastElementChild.style.display = "none"
    })
    checkDiv.addEventListener('mouseover', () => {
        checkDiv.lastElementChild.style.display = "block"
    })
    checkDiv.addEventListener('mouseleave', () => {
        checkDiv.lastElementChild.style.display = "none"
    })
    taskList.insertBefore(div,cont)
}

/* Active States */

const check = document.querySelectorAll('.check')
check.forEach(c => {
    c.addEventListener('mouseover', () => {
        c.lastElementChild.style.display = "block"
    })
    c.addEventListener('mouseleave', () => {
        c.lastElementChild.style.display = "none"
    })
})

const tasks = document.querySelectorAll('.task')
tasks.forEach(t => {
    t.addEventListener('mouseover', () => {
        t.lastElementChild.style.display = "block"
    })
    t.addEventListener('mouseleave', () => {
        t.lastElementChild.style.display = "none"
    })
})
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
    div.setAttribute('id',val.replace(/\s+/g, ''))

    let subt = document.createElement('div')
    subt.classList.add('subt')

    let checkDiv = document.createElement('div')
    checkDiv.classList.add('check')
    checkDiv.addEventListener('click', () => {
        completeTask(div.id)
    })

    let checkImg = document.createElement('img')
    checkImg.setAttribute('src','./images/icon-check.svg')

    let p = document.createElement('p')
    p.innerHTML = val

    let img = document.createElement('img')
    img.setAttribute('src','./images/icon-cross.svg')
    img.classList.add('cross')

    img.addEventListener('click', () => {
        deleteTask(div.id)
    })
    
    checkDiv.appendChild(checkImg)
    subt.appendChild(checkDiv)
    subt.appendChild(p)
    div.appendChild(subt)
    div.appendChild(img)

    /* New task active states */
    checkDiv.addEventListener('mouseover', () => {
        checkDiv.lastElementChild.style.display = "block"
    })
    checkDiv.addEventListener('mouseleave', () => {
        checkDiv.lastElementChild.style.display = "none"
    })

    form.reset()

    taskList.insertBefore(div,cont)
}

const check = document.querySelectorAll('.check')
check.forEach(c => {
    c.addEventListener('mouseover', () => {
        c.lastElementChild.style.display = "block"
    })
    c.addEventListener('mouseleave', () => {
        c.lastElementChild.style.display = "none"
    })
    c.addEventListener('click', () => {
        let parent = c.parentElement
        completeTask(parent.parentElement.id)
    })
})

const cross = document.querySelectorAll('.cross')
cross.forEach(c => {
    c.addEventListener('click', () => {
        deleteTask(c.parentElement.id)
    })
})

const deleteTask = (id) => {
    let task = document.querySelector(`#${id}`)
    task.remove()
}

const completeTask = (id) => {
    let task = document.getElementById(id)
    task.classList.toggle('complete')
}
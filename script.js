const body = document.querySelector('body')
const sw = document.querySelectorAll('.switch')

sw.forEach(e => {
    e.addEventListener('click', () => {
        body.classList.toggle('light')
        body.classList.toggle('dark')
    })
})
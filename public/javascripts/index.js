const buttons = document.querySelectorAll('.bx-edit')
const formUpdate = document.querySelector('.form-update')
const Uname = document.getElementById('name-edit')
const lastName = document.getElementById('last-name-edit')
const email = document.getElementById('email-edit')
const users = document.querySelectorAll('tbody')
const formEdit = document.querySelector('.form-edit')
const buttonsDelete = document.querySelectorAll('.bx-trash')
const close = document.querySelector('.close')
const formDelete = document.querySelector('.formDelete')

buttons.forEach(e => {
    e.addEventListener('click', () => {
        if (users[e.id - 1].id == e.id) {
            console.log(users[e.id - 1].children[0].children[1].innerText)
            Uname.value = users[e.id - 1].children[0].children[0].innerText
            lastName.value = users[e.id - 1].children[0].children[1].innerText
            email.value = users[e.id - 1].children[0].children[2].innerText
            formEdit.action = `/editar/${e.id}?_method=PUT`
        }

        console.log(e.id)
        formUpdate.style.display = "flex"

    })
})



close.addEventListener('click', () => {
    formUpdate.style.display = "none"
})


buttonsDelete.forEach(e => {
    e.addEventListener('click', () => {

        if (confirm("Você realmente deseja excluir?")) {

            formDelete.action = `/excluir/${e.id}?_method=DELETE`
        }

    })
})
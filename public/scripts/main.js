import Modal from './modal.js'

const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar botões
const checkbuttons = document.querySelectorAll(".actions a.check")

checkbuttons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    const text = check ? "Marcar como lida" : "Excluir"
    event.preventDefault()

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `${text}`
    check? modalButton.classList.remove("red") : modalButton.classList.add("red")
    modal.open()
}


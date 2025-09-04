// começando
let btn_add = document.querySelector("#Btn-Add")
let btn_dell = document.querySelector("#Btn-Dell")
let contagem = 0

btn_add.addEventListener("click", add)
btn_dell.addEventListener("click", dell)

function add() {
    let text_list = String(document.querySelector("#Val-text").value)
    let lista = document.querySelector("#lista")

    if (text_list === "") {
        return
    }

    contagem++

    const p = document.createElement("p")
    p.textContent = text_list

    const button = document.createElement("button")
    const div = document.createElement("div")

    button.textContent = "X"
    button.addEventListener("click", function () {
        div.remove()   
    })

    div.className = "div_list"
    div.textContent = contagem
    div.appendChild(p)
    div.appendChild(button)

    lista.appendChild(div)
}

function dell() {
    let listas = document.querySelector("#lista")
    contagem = 0
    listas.innerHTML = ""
}
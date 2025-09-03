// começando
let btn_add = document.querySelector("#Btn-Add")
let btn_dell = document.querySelector("#Btn-Dell")

btn_add.addEventListener("click", add)
btn_dell.addEventListener("click", dell)

function add() {
    let text_list = String(document.querySelector("#Val-text").value)
    let lista = document.querySelector("#lista")

    if (text_list === "") {
        return
    }

    const p = document.createElement("p")
    p.textContent = text_list

    const button = document.createElement("button")
    button.textContent = "X"

    const div = document.createElement("div")
    div.className = "div_list"
    div.appendChild(p)
    div.appendChild(button)

    lista.appendChild(div)
}

function dell() {
    let listas = document.querySelector("#lista")

    listas.innerHTML = ""
}
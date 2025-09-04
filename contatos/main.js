let user_name = String(document.querySelector("#name").value)
let user_email = String(document.querySelector("#email").value)
let labels = document.querySelector("#labels")
let enviar = document.querySelector("#enviar")

enviar.addEventListener("click", criar)

let peoples = []
function criar() {
    let people = {
        name: user_name,
        email: user_email
    }

    peoples.push(people)

    labels.textContent = peoples[0]["name"]
}
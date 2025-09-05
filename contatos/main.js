const labels = document.querySelector("#labels")
const enviar = document.querySelector("#enviar")
let adi = -1

enviar.addEventListener("click", criar)

let peoples = []
function criar() {
    const user_name = String(document.querySelector("#name").value)
    const user_email = String(document.querySelector("#email").value)
    const user_msg = String(document.querySelector("#msg_text").value)

    let people = {
        name: user_name,
        email: user_email,
        msg: user_msg
    }

    adi++

    peoples.push(people)

    const tr = document.createElement("tr")
    const td_name = document.createElement("td")
    const td_email = document.createElement("td")
    const td_msg = document.createElement("td")

    td_name.textContent = peoples[adi]["name"]
    tr.appendChild(td_name)
    labels.appendChild(tr)

    td_email.textContent = peoples[adi]["email"]
    tr.appendChild(td_email)
    labels.appendChild(tr)

    td_msg.textContent = peoples[adi]["msg"]
    tr.appendChild(td_msg)
    labels.appendChild(tr)
}
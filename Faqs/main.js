const faqs = document.querySelectorAll(".faqs")
const activer = document.querySelector(".activ")


faqs.forEach(faq => {
    faq.addEventListener("click", function() {
        faqs.forEach(question => {
            question.classList.remove("activ")
        })

        faq.classList.add("activ")
    })
});
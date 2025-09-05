const faqs = document.querySelectorAll(".faqs")
const activer = document.querySelector(".activ")

faqs.forEach(faq => {
    faq.addEventListener("click", function() {
        
        if(faq.classList.contains("activ")){
            faq.classList.remove("activ")
        }else{
            faqs.forEach(item=>{
                item.classList.remove("activ")
            })
            faq.classList.add("activ")
        }
    })
});
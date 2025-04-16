// FAQ 

let faqItem = document.getElementsByClassName('faq-item');
let faqQuestion = document.getElementsByClassName('faq-question');
let faqAnswer = document.getElementsByClassName('faq-answer');
let faqPlusIcon = document.getElementsByClassName('faq-plus-icon');
let faqCancelIcon = document.getElementsByClassName('faq-cancel-icon');


for(let i=0; i < faqAnswer.length; i++){
    faqItem[i].addEventListener("click", function showAnswer(){;
        faqAnswer[i].classList.toggle("d-none");
        faqPlusIcon[i].classList.toggle("d-none");
        faqCancelIcon[i].classList.toggle("d-none");
})    


}









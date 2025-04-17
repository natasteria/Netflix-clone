// trending-Section 
let trendingRow = document.getElementById('trending-row');
let leftArrow = document.getElementById('arrow-left');
let rightArrow = document.getElementById('arrow-right');

console.log(trendingRow);

rightArrow.addEventListener("click", function(){
    trendingRow.scrollBy({
        left: 1000, 
        behavior: "smooth"
    })
    leftArrow.classList.remove("d-none");

})

leftArrow.addEventListener("click", function(){
    trendingRow.scrollBy({
        left: -1000, 
        behavior: "smooth"
    })
    leftArrow.classList.add("d-none");

})

// FAQ 

let faqItem = document.getElementsByClassName('faq-item');
let faqQuestion = document.getElementsByClassName('faq-question');
let faqAnswer = document.getElementsByClassName('faq-answer');
let faqPlusIcon = document.getElementsByClassName('faq-plus-icon');
let faqCancelIcon = document.getElementsByClassName('faq-cancel-icon');


for(let i=0; i < faqAnswer.length; i++){
    faqItem[i].addEventListener("click", function showAnswer(){
        faqAnswer[i].classList.toggle("d-none");
        faqPlusIcon[i].classList.toggle("d-none");
        faqCancelIcon[i].classList.toggle("d-none");
})    

}









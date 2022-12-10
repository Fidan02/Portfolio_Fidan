//Auto Texting Code
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Student"
    }, 0);
    setTimeout(() => {
        text.textContent = "Web Developer"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Freelancer"
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000)

//Flipping Code

const box = document.querySelector('.box-inner');
box.addEventListener('click', function (){
    box.classList.toggle('isflipped')
})
const boxtwo = document.querySelector('.box-innertwo');
boxtwo.addEventListener('click', function (){
    boxtwo.classList.toggle('isflipped')
})

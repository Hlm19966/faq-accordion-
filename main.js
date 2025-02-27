const plusIcon = document.querySelectorAll(".icon-plus");
const answers = document.querySelectorAll(".answer");

plusIcon.forEach((icon,index) => {
    icon.addEventListener("click", ()=> {

        answers[index].classList.toggle("active");
        icon.classList.toggle("active");

    })
})
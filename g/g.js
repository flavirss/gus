const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question"); 
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");


if (question) {
    yesBtn.addEventListener("click", () => {
        question.innerHTML = "Eu te amo para sempre, meu amor 💗 eu te prometo cada batida do meu coração";
        gif.src = "https://64.media.tumblr.com/168889c9be784a50503b9a725de290c0/bd03589c222ad475-cb/s500x750/e89c87e4f136138121da0c80b26e801d377389bd.gif";
    });
}


noBtn.style.position = "absolute"; 

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});


const myButton = document.getElementById("myButton");
if (myButton) {
    myButton.addEventListener("click", function() {
        this.style.display = "none";
    });
}

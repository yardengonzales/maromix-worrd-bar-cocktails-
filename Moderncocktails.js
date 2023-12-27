const modalButtons = document.querySelectorAll(".read-more-button, .read-more-button1");
const modals = document.querySelectorAll(".window");
const closeButtons = document.querySelectorAll(".closemodal");
var overlayElement = document.querySelector('.overlay');

modalButtons.forEach((modalButton, index) => {
    modalButton.addEventListener("click", function () {
        console.log("Button clicked");
        modals[index].classList.remove("hidden");
        overlayElement.style.filter = 'brightness(40%)';
    });
});

closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
        modals[index].classList.add("hidden");
        overlayElement.style.filter = 'brightness(100%)';
        modals.style.display = 'none';
    });
});
//DONE 2



const modalButtons2 = document.querySelectorAll("#read-more-button2");
const modals2 = document.querySelectorAll(".window2");
const closeButtons2 = document.querySelectorAll("#closemodal2");

modalButtons2.forEach((modalButton, index) => {
    modalButton.addEventListener("click", function () {
        modals2[index].classList.remove("hidden");
        modals2[index].style.display = 'flex';
        overlayElement.style.filter = 'brightness(40%)';
    });
});

closeButtons2.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
        modals2[index].classList.add("hidden");
      
        modals2[index].style.display = 'none';
        overlayElement.style.filter = 'brightness(100%)';
    });
    
});

//DONE 2

const modalButtons3 = document.querySelectorAll("#read-more-button3");
const modals3 = document.querySelectorAll(".window3");
const closeButtons3 = document.querySelectorAll("#closemodal3");

modalButtons3.forEach((modalButton, index) => {
    modalButton.addEventListener("click", function () {
        modals3[index].classList.remove("hidden");
        modals3[index].style.display = 'flex';
        overlayElement.style.filter = 'brightness(40%)';
    });
});

closeButtons3.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
        modals3[index].classList.add("hidden");
      
        modals3[index].style.display = 'none';
        overlayElement.style.filter = 'brightness(100%)';
    });
    
});

//DONE 3 

const modalButtons4 = document.querySelectorAll("#read-more-button4");
const modals4 = document.querySelectorAll(".window4");
const closeButtons4 = document.querySelectorAll("#closemodal4");

modalButtons4.forEach((modalButton, index) => {
    modalButton.addEventListener("click", function () {
        modals4[index].classList.remove("hidden");
        modals4[index].style.display = 'flex';
        overlayElement.style.filter = 'brightness(40%)';
    });
});

closeButtons4.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
        modals4[index].classList.add("hidden");
      
        modals4[index].style.display = 'none';
        overlayElement.style.filter = 'brightness(100%)';
    });
    
});

//DONE 4


const modalButtons5 = document.querySelectorAll("#read-more-button5");
const modals5 = document.querySelectorAll(".window5");
const closeButtons5 = document.querySelectorAll("#closemodal5");

modalButtons5.forEach((modalButton, index) => {
    modalButton.addEventListener("click", function () {
        modals5[index].classList.remove("hidden");
        modals5[index].style.display = 'flex';
        overlayElement.style.filter = 'brightness(50%)';
    });
});

closeButtons5.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
        modals5[index].classList.add("hidden");
      
        modals5[index].style.display = 'none';
        overlayElement.style.filter = 'brightness(100%)';
    });
    
});

//DONE 5
const modalButtons6= document.querySelectorAll("#read-more-button6");
const modals6 = document.querySelectorAll(".window6");
const closeButtons6 = document.querySelectorAll("#closemodal6");

modalButtons6.forEach((modalButton, index) => {
    modalButton.addEventListener("click", function () {
        modals6[index].classList.remove("hidden");
        modals6[index].style.display = 'flex';
        overlayElement.style.filter = 'brightness(60%)';
    });
});

closeButtons6.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
        modals6[index].classList.add("hidden");
      
        modals6[index].style.display = 'none';
        overlayElement.style.filter = 'brightness(100%)';
    });
    
});
//DONE 6


const modalButtons7= document.querySelectorAll("#read-more-button7");
const modals7 = document.querySelectorAll(".window7");
const closeButtons7 = document.querySelectorAll("#closemodal7");

modalButtons7.forEach((modalButton, index) => {
    modalButton.addEventListener("click", function () {
        modals7[index].classList.remove("hidden");
        modals7[index].style.display = 'flex';
        overlayElement.style.filter = 'brightness(70%)';
    });
});

closeButtons7.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
        modals7[index].classList.add("hidden");
      
        modals7[index].style.display = 'none';
        overlayElement.style.filter = 'brightness(100%)';
    });
    
});

//DONE 7



const modalButtons8= document.querySelectorAll("#read-more-button8");
const modals8 = document.querySelectorAll(".window8");
const closeButtons8 = document.querySelectorAll("#closemodal8");

modalButtons8.forEach((modalButton, index) => {
    modalButton.addEventListener("click", function () {
        modals8[index].classList.remove("hidden");
        modals8[index].style.display = 'flex';
        overlayElement.style.filter = 'brightness(80%)';
    });
});

closeButtons8.forEach((closeButton, index) => {
    closeButton.addEventListener("click", function () {
        modals8[index].classList.add("hidden");
      
        modals8[index].style.display = 'none';
        overlayElement.style.filter = 'brightness(100%)';
    });
    
});
//DONE 8
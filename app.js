'use strict';

const showModalBtns = document.querySelectorAll("button");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".modal i");

showModalBtns.forEach(showModalBtn => {
    showModalBtn.addEventListener("click", () => {
        modalContainer.classList.add("show");
    });
});

closeModalBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});

modalContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal-container")){
        closeModalBtn.click();
    }
});
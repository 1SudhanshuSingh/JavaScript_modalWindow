"use strict";
window.onload = () => {
  const app = {
    modalBtns: document.querySelectorAll(".modal-buttons"),
    modals: document.querySelectorAll(".modal"),
    overlay: document.querySelector(".overlay"),
    closeModalBtn: document.querySelectorAll(".close-modal")
  };

  const closeModal = cnt => {
    app.overlay.classList.add("hidden");
    app.modals[cnt].classList.add("hidden");
  };

  for (let i = 0; i < app.modalBtns.length; i++) {
    app.modalBtns[i].addEventListener("click", () => {
      for (let j = 0; j < app.modals.length; j++) {
        app.modals[j].classList.add("hidden");
        app.overlay.classList.remove("hidden");
        app.closeModalBtn[j].addEventListener("click", () => {
          closeModal(j);
        });
      }
      app.modals[i].classList.remove("hidden");
    });
  }
};

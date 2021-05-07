const link = document.querySelector(".search-hindow");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-window-show");
});

const link = document.querySelector(".search-hotel-button");
const form = document.querySelector(".modal-window-show");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("modal-window-show");
});

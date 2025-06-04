const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const body = document.body;
btn.onclick = function () {
  modal.style.display = "flex";
  body.classList.add("locked");
};
span.onclick = function () {
  modal.style.display = "none";
  body.classList.remove("locked");
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove("locked");
  }
};

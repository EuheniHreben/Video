const btnTheme = document.querySelector(".btn-toggle");

function updateButtonText() {
  if (document.body.classList.contains("dark")) {
    btnTheme.textContent = "Dark";
  } else {
    btnTheme.textContent = "Light";
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

updateButtonText();

btnTheme.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark");

  updateButtonText();

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const toggleTheme = document.querySelector(".btn-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleTheme.checked = true;
}

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleTheme.textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    toggleTheme.textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
});

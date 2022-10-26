var checkbox = document.getElementById("mode-toggle");

if (sessionStorage.getItem("mode") == "dark") {
  darkmode();
} else {
  lightmode();
}

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    darkmode();
  } else {
    lightmode();
  }
});

function darkmode() {
    document.getElementById("stylesheet").setAttribute("href", './CSS/dark.css');
    checkbox.checked = true;
    sessionStorage.setItem("mode", "dark");
}

function lightmode() {
    document.getElementById("stylesheet").setAttribute("href", './CSS/light.css');
    checkbox.checked = false;
    sessionStorage.setItem("mode", "light");
}
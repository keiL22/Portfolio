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
    var element = document.body;
    element.className = "dark-mode";
    checkbox.checked = true;
    sessionStorage.setItem("mode", "dark");
}

function lightmode() {
  var element = document.body;
  element.className = "light-mode";
    checkbox.checked = false;
    sessionStorage.setItem("mode", "light");
}
const darkmode = "dark-mode";
const darkmode_class = "dark-mode";

const enabled = "enabled";
const disabled = "disabled";

function toggleDarkmode() {
  let dm = document.body.classList.toggle(darkmode_class);
  if (dm) {
    localStorage.setItem(darkmode, enabled);
  } else {
    localStorage.setItem(darkmode, disabled);
  }
}

const buttons = document.querySelectorAll(".button-dark-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    toggleDarkmode();
  });
});

if (localStorage.getItem(darkmode) === enabled) {
  document.body.classList.add(darkmode_class);
}

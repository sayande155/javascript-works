const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    body.style.backgroundColor = event.target.id;
  });
});

const startNow = () => {
  document.body.style.backgroundColor = getRandomColor();
};

const getRandomColor = () => {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId = null;

document.querySelector("#start").addEventListener("click", (e) => {
  if (!intervalId) {
    intervalId = setInterval(startNow, 100);
  }
});

document.querySelector("#stop").addEventListener("click", (e) => {
  if (intervalId != null) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

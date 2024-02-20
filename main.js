const random = document.querySelector("#random");
const yes = document.querySelector("#yes");
const no = document.querySelector("#no");

const topNumber = no.getBoundingClientRect().top;
const rightNumber = no.getBoundingClientRect().right;
const leftNumber = no.getBoundingClientRect().left;

const heightBtn = no.offsetHeight;
const widthBtn = no.offsetWidth;

const viewportHeight = window.innerHeight - 350;
const viewportWidth = window.innerWidth;

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

let maxTopNumber = Math.abs(viewportHeight - topNumber - heightBtn - 10);
let minxXNumber = Math.abs(viewportWidth - leftNumber - 10);
let maxXNumber = Math.abs(viewportWidth - rightNumber - 10);
maxTopNumber = Math.floor(maxTopNumber);
maxXNumber = Math.floor(maxXNumber);
console.log(minxXNumber);
console.log(widthBtn);

no.addEventListener("click", () => {
  let top = Math.floor(randomNumber(heightBtn + 10, maxTopNumber));
  let y = Math.floor(randomNumber(-minxXNumber, maxXNumber));
  console.log(y);
  no.style.transform = `translate(${y}px, ${top}px)`;
});

// no.style.transform = "translate(px)";

yes.addEventListener("click", () => dialog.showModal());

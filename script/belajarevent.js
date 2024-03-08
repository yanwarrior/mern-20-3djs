let btnKlik = document.querySelector("#btnKlik");
let span = document.querySelector("h1 span");
let counter = 0;


btnKlik.addEventListener("click", (e) => {
  counter++;
  span.textContent = counter; 
})

const box = document.getElementById("box-container");
const option=document.getElementById("option")
let result = document.getElementById("result");
const scores=document.getElementById("score");
let randomcolor=null;
let score = Number(localStorage.getItem("score"));
scores.innerText = score;
const guesscolorbtw=(min,max)=>{
 let t=min+Math.floor(Math.random()*(max-min+1));
 return t;
}
console.log(guesscolorbtw(0,255));

function RGBcolor() {
    const blue = guesscolorbtw(0,255);
    const red = guesscolorbtw(0,255);
    const green = guesscolorbtw(0,255);
    return `rgb(${blue}, ${red},${green})`
}

console.log(randomcolor);

function start() {
  option.innerHTML = ""; 
  randomcolor = RGBcolor();
  box.innerText = randomcolor;
  let ind = guesscolorbtw(0, 5);
  const div = document.createElement("div");
  div.classList.add("options");
  for (let i = 0; i < 6; i++) {
    const d = document.createElement("div");
    // d.innerText = "good";
    d.classList.add("color");
    console.log("ind" ,ind);
    d.style.backgroundColor = ind === i ? randomcolor : RGBcolor();
    d.addEventListener("click", () => {
      if (ind === i) {
        result.innerText = "Result: correct";
        score += 1;
      } else {
        score = 0;
        result.innerText = "Result: incorrect";
      }
      scores.innerText = score;
      start();
      localStorage.setItem("score", score);
    });
    div.appendChild(d);
  }

  option.appendChild(div);
}

start();


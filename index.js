const question1 = document.querySelector("#q1");
const question2 = document.querySelector("#q2");
const question3 = document.querySelector("#q3");

//q1 button
const btn1_1 = document.getElementById("btn1-1");
const btn1_2 = document.getElementById("btn1-2");
const btn1_3 = document.getElementById("btn1-3");
const btn1_4 = document.getElementById("btn1-4");
//q2 button
const btn2_1 = document.getElementById("btn2-1");
const btn2_2 = document.getElementById("btn2-2");
const btn2_3 = document.getElementById("btn2-3");
const btn2_4 = document.getElementById("btn2-4");
//q3 button
const btn3_1 = document.getElementById("btn3-1");
const btn3_2 = document.getElementById("btn3-2");
const btn3_3 = document.getElementById("btn3-3");
const btn3_4 = document.getElementById("btn3-4");

const res1_1 = document.getElementById("res1-1");
const res1_2 = document.getElementById("res1-2");
const res2_1 = document.getElementById("res2-1");
const res2_2 = document.getElementById("res2-2");
const res3_1 = document.getElementById("res3-1");
const res3_2 = document.getElementById("res3-2");

const mousemove = document.querySelector(".mousemove");

const keypress = document.querySelector(".keypress");
const key = document.getElementById("key");

const nav = document.querySelector("nav");

//form
const form = document.querySelector("form");
const text = document.getElementById("name");
const select = document.querySelector("select");
const error = document.getElementById("errorCGV");
const cgv = document.getElementById("cgv");

const result = document.getElementById("result");

// mouseover event => quand la souris survole un element
question1.addEventListener("mouseover", () => {
  question1.style.borderStyle = "solid";
});
// mouseout => quand la souris ne survole plus l'element ciblé
question1.addEventListener("mouseout", () => {
  question1.style.borderStyle = "initial";
});

question2.addEventListener("mouseover", () => {
  question2.style.borderStyle = "solid";
});
question2.addEventListener("mouseout", () => {
  question2.style.borderStyle = "initial";
});

question3.addEventListener("mouseover", () => {
  question3.style.borderStyle = "solid";
});
question3.addEventListener("mouseout", () => {
  question3.style.borderStyle = "initial";
});

//click event q1 => quand on clic sur l'rlrmrnt ciblé
btn1_1.addEventListener("click", () => {
  res1_2.classList.add("wrongResponse");
  btn1_1.style.borderStyle = "solid";
});
btn1_2.addEventListener("click", () => {
  res1_2.classList.add("wrongResponse");
  btn1_2.style.borderStyle = "solid";
});
btn1_3.addEventListener("click", () => {
  res1_1.classList.add("goodResponse");
  btn1_3.style.borderStyle = "solid";
});
btn1_4.addEventListener("click", () => {
  res1_2.classList.add("wrongResponse");
  btn1_3.style.borderStyle = "solid";
});

//click ecent q2
btn2_1.addEventListener("click", () => {
  res2_2.classList.add("wrongResponse");
  btn2_1.style.borderStyle = "solid";
});
btn2_2.addEventListener("click", () => {
  res2_2.classList.add("wrongResponse");
  btn2_2.style.borderStyle = "solid";
});
btn2_3.addEventListener("click", () => {
  res2_1.classList.add("goodResponse");
  btn2_3.style.borderStyle = "solid";
});
btn2_4.addEventListener("click", () => {
  res2_2.classList.add("wrongResponse");
  btn2_4.style.borderStyle = "solid";
});

//click event q3
btn3_1.addEventListener("click", () => {
  res3_2.classList.add("wrongResponse");
  btn3_1.style.borderStyle = "solid";
});
btn3_2.addEventListener("click", () => {
  res3_2.classList.add("wrongResponse");
  btn3_2.style.borderStyle = "solid";
});
btn3_3.addEventListener("click", () => {
  res3_1.classList.add("goodResponse");
  btn3_3.style.borderStyle = "solid";
});
btn3_4.addEventListener("click", () => {
  res3_2.classList.add("wrongResponse");
  btn3_4.style.borderStyle = "solid";
});

//mousemove => lors du mouvement de la souris
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

//mousedown => quand on clic
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%";
  mousemove.style.border = "2px solid blue";
});

//mouseup => quand le clic est relaché
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%";
  mousemove.style.border = "2px solid black";
});

//keypress => quand on press sur une touche du clavier
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
});

// scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    nav.style.top = "0px";
  } else {
    nav.style.top = "-50px";
  }
});

//form event

// enregistre la valeur de l'input
let pseudo;
text.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

let language;
select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //empeche le navigateur de changer de page lors du submit
  if (cgv.checked) {
    // si cgv cicher => insers du HTML
    result.innerHTML = `
    <h3>Nom : ${pseudo}</h3>
    <h4>Langue : ${language}</h4>
    `;
    error.textContent = "";
  } else {
    error.textContent = "Veuillez accepter les CGV";
    error.style.color = "red";
    console.log("Validé");
  }
});

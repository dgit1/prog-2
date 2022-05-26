const menubtn = document.querySelector(".menu");

menubtn.addEventListener("click", () => {
  const list = document.querySelector(".list");
  list.classList.toggle("show");
});

const cards = document.querySelectorAll(".card");
const cArr = [...cards];

cArr.forEach((card) => {
  card.addEventListener("click", () => {
    card.style.animation = "cards 1s linear forwards";
  });
});

const mainsignup = document.getElementById("signup");
const formcontainer = document.querySelector(".form");

mainsignup.addEventListener("click", (e) => {
  e.preventDefault();
  formcontainer.classList.toggle("showform");
});

const form = document.querySelector("form");
const sign = document.querySelector(".sign");

const username = document.querySelector(".username");
const email = document.querySelector(".email");
const pass1 = document.querySelector(".pass1");
const passconfirm = document.querySelector(".passconfirm");

let emailexp = /\w+@(?:gmail|hotmail|outlook).com/g; /*/\w+@gmail.com/g*/
let nameexp = /[\w_]/g;
let passexp = /[A-Z,a-z]+\d{7}/g;
// const errormess = document.querySelectorAll(".message");
// console.log(errormess);
sign.addEventListener("click", (e) => {
  e.preventDefault();

  const nameval = username.value.trim();
  const emailval = email.value.trim();
  const pass1val = pass1.value.trim();
  const passconfirmval = passconfirm.value.trim();
  let mess = "";

  if (nameval.match(nameexp)) {
    setScfor(username);
  } else {
    mess =
      "* your input must not have sympols except for _ .\n * numbers,charcters are allowed";
    seterrorfor(username, mess);
  }

  if (emailval.match(emailexp)) {
    setScfor(email);
  } else {
    mess = "enter a correct email format";
    seterrorfor(email, mess);
  }

  if (pass1val.match(passexp)) {
    setScfor(pass1);
  } else {
    mess = "* your password must be 8 digits .\n *must begin with a chracter .";
    seterrorfor(pass1, mess);
  }

  if (passconfirmval.match(passexp)) {
    if (pass1val == passconfirmval) {
      setScfor(passconfirm);
    } else if (pass1val != passconfirmval) {
      mess = "your passwords dosent match";
      seterrorfor(passconfirm, mess);
    }
  } else {
    mess = "* your password must be 8 digits .\n *must begin with a chracter .";
    seterrorfor(passconfirm, mess);
  }
});

function seterrorfor(inputbox, errorMess) {
  const inbox = inputbox.parentElement;
  const ermess = inbox.children[2];
  inputbox.className = `${inputbox.classList.item(0)} er`;
  ermess.style.display = "block";
  ermess.innerText = errorMess;
}

function setScfor(inputbox) {
  const inbox = inputbox.parentElement;
  const ermess = inbox.children[2];
  console.log(inputbox.classList.item(0));
  inputbox.className = `${inputbox.classList.item(0)} sc`;
  ermess.style.display = "none";
}

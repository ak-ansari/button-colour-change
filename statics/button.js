let allbuttons = document.getElementsByTagName("button");
let copyallbuttons = [];
for (let i = 0; i < allbuttons.length; i++) {
  copyallbuttons.push(allbuttons[i].classList[1]);
}
function btncolorchange(btnbuddy) {
  if (btnbuddy.value == "blue") {
    btnblue();
  } else if (btnbuddy.value === "red") {
    btnred();
  } else if (btnbuddy.value === "green") {
    btngreen();
  } else if (btnbuddy.value === "yellow") {
    btnyellow();
  } else if (btnbuddy.value === "random") {
    btnrandom();
  } else if (btnbuddy.value === "reset") {
    btnreset();
  }
}
function btngreen() {
  for (let i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add("btn-success");
  }
}
function btnred() {
  for (let i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add("btn-danger");
  }
}
function btnblue() {
  for (let i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add("btn-primary");
  }
}
function btnyellow() {
  for (let i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add("btn-warning");
  }
}
function btnrandom() {
  for (let i = 0; i < allbuttons.length; i++) {
    let int = Math.floor(Math.random() * 4);
    let x = ["btn-danger", "btn-primary", "btn-success", "btn-warning"];
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(x[int]);
  }
}
function btnreset() {
  for (let i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(copyallbuttons[i]);
  }
}

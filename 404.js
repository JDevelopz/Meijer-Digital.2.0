// Change text h1 span every 1 seconds to another word.
var text = ["10", "9", "8","7","6","5","4","3","2","1","0"];
var counter = 0;
var elem = document.querySelector('p span');
const elemp = document.querySelector('p');
const main = document.querySelector('h1');
const btn = document.querySelector("button");
const ctf = document.querySelector("containerfluid");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  } if (text[counter] == "0"){
    main.style.fontSize = "4rem";
    main.innerHTML = "Just joking! <br> Click the button <br> to go back to the homepage";
    elemp.innerHTML = "This website wil not self-destruct!<br> This page is just under maintainance.. ";
    btn.classList.remove("bb");
    ctf.style.paddingTop = "20rem";
}
}

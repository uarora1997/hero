// FOR CHECKBOX

document.querySelector(".happy").addEventListener("click", function () {
  document.querySelector(".container").style.display = "block";
});
document.querySelector(".bt1").addEventListener("click", function () {
  document.querySelector(".container").style.display = "none";
});

document.querySelector(".bt2").addEventListener("click", function () {
    let p = document.getElementById("o").value;
let a = document.getElementById("a").value;
let b = document.getElementById("b").value;
let c = document.getElementById("c").value;

  document.querySelector("#p").innerHTML=a;
  document.querySelector("#q").innerHTML=b;
  document.querySelector("#r").innerHTML=c;
  document.querySelector("#p1").innerHTML=p;


  document.querySelector(".container").style.display = "none";
});

// FOR RADIOBUTTON

document.querySelector(".pogo").addEventListener("click", function () {
  document.querySelector(".nothappy").style.display = "block";
});
document.querySelector(".bt4").addEventListener("click", function () {
  document.querySelector(".nothappy").style.display = "none";
});

document.querySelector(".bt3").addEventListener("click", function () {
  let p = document.getElementById("w").value;
let a = document.getElementById("j").value;
let b = document.getElementById("k").value;
let c = document.getElementById("l").value;

document.querySelector("#r1").innerHTML=a;
document.querySelector("#r2").innerHTML=b;
document.querySelector("#r3").innerHTML=c;
document.querySelector("#r4").innerHTML=p;

// FOR INPUT FIELD
document.querySelector(".top").addEventListener("click", function () {
  document.querySelector(".ifield").style.display = "block";
});



// FOE DRAG AND DROP

document.querySelector(".nothappy").style.display = "none";
});
const drag=document.querySelector(".contain");
new Sortable(drag, {
  animation: 150,
  ghostClass: 'blue-background-class'
});

var t;
var a = ["\n"];
//localStorage.clear();
//localStorage.setItem("details", JSON.stringify(a));

t = JSON.parse(localStorage.getItem("details"));
li = document.getElementById("li");

function enroll() {

  li = document.getElementById("li");
  var n = document.getElementById('name').value;
  var e = document.getElementById('email').value;
  var w = document.getElementById('ws').value;
  var i = document.getElementById('img').value;
  var g;
  if (document.getElementById("op1").checked == true) {
    g = document.getElementById("op1").value;
  }
  if (document.getElementById("op2").checked == true) {
    g = document.getElementById("op2").value;
  }
  var s = ["\n"];
  var s1;
  if (document.getElementById("op3").checked == true) {
    s1 = document.getElementById("op3").value;
    //s.push(s1);
    s = s + s1;
  }
  if (document.getElementById("op4").checked == true) {
    s1 = document.getElementById("op4").value;
    //s.push(s1);
    s = s + s1;
  }
  if (document.getElementById("op5").checked == true) {
    s1 = document.getElementById("op5").value;
    //s.push(s1);
    s = s + s1;
  }

  //var a = ["\n"];
  //a = JSON.parse(localStorage.getItem("details"));
  //localStorage.setItem("details", JSON.stringify(a));
  t = JSON.parse(localStorage.getItem("details"));

  t.push("\n")
  //t = t + "\n";
  t.push(n);
  t.push(e);
  //t = t + e;
  t.push(w);
  //t = t + w;
  t.push(s);
  //t = t + s;
  t.push(i);
//t = t + i;
  t.push(g);

//t = t + g;
t.push("\n")
  //t = t + "\n";
  localStorage.setItem("details", JSON.stringify(t));
  t=JSON.parse(localStorage.getItem("details"));
var h;
  t.forEach((element, index) => {

    h += `<p>${element}</p>`;
    li.innerHTML = h;


  });



  //t1.forEach((element, index) => {
  //j += `<p>${element}</p>`;
  //im.innerHTML = j;
  //});
  //li.innerHTML += "<p>samyu</p>";
  //for (var i = 4; i < o; i + 4) {
  //li.innerHTML += "<p>samyu</p>";
  //}

}

var t;
var a = ["name", "mail", "link", "img"];
var a1=["i","m","g"];
//t = JSON.parse(localStorage.getItem("details"));
t1 = JSON.parse(localStorage.getItem("image"));
//li = document.getElementById("li");
im=document.getElementById("tab2");
function enroll() {
  var a1=["i","m","g"];
  localStorage.setItem("image", JSON.stringify(a1));
  t1 = JSON.parse(localStorage.getItem("image"));
  //li = document.getElementById("li");
  im=document.getElementById("tab2");
  //var n = document.getElementById('name').value;
  //var e = document.getElementById('email').value;
  //var w = document.getElementById('ws').value;
  var i = document.getElementById('img').value;
  //t = JSON.parse(localStorage.getItem("details"));
  t1 = JSON.parse(localStorage.getItem("image"));
  t1.push(i);
  //t.push(n);
  //t.push(e);
  //t.push(w);
  //t.push(i);
  //localStorage.setItem("details", JSON.stringify(t));
  localStorage.setItem("image", JSON.stringify(t1));
  var c1;
  var c2;
  var c3;
  var c4;
  var h;
  //t.forEach((element, index)=>{
    //h += `<p>${element}</p>`;
    //li.innerHTML = h;
//  });
  t1.forEach((element, index) => {
    h += `<p>${element}</p>`;
    im.innerHTML = h;
  });
  //li.innerHTML += "<p>samyu</p>";
  //for (var i = 4; i < o; i + 4) {
  //li.innerHTML += "<p>samyu</p>";
  //}

}

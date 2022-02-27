const listofitem = document.querySelector(".listofitem");
const lists = document.querySelector(".lists");
const userdata = document.querySelector(".inputbox input");
const but = document.querySelector(".inputbox button");
const deleteAllBtn = document.querySelector(".clear button");
var listArray=["\n"];
//localStorage.setItem("mylist",JSON.stringify(listArray));
listArray=listArray=JSON.parse(localStorage.getItem("mylist"));
userdata.onkeyup =()=> {
  let us = userdata.value;
  if (us != 0  && us != null) {
    but.classList.add("in");
  } else {
    but.classList.remove("in");
  }
};
let newlist = "";
listArray.forEach((element, index) => {
  newlist += `<p>${element+"  "}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-times"></i></span></p>`;
});

listofitem.innerHTML = newlist;
userdata.value = "";


but.onclick =()=> {
  let us = userdata.value;
  listArray.push(us);
  //listArray=listArray+us;
  localStorage.setItem("mylist",JSON.stringify(listArray));
  let newlist = "";
  listArray=JSON.parse(localStorage.getItem("mylist"));
  listArray.forEach((element, index) => {
    newlist += `<p class="sam" > ${element+"  "}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-times"></i></span></p>`;
  });
  listofitem.innerHTML = newlist;
  userdata.value = "";
  but.classList.remove("in");
};
function deleteTask(index) {
  listArray=JSON.parse(localStorage.getItem("mylist"));
  listArray.splice(index, 1);
  localStorage.setItem("mylist",JSON.stringify(listArray));
  let newlist = "";
  listArray.forEach((element, index) => {
    newlist += `<p class="li">${element+"  "}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-times"></i></span></p>`;
  });
  listofitem.innerHTML = newlist;
  userdata.value = "";


};
deleteAllBtn.onclick=()=>{
  listArray=JSON.parse(localStorage.getItem("mylist"));
  listArray.splice(0,listArray.length);
  localStorage.setItem("mylist",JSON.stringify(listArray));
  let newlist = "";
  listArray.forEach((element, index) => {
    newlist += `<p class="li">${element+"  "}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-times"></i></span></p>`;
  });
  listofitem.innerHTML = newlist;
  userdata.value = "";
};

var elements1 = [];
var elements2 = [];
var elements3 = [];
window.onload = function() {
  if (JSON.parse(localStorage.getItem("elements1")) != null)
    elements1 = JSON.parse(localStorage.getItem("elements1"));
  console.log(elements1);
  display1();
  if (JSON.parse(localStorage.getItem("elements2")) != null)
    elements2 = JSON.parse(localStorage.getItem("elements2"));
  console.log(elements2);
  display2();
  if (JSON.parse(localStorage.getItem("elements3")) != null)
    elements3 = JSON.parse(localStorage.getItem("elements3"));
  console.log(elements3);
  display3();
};
function addElement1() {
  if (document.querySelector(".addTxt1").value.trim() != "") {
    elements1.push(document.querySelector(".addTxt1").value.trim());
    if (localStorage.getItem("elements1") == null) {
      localStorage.setItem("elements1", JSON.stringify(elements1));
    } else {
      localStorage.setItem("elements1", JSON.stringify(elements1));
    }
    display1();
  }
}
function display1() {
  document.querySelector(".list1").innerHTML = "";
  for (var i = 0; i < elements1.length; i++)
    document.querySelector(".list1").innerHTML +=
      "<center><div class='element'>" +
      elements1[i] +
      "<img class='tick' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdrNL09nOpjjqaL2btv2RrLQFh-drL61VGsoO6AghWQxe_PDH&usqp=CAU' onclick='strike1(" +
      i +
      ")'><img class='dustbin' src = 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png' onclick='del1(" +
      i +
      ")'></div></center><br>";
}
function del1(index) {
  elements1.splice(index, 1);
  if (localStorage.getItem("elements1") == null) {
    localStorage.setItem("elements1", JSON.stringify(elements1));
  } else {
    localStorage.setItem("elements1", JSON.stringify(elements1));
  }
  display1();
}
function strike1(index) {
  if (elements1[index].includes("<strike>")) {
    elements1[index] = elements1[index].replace("<strike>", "");
  } else {
    elements1[index] = "<strike>" + elements1[index] + "</strike>";
  }
  if (localStorage.getItem("elements1") == null) {
    localStorage.setItem("elements1", JSON.stringify(elements1));
  } else {
    localStorage.setItem("elements1", JSON.stringify(elements1));
  }
  display1();
}


function addElement2() {
    if (document.querySelector(".addTxt2").value.trim() != "") {
      elements2.push(document.querySelector(".addTxt2").value.trim());
      if (localStorage.getItem("elements2") == null) {
        localStorage.setItem("elements2", JSON.stringify(elements2));
      } else {
        localStorage.setItem("elements2", JSON.stringify(elements2));
      }
      display2();
    }
  }
  function display2() {
    document.querySelector(".list2").innerHTML = "";
    for (var i = 0; i < elements2.length; i++)
      document.querySelector(".list2").innerHTML +=
        "<center><div class='element'>" +
        elements2[i] +
        "<img class='tick' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdrNL09nOpjjqaL2btv2RrLQFh-drL61VGsoO6AghWQxe_PDH&usqp=CAU' onclick='strike2(" +
        i +
        ")'><img class='dustbin' src = 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png' onclick='del2(" +
        i +
        ")'></div></center><br>";
  }
  function del2(index) {
    elements2.splice(index, 1);
    if (localStorage.getItem("elements2") == null) {
      localStorage.setItem("elements2", JSON.stringify(elements2));
    } else {
      localStorage.setItem("elements2", JSON.stringify(elements2));
    }
    display2();
  }
  function strike2(index) {
    if (elements2[index].includes("<strike>")) {
      elements2[index] = elements2[index].replace("<strike>", "");
    } else {
      elements2[index] = "<strike>" + elements2[index] + "</strike>";
    }
    if (localStorage.getItem("elements2") == null) {
      localStorage.setItem("elements2", JSON.stringify(elements2));
    } else {
      localStorage.setItem("elements2", JSON.stringify(elements2));
    }
    display2();
  }

  function addElement3() {
    if (document.querySelector(".addTxt3").value.trim() != "") {
      elements3.push(document.querySelector(".addTxt3").value.trim());
      if (localStorage.getItem("elements3") == null) {
        localStorage.setItem("elements3", JSON.stringify(elements3));
      } else {
        localStorage.setItem("elements3", JSON.stringify(elements3));
      }
      display3();
    }
  }
  function display3() {
    document.querySelector(".list3").innerHTML = "";
    for (var i = 0; i < elements3.length; i++)
      document.querySelector(".list3").innerHTML +=
        "<center><div class='element'>" +
        elements3[i] +
        "<img class='tick' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdrNL09nOpjjqaL2btv2RrLQFh-drL61VGsoO6AghWQxe_PDH&usqp=CAU' onclick='strike3(" +
        i +
        ")'><img class='dustbin' src = 'https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png' onclick='del3(" +
        i +
        ")'></div></center><br>";
  }
  function del3(index) {
    elements3.splice(index, 1);
    if (localStorage.getItem("elements3") == null) {
      localStorage.setItem("elements3", JSON.stringify(elements3));
    } else {
      localStorage.setItem("elements3", JSON.stringify(elements3));
    }
    display3();
  }
  function strike3(index) {
    if (elements3[index].includes("<strike>")) {
      elements3[index] = elements3[index].replace("<strike>", "");
    } else {
      elements3[index] = "<strike>" + elements3[index] + "</strike>";
    }
    if (localStorage.getItem("elements3") == null) {
      localStorage.setItem("elements3", JSON.stringify(elements3));
    } else {
      localStorage.setItem("elements3", JSON.stringify(elements3));
    }
    display3();
  }
  
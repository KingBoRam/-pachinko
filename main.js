var menu = ["라면", "짜장면", "탕수육", "김치찌개"];
function addMenu(mn) {
  menu.push(mn);
  alert("현재 메뉴 : " + menu.length + "개");
  clear("list");
  showMenu("list");
}
function showMenu(ex) {
  for (let i = 0; i < menu.length; i++) {
    document.getElementById(ex).innerText += menu[i] + "\n";
  }
}
function clear(ex2) {
  document.getElementById(ex2).innerText = "";
}
function randomMenu(array) {
  let pick = Math.floor(Math.random() * array.length);
  return array[pick];
}
function writeMenu(ex3) {
  let abc = randomMenu(menu);
  document.getElementById(ex3).innerText = abc;
}

function effectMenu() {
  // var el = document.querySelector("#clickme");
  // el.onclick = function () {
  var dl = document.querySelector("#random");
  dl.animate(
    [
      { transform: "translate(0, -100px)" },
      { transform: "translate(0, 100px)" },
    ],
    {
      duration: 70,
      iterations: 15,
    }
  );
}
function ff() {
  clear("random");
  showMenu("random");
  effectMenu();
  setTimeout(() => writeMenu("random"), 1000);
}

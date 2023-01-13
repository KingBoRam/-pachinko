var menu = ["라면", "짜장면", "김치볶음밥"];
function addMenu(mn) {
  menu.push(mn);
  alert("현재 메뉴 : " + menu.length + "개");
  clear();
  showMenu();
}
function showMenu() {
  for (let i = 0; i < menu.length; i++) {
    document.getElementById("menu").innerText += menu[i] + "\n";
  }
}
function clear() {
  document.getElementById("menu").innerText = "";
}
function randomMenu(array) {
  let pick = Math.floor(Math.random() * array.length);
  return array[pick];
}
function writeMenu() {
  let abc = randomMenu(menu);
  document.getElementById("random").innerText = abc;
}

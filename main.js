var menu = [];
function addMenu(mn){
    menu.push(mn);
    alert('현재 메뉴 : ' + menu.length + '개');
    clear();
    showMenu();
}
function showMenu(){
    for(let i=0; i<menu.length; i++){
        document.getElementById("menu").innerText += menu[i]+"\n" ;     
    }
}
function clear(){
    document.getElementById("menu").innerText = "";
}
function randomMenu(){
    let pick = Math.floor(Math.random()*menu.length);
    document.getElementById("menu").innerText = "";
}
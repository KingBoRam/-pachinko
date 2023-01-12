var menu = [];
function addmenu(mn){
    menu.push(mn);
    alert('현재 메뉴 : ' + menu.length + '개');
    showmenu();
}
function showmenu(){
    for(let i=0; i<menu.length; i++){
        document.write(menu[i]);
    }
}
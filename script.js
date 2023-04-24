function add_item(){
    const item = document.getElementById('box');
    const list_item = document.getElementById('list_item');
    if(item.value !=""){
        const new_li = document.createElement("li");
        new_li.innerText = item.value;
        list_item.appendChild(new_li);
    }
}
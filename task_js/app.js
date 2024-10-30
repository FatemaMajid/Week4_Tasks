
let list = ["Hello this is my first Todo.", "Hello this is my second Todo.", "Hello this is my 3rd Todo."];

let createElement = (_list) => {
    let ele = "";
    _list.map((item, i) => {
        ele += `<div class="center-text" id="item">${item} <button id="delBtn" onclick="removeElem('${i}')">x</button></div><br>`;
    });
    document.getElementById("list").innerHTML = ele;
    document.getElementById("total").textContent = _list.length;
};

createElement(list);

document.getElementById("addBtn").addEventListener("click", addItem);
document.getElementById("addBtn2").addEventListener("click", addItem);

function addItem() {
    let item = document.getElementById("text_input").value;
    if (item !== "") {
        list.push(item);
        createElement(list);
        document.getElementById("text_input").value = "";
    }
}

let removeElem = (index) => {
    list.splice(index, 1);
    createElement(list);
};

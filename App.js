let toDay = document.getElementById("day");

let day = new Date();

toDay.innerText = day.toLocaleString("en-us", { weekday: "long" });

let toText = document.getElementById("todotext");
let toButton = document.getElementById("todobutton");

let toDo = document.getElementById("lists");

toButton.addEventListener("click", () => {
    let addList = `<input type="checkbox" name="ch" id="ch">
    <label id="textlabel" style="color: white;" for="ch">${toText.value}</label> <br>`;

    toDo.innerHTML += addList;

    let textL = document.getElementById("textlabel");

    let checkBoxT = document.getElementById("ch");

    checkBoxT.addEventListener("click", () => {
        textL.innerText.style.textDecoration = "line-through";
    });
});
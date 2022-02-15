let toDay = document.getElementById("day");

let day = new Date();

toDay.innerText = day.toLocaleString("en-us", { weekday: "long" });

let toText = document.getElementById("todotext");
let toButton = document.getElementById("todobutton");

let toDo = document.getElementById("lists");

toButton.addEventListener("click", () => {

    if(toText.value == ""){
        alert("warning, you added empty list ..!!");
    } 


//in this section we created new div id list__div (id for css)
let listDiv = document.createElement("div");
listDiv.id = 'list__div';

// in this section we created checkbox and label 
let checkBox = document.createElement("input");
checkBox.type = 'checkbox';
checkBox.id = 'list_box';

let label = document.createElement("label");
label.htmlFor = 'list_box';

//in this section we create cross for close 
let close = document.createElement("close")
close.innerHTML = '<span id="close">  ✖</span>'

// in this section we assign value in label
label.innerText = toText.value;

// in this section we append checkbox and label in the list__div 
listDiv.appendChild(checkBox);
listDiv.appendChild(label);
listDiv.appendChild(close)

//in this section we append list__div to toDo(lists)

toDo.appendChild(listDiv);
// in this section we clear the input text area
toText.value='';

//this button for erase todo text list
close.addEventListener('click',()=>{
  listDiv.remove();
});

checkBox.addEventListener('change',()=>{
  if (checkBox.checked) {
    listDiv.style.backgroundColor = 'blueviolet'   
  }else{
    listDiv.style.backgroundColor = 'white'
  }

});

});

// APPLYING DOM

var wordinput = document.getElementById("input");
var button = document.getElementById("bt");
var ul = document.querySelector("ul");


function addList(){
   var div = document.createElement("div");
   var li = document.createElement("li");
   var dbut = document.createElement("button");
   li.appendChild(document.createTextNode(wordinput.value));
   ul.appendChild(div);
   div.classList.add("liwrapper");
   div.append(li, dbut);
   wordinput.value = "";
   dbut.classList.add("delbut");
   dbut.innerHTML = "Del";
   console.log("done")
}

button.addEventListener("click", function(){
   if (wordinput.value.length > 0){
       addList();
   }
})

wordinput.addEventListener("keypress", function(event){
   if (wordinput.value.length > 0 && event.which === 13){
       addList();
   }
})

// toggle the .done class whenever a list is clicked

function addclassdone(element){
   if (element.target.tagName === "LI"){
      element.target.classList.toggle("done");
   }
}

function deleteListElement(element){
   if (element.target.className === "delbut"){
      element.target.parentElement.remove();
   }
}

function clickEvents (element){
   addclassdone(element);
   deleteListElement(element);
}

ul.addEventListener("click", clickEvents);

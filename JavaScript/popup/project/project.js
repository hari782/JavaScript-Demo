var ol = document.querySelector(".overlay")
var p = document.querySelector(".popup")
var b = document.getElementById("btn")
b.addEventListener("click",function(){
    ol.style.display="block"
    p.style.display="block"
})
var can = document.getElementById("cancle")
can.addEventListener("click",function(event){
    event.preventDefault();
    ol.style.display="none"
    p.style.display="none"
})
var con = document.querySelector(".container")
var addb = document.getElementById("add")
var bt = document.getElementById("booktitle")
var ba = document.getElementById("bookauthor")
var bd = document.getElementById("bookdescription")

addb.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${bt.value}</h2> 
    <h5>${ba.value}</h5> 
    <p>${bd.value}</p> 
    <button onclick="delet(event)">Delete</button>`
    con.append(div)
    ol.style.display="none"
    p.style.display="none"
})

function delet(event) {
    event.target.parentElement.remove();
}
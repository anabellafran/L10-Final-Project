let myName = document.getElementById("name");

function sizeUp(item) {
    item.style.fontSize = "2.6Rrem";
    item.style.color = "darkblue";
}

function sizeDown(item) {
    item.style.fontSize = "2.5Rrem";
    item.style.color = "black";
}
myName.setAttribute("onmouseenter", "sizeUp(this)");

myName.setAttribute("onmouseleave", "sizeDown(this)");

$.ajax({
    url:"https://api.adviceslip.com/advice",
    type:"get",
    dataType: "json",
    success: function(result) {
const postAdvice = document.getElementById("postAdvice");
postAdvice.innerHTML = result.slip.advice;
    }
})
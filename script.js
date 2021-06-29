function field(val){
	document.getElementById("x").value += val;
}
function removeAll(){
	var begin = document.getElementById("x").value;
	var begins = document.getElementById("y").value;
	document.getElementById("x").value = begin.substring(0, begin.length = 0);
	document.getElementById("y").value = begins.substring(0, begins.length = 0);
}
function result(){
	var begin = document.getElementById("x").value;
	document.getElementById("y").value = eval(begin);
}
function removeOne(){
	var begin = document.getElementById("x").value;
	document.getElementById("x").value = begin.substring(0, begin.length -1);
}
var btnWed = document.getElementsByClassName("btn-wed")[0];

btnWed.onclick = function(){
	var wed = document.getElementsByClassName("wed")[0];	
	wed.classList.toggle("action");
}
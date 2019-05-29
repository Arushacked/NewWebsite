
function sum(){
	document.getElementById("ans").innerHTML="Your answer is ";
	var c=Number(document.getElementById("n1").value)+Number(document.getElementById("n2").value);
	document.getElementById("ans").innerHTML+= c;
}
function sub(){
	document.getElementById("ans").innerHTML="Your answer is ";
	var c=Number(document.getElementById("n1").value)-Number(document.getElementById("n2").value);
	document.getElementById("ans").innerHTML+= c;
}
function mul(){
	document.getElementById("ans").innerHTML="Your answer is ";
	var c=Number(document.getElementById("n1").value)*Number(document.getElementById("n2").value);
	document.getElementById("ans").innerHTML+= c;
}
function div(){
	document.getElementById("ans").innerHTML="Your answer is ";
	var c=Number(document.getElementById("n1").value)/Number(document.getElementById("n2").value);

	document.getElementById("ans").innerHTML+=  c;
}
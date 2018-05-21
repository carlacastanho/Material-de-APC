
function auto_update(){
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var d = new Date();
	var frase = "<i class=\"fa fa-clock-o\"></i> Last updated: " + months[d.getMonth()] + " " + d.getDate() + "th, " + d.getFullYear();
	document.getElementById("lastupdate").innerHTML =  frase;
}

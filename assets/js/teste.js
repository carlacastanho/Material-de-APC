
function animation_next(id, n){
	for(var i = 1; i < n; i++){
		if (document.getElementById(id + i.toString()).style.display != "none"){
			document.getElementById(id + i.toString()).style.display = "none";
			document.getElementById(id + i.toString()).style.width = 100%;
			document.getElementById(id + (i+1).toString()).style.display = "block";
			document.getElementById(id + (i+1).toString()).style.width = 100%;
			break;
		}
	}
}

function animation_prev(id, n){
	for(var i = 2; i <= n; i++){
		if (document.getElementById(id + i.toString()).style.display != "none"){
			document.getElementById(id + i.toString()).style.display = "none";
			document.getElementById(id + i.toString()).style.width = 100%;
			document.getElementById(id + (i-1).toString()).style.display = "block";
			document.getElementById(id + (i-1).toString()).style.width = 100%;

			break;
		}
	}
}
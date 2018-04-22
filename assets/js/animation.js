
function animation_next(id, n){
	for(var i = 1; i < n; i++){
		if (document.getElementById(id + i.toString()).style.display != "none"){
			console.log("O display do " + id + i + " nao eh none" );
			document.getElementById(id + i.toString()).style.display = "none";
			document.getElementById(id + (i+1).toString()).style.display = "block";
			break;
		}
	}
}

function animation_prev(id, n){
	for(var i = 2; i <= n; i++){
		if (document.getElementById(id + i.toString()).style.display != "none"){
			console.log("O display do " + id + i + " nao eh none" );
			document.getElementById(id + i.toString()).style.display = "none";
			document.getElementById(id + (i-1).toString()).style.display = "block";
			break;
		}
	}
}
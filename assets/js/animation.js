
function animation_next(id, n){
	for(var i = 1; i < n; i++){
		if (document.getElementById(id + i.toString()).style.display != "none"){
			document.getElementById(id + i.toString()).style.display = "none";
			document.getElementById(id + (i+1).toString()).style.display = "block";
			break;
		}
	}
}

function animation_prev(id, n){
	for(var i = 2; i <= n; i++){
		if (document.getElementById(id + i.toString()).style.display != "none"){
			document.getElementById(id + i.toString()).style.display = "none";
			document.getElementById(id + (i-1).toString()).style.display = "block";
			break;
		}
	}
}

function create_animation_block(path, id, n){
	html = '<div id = "' + id + '1"><img src="' + path + '1.png" class = "img-responsive"></div>';
	for(var i = 2; i <= n; i++)
		html += '<div id = "' + id + i.toString() + 'style="display: none;"><img src="' + path + i.toString() + '.png"class = "img-responsive"></div>';	
	
	document.getElementById(id).innerHTML= html;
	//document.getElementById(id).innerHTML = "PENIS";
}
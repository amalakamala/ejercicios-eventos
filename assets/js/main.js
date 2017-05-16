function load() {
     alert("La página esta cargada");
}
window.onload = load;


function demo(){
	var boton = document.getElementById("demo");

	boton.addEventListener("click", function(){
		alert("¡HOLA MUNDO!");
	})
}


/*
function enunciado(){
	var elBody = document.querySelector("body"); 
	elBody.addEventListener("load", function(){
		alert("La página esta cargada");
	})
}
*/

function elMouse(){
	var elInput = document.querySelector("input");
	elInput.addEventListener("mouseout", function(){
		alert("Estás sobre mí");
	})

	elInput.addEventListener("mouseover",function(){
		alert("No estás sobre mí");
	})
}


//enunciado();
demo();
elMouse();
load();


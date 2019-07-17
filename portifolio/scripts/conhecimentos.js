(function(){
	'use strict';
	//deixando os detalhes invisíveis
	var divDetalhes = document.querySelectorAll("#conhecimentos-detalhe div");
	
	//escondendo tudo
	function  escondeDetalhes(){
		divDetalhes.forEach(function(div, indice){
			
			div.style.display = "none";
		
		});

	}
	escondeDetalhes();

	var logos = document.querySelectorAll("#conhecimentos-imgs img");
	//mostra os detalhes da logo clicada.
	function mostrarDetalhes(){
		var tituloLogo = this.getAttribute("title").toLowerCase();
						 //o titulo nome do  é igual o id do detalhe.	
		var idDetalhe  = "#"+tituloLogo; 
						//juntei a cerquilha '#' para pegar os id's dinamicamente.
		
		escondeDetalhes();
		document.querySelector(idDetalhe).style.display = "grid";				
	}

	//adicionando evento em todas logos
	logos.forEach(function(logo, indice){

		logo.addEventListener("click", mostrarDetalhes);
	
	});


})();
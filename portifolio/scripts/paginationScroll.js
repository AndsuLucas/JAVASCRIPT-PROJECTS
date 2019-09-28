(function(){
	'use strict';
	//links do menu
	const links               = document.querySelectorAll(".menu-item a");
	
	//posicao de cada seção
	var sectionPositionScroll = [];
	//limpar estilo das seções
	function cleanActiveLinks(){
		links.forEach(function(element, index){
			element.classList.remove("active");
		});
	}
	
	links[0].classList.add("active");
	//pegando a seção atual começando do final do array
	function getActiveLink(){
		var positionsLength = sectionPositionScroll.length;
		var position = positionsLength;
		
		while (position > 0) {
			position --;
			
			if (sectionPositionScroll[position] < innerHeight / 1.5 ) {
				return links[position];
				
			}

		}
		
	}
	
	//pegando todas as funções por id e sua posição
	//(o id condiz com o href dos links)
	function getPositions(link){
		var id = link.getAttribute("href");
		return document.querySelector(id).getBoundingClientRect().top	
	}
	//mudando o estilo dos links com base na seção que o usuário vê.
	function colorMenuActiveLink(){
		for (var index = 0; index < links.length - 1; index++){
			sectionPositionScroll[index] = getPositions(links[index])
			
		}
		cleanActiveLinks();

		var activeLink = getActiveLink();
		activeLink.classList.add("active");
	}

	window.addEventListener("scroll", colorMenuActiveLink);






})();
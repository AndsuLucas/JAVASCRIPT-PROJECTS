(function(){
	'use strict';
	//capturando todas as imagens
	const imagens             = document.querySelectorAll("img");
	//guardando a propriedade 'src das imagens após ser embaralhadas'
	var pontos                = 0;
	//guarda o último click
	var ultimoClick           = undefined;
	//imagem padrao "preta"
	var imagemPreta = "preto";
	//conjunto de imagens
	var arrayImagensSrc       = [
		"activity", "airplay", 
		"alert-circle", "align-center",
		"alert-octagon", "alert-triangle",  
		"align-justify", "align-left",
		"activity", "airplay", 
		"alert-circle", "align-center",
		"alert-octagon", "alert-triangle",  
		"align-justify", "align-left"
	 ]
	//contador de imagens
	var   quantidadeDeJogadas = 0;
	console.log(arrayImagensSrc);
	//adicionando evento de mostrar imagens aos elementos do dom
	imagens.forEach(function(elemento,posicao){
		
		elemento.addEventListener("click", mostrarImagem);
		
		//adicionando um número no id da imagem
		elemento.setAttribute("id", posicao);
	});
	function checarJogada(elemento){
		console.log(elemento === ultimoClick);
		
			if (elemento.getAttribute("src") === ultimoClick.getAttribute("src")){
				
				elemento.setAttribute("sit", "acerto");
				elemento.removeEventListener("click", mostrarImagem);
				
				ultimoClick.setAttribute("sit", "acerto")
				ultimoClick.removeEventListener("click", mostrarImagem);
				console.log("igual");
			}else{					
				console.log("diferente")
				resetarImagem();

			}
		
		quantidadeDeJogadas = 0;
	}
	function resetarImagem(){
		setTimeout(function(){
			imagens.forEach(function(imagem, posicao){
				if (imagem.getAttribute("sit") !== "acerto"){
					imagem.setAttribute("src", setarImagem(imagemPreta,"jpg"));
				}
				
			});
		},100);
	}

	function setarImagem (img, tipo = "svg"){

		return "assets/imagens/"+img+"."+tipo; 

	}

	function mostrarImagem(){
		var id = this.getAttribute("id");
		this.setAttribute("src", setarImagem(arrayImagensSrc[id]));
		if (this !== ultimoClick){
			quantidadeDeJogadas++;
		}
			if (quantidadeDeJogadas === 2){
				checarJogada(this);	

			}else{
				ultimoClick = this;
			
			}
		
		console.log(quantidadeDeJogadas);
	}	
	//trocando a ordem das posições do src 'arrayImagensSrc'
	function embaralhasImagens(imgs){
		var quantidadeImg = imgs.length -1;
		
		var novaPosicao   = 0;
		
		for (var posicao = quantidadeImg; posicao > 0; posicao --){

			novaPosicao                  = Math.floor( Math.random() * posicao );
			var auxiliar                 = arrayImagensSrc[posicao];
			arrayImagensSrc[posicao]     = arrayImagensSrc[novaPosicao];
			arrayImagensSrc[novaPosicao] = auxiliar;

		}



	}
	embaralhasImagens(arrayImagensSrc);
	//setando os 'srcs' das imagens


	console.log(arrayImagensSrc);
})();
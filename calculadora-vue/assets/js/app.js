window.addEventListener('load', function(){
	new Vue({
		el: "#app-calculator",
		data: {
			teste: 1
		},
		methods: {
			addNumber() {
				this.teste = event.target.textContent;
				console.log(event.target.textContent);
			}
		}
	})
});
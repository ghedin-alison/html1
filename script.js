function gritar() {
	alert("Viva a revolução do povo!!!");
}

function cadastrar(){
	let cpf;
	cpf = prompt("Digite seu CPF: ");
	alert("CPF " + cpf + " cadastrado com sucesso");
}


function changer(){
	let h2 = document.getElementsByTagName('h2');
	if (h2[0].innerText === "Fora Bolsonaro!") {
		h2[0].innerText ="Bem-vindo ao Livres Osasco"}
	else{h2[0].innerText = "Fora Bolsonaro!"};
}

function incrementar(){
	var p1 = document.getElementById("p1");
	p1.innerText = parseInt(p1.innerText) + 1;
}
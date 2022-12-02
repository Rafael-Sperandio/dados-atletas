class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria() {
	  if (this.idade <9 && this.idade > 30){
		return "Sem categoria: para essa idade";
	  }else if (this.idade < 12){
            return "Infantil";
	  }else if (this.idade < 14){
            return "Juvenil";
	  }else if (this.idade < 16){
            return "Intermediário";
	  }else{
            return "Adulto";
	  }
    } 
    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }
    calculaMediaValida() {
	let newnotas =atleta.notas.sort();
	let notasComputadas = newnotas.slice(1,4);
	let soma=0;
	notasComputadas.forEach(function(n){
		soma+=n;
	})
	let media=soma/notasComputadas.length;
	return media
     }
	
    obtemNomeAtleta(){
        return this.nome;
    } 

    obtemIdadeAtleta() {
        return this.idade;
    } 
    obtemPesoAtleta() {
        return this.peso;
    } 
    obtemNotasAtleta() {
        return this.notas;
    }
    obtemCategoria() {
        return atleta.calculaCategoria()
    }
    obtemIMC() {
        return atleta.calcularIMC();
    } 
    obtemMediaValida() {
        return atleta.calculaMediaValida();
    }

}

const atleta = new Atleta("Cesar Abascal",30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());
/*saida esperada
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 8.766666666666666
*/
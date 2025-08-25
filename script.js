//cria lista de 1 a 75
let todosNumeros = [];
for (let i = 1; i <= 75; i++) {
  todosNumeros.push(i);
}

//funcao para sortear número
function sorteador() {
    //condição para quando o tamanho da lista for 0
    if (todosNumeros.length == 0) {
        return alert("TODOS os números já foram SORTEADOS !"); 
    }

    //gera índice aleatório
    let indice = Math.floor(Math.random() * todosNumeros.length);

    //pega exatamente o número de acordo com seu índice na lista
    let numeroSorteado =  todosNumeros[indice];

    //remove da lista os números ja sorteados
    todosNumeros.splice(indice, 1)

    //verificação para a letra de bingo correspondente de acordo com o número sorteado
    let letra;
    if (numeroSorteado <= 15) letra = "B";
    else if (numeroSorteado <= 30) letra = "I";
    else if (numeroSorteado <= 45) letra = "N";
    else if (numeroSorteado <= 60) letra = "G";
    else letra = "O";

    let resultadoFinal = letra + numeroSorteado;

    document.getElementById("resultado").textContent = resultadoFinal;

    return resultadoFinal;

    
}

document.getElementById("sortear").addEventListener("click", sorteador);

console.log();
console.log(sorteador());
console.log(sorteador());


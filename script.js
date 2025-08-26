//cria lista de 1 a 75
let todosNumeros = [];
for (let i = 1; i <= 75; i++) {
  todosNumeros.push(i);
}

//funcao para sortear número
function sorteador() {
    //condição para quando o tamanho da lista for 0
    if (todosNumeros.length == 0) {
        //da alert dizendo que todos os numeros foram sorteados
        alert("TODOS os números já foram SORTEADOS !"); 
        //dispara confetes na tela
        disparaConfete();
        return;
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

    //armazena em uma variavel a letra junto com o numero
    let resultadoFinal = letra + numeroSorteado;

    //mostra resultado no HTML
    document.getElementById("resultado").textContent = resultadoFinal;

    //cria uma nova div a cada resultado sorteado
    let numeroDiv = document.createElement("div");
    numeroDiv.className = "numero";
    numeroDiv.textContent = numeroSorteado;

    //condição para append na coluna certa de acordo com a letra do numero sorteado
    if (letra === "B")document.getElementById("colunaB").appendChild(numeroDiv);
    else if (letra === "I")document.getElementById("colunaI").appendChild(numeroDiv);
    else if (letra === "N")document.getElementById("colunaN").appendChild(numeroDiv);
    else if (letra === "G")document.getElementById("colunaG").appendChild(numeroDiv);
    else document.getElementById("colunaO").appendChild(numeroDiv);


    return resultadoFinal;

    
}

//função para resetar o bingo
function resetar() {
    // reinicia a lista de 1 a 75
    todosNumeros = [];
    for (let i = 1; i <= 75; i++) {
        todosNumeros.push(i);
    }

    // limpa todas as colunas
    ["B","I","N","G","O"].forEach(letra => {
        const coluna = document.getElementById("coluna" + letra);
        coluna.innerHTML = `<h3>${letra}</h3>`;
    });

    // reseta o resultado
    document.getElementById("resultado").textContent = "---";
}

//funcao para disparar os confetes com biblioteca externa assim que todos os numeros forem sorteados
function disparaConfete() {
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });
  
// Segundo disparo com menos partículas após meio segundo
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 }
        });
    }, 500);
}
  
//adiciona evento de clique no botão sortear, chamando a função sortear
document.getElementById("sortear").addEventListener("click", sorteador);

//adiciona evento de clique no botão reset, chamando a funçao resetar
document.getElementById("reset").addEventListener("click", resetar);





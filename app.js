alert('Boas vindas ao jogo do número secreto');
// declaração de variaveis posso usar let ou const.
let numeroMaximo = 1000
let numeroSecreto = parseInt (Math.random () * 1000 + 1);
//gravar informação no conosole.
console.log(numeroSecreto);


let chute;
let tentativas = 1;

// enquanto chute não foi igual ao numeroSecreto.
while (chute != numeroSecreto ) {
    //promp habilita uma opção para o usuário digitar alguma informação.
    chute = prompt(`Escolhe um número entre 1 e ${numeroMaximo} `);

    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    }   else {
    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`); 
    } else {
        alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;

        //para atribuir mais 1 na variável usar ++
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}. `);
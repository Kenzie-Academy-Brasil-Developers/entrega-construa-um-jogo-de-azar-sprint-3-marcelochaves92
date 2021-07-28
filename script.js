let jogadorEscolha = 0;
let computadorEscolha = 0;
let ganhador = -1;
let jogadorPontuacao = 0;
let computadorPontuacao = 0;
function jogar(escolha){
    jogadorEscolha = escolha;

    computadorEscolha = Math.floor((Math.randon() * (3-1 + 1))) + 1;

    // 1- Pedra
    // 2- Papel
    // 3- Tesoura

    if ((jogadorEscolha) === 1 && (computadorEscolha === 1)){
        ganhador = 0;
    }
    else if((jogadorEscolha) === 1 && (computadorEscolha === 2)){
        ganhador = 2;
    }
    else if((jogadorEscolha) === 1 && (computadorEscolha === 3)){
        ganhador = 1;
    }
    else if((jogadorEscolha) === 2 && (computadorEscolha === 1)){
        ganhador = 1;
    }
    else if((jogadorEscolha) === 2 && (computadorEscolha === 2)){
        ganhador = 0;
    }
    else if((jogadorEscolha) === 2 && (computadorEscolha === 3)){
        ganhador = 2;
    }
    else if((jogadorEscolha) === 3 && (computadorEscolha === 1)){
        ganhador = 2;
    }
    else if((jogadorEscolha) === 3 && (computadorEscolha === 2)){
        ganhador = 1;
    }
    else if((jogadorEscolha) === 3 && (computadorEscolha === 3)){
        ganhador = 0;
    }
    document.getElementById("jogador-escolhar-" + jogadorEscolha).classList.remove('Selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.remove('Selecionado');
    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('Selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('Selecionado');

    if(ganhador === 0){
    document.getElementById("mensagens").innerHTML = "Empate";
    }
    else if(ganhador === 1){
        document.getElementById("mensagens").innerHTML = "Humano ganhou";
        jogadorPontuacao++
    }
    else if(ganhador === 2){
        document.getElementById("mensagens").innerHTML = "Computador ganhou";
        computadorPontuacao++
    }
    document.getElementById("jogador-pontos").innerHTML = jogadorPontuacao;
    document.getElementById("computador-pontos").innerHTML = computadorPontuacao;
}
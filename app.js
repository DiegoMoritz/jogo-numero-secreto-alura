// let titulo = document.querySelector('h1');
// let paragrafo = document.querySelector('p');
// titulo.innerHTML = 'Jogo número secreto';
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let limiteNumeros = 100;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTexto (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function exibirTextoInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', `Escolha um número entre 1 e ${limiteNumeros}`);
}

exibirTextoInicial();

function limparCampo() {
     chute = document.querySelector('input');
     chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroAleatorio) {
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTexto('h1', 'Parabéns, você acertou!');
        exibirTexto('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroAleatorio) {
        exibirTexto('p', 'O número secreto é menor');
    } else {
        exibirTexto('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1); 
    let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosEscolhidos == limiteNumeros) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', 
    true)
}

alert('Vixi');

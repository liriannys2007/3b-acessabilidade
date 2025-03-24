document.addEventListener('DOMContentLoaded', function(){
const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
const opcoesAcessibili = document.getElementById('apresenta-lista');

botaoAcessibilidade.addEventListener('click', function(){
        botaoAcessibilidade.classList.toggle('rotacao-menu')
        opcoesAcessibili.classList.toggle('apresenta-lista')
})

const aumentarFonteBotao = document.getElementByI('aumentar-fonte');
const diminuirFonteBotao = document.getElementByI('diminuir-fonte');

let tamnhoFonteAtual = 1;

aumentarFonteBotao.addEventListener ('click', function()    {
        tamnhoFonteAtual += 0.1;
        document.body.style.fontSize = '${tamanhoFonteAtual} rem'
})

diminuirFonteBotao.addEventListener ('click', function()    {
            tamnhoFonteAtual += 0.1;
            document.body.style.fontSize = '${tamanhoFonteAtual} rem'
})


})
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

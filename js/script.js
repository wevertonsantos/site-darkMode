/* Evento DARK */

let hero = document.querySelector('#hero')
let texto = document.querySelector('.txtTopo')
let textoImg = document.querySelector('.txtImg')
let painelHero = document.querySelector('.painel')
let txtPainel = document.querySelector('.txtPainel')
let toggle = document.querySelector('#toggle')
let img = document.querySelector('.imgDunk')

toggle.addEventListener('click', function(){
    
    /* Cor do fundo */
    hero.style.background = 'linear-gradient(30deg, rgba(31, 31, 31, 1), grey 200%)'

    /* Cor dos textos */
    texto.style.color = 'white'
    txtPainel.style.color = 'white'
    textoImg.style.color = 'white'

    /* Texto Modo dark Ativado */
    texto.innerHTML = 'Modo Dark'

    /* Imagem modo dark Ativado */
    img.innerHTML = '<img src="/img/dunkblackwhit.png">'

    /* Cor do fundo do painel e borda*/
    painelHero.style.backgroundColor = 'rgba(255,255,255,0)'

    /* Cor do botão */
    btn.style.backgroundColor = 'rgba(255,255,255,0)'
    btn.style.border = '1px solid white'
    mod.style.backgroundColor = 'white'

})
var elements = document.getElementsByClassName('feed__box');

var alternarAbas = function(){
    var aba = this.getAttribute('aba');

    var element = document.getElementById(aba);

    //Remover estilo da selecao de abas
    var abasSelecao = document.getElementsByClassName('feed__box');

    for(var i = 0; i < abasSelecao.length; i++){
        abasSelecao[i].children[0].style.display = "none";
        abasSelecao[i].children[1].style.fontWeight = "normal";
    }

    //Ocultar todas as abas
    document.getElementById('publicacoes').style.display ="none";
    document.getElementById('igtv').style.display ="none";
    document.getElementById('salvos').style.display ="none";
    document.getElementById('marcacao').style.display ="none";

    //Mostrar as abas que estava ocultas
    element.style.display = "block";

    //Adicionar classe para troca de aba
    this.children[0].style.display = "block";
    this.children[1].style.fontWeight = "bold";
}

for(var i = 0; i < elements.length; i++){
        elements[i].addEventListener('click', alternarAbas, false);
}
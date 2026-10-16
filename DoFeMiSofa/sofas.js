// AD2 - Questão 2a: vetor com os dados dos sofás
// [número de lugares, tipo, dimensões, tecido, arquivo da imagem, preço]
var sofas = [
    [2, "Retrátil",  "95 x 87-126 x 180 (AxPxL)",  "Linho Cru", "Imagens/Sofa2Retratil.png", "765,00"],
    [2, "Sofá-Cama", "95 x 97-150 x 180 (AxPxL)",  "Linho",     "Imagens/Sofa2SofaCama.png", "4160,00"],
    [3, "Retrátil",  "108 x 95-155 x 200 (AxPxL)", "Suede",     "Imagens/Sofa3Retratil.png", "1900,00"],
    [3, "Retrô",     "80 x 76 x 196 (AxPxL)",      "Veludo",    "Imagens/Sofa3Retro.png",    "1200,00"]
];

// AD2 - Questão 2b: mostra o produto escolhido na terceira coluna da tabela
function mostraSofa(i) {
    var s = sofas[i];
    document.getElementById("NomeDes").innerHTML =
        '<span class="nome">Sofá ' + s[0] + ' lugares</span><span class="sub">' + s[1] + '</span>';
    document.getElementById("ImgDes").innerHTML =
        '<img src="' + s[4] + '" alt="Sofá ' + s[0] + ' lugares ' + s[1] + '">';
    document.getElementById("PrcDes").innerHTML =
        'Tecido: ' + s[3] + '<br>Tamanho: ' + s[2] + '<br>Preço: R$ <span class="preco">' + s[5] + '</span>';
    return false;   // não segue o href="#"
}

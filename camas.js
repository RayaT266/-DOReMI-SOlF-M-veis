// AD2 - Questão 1: janela com os dados da cama selecionada
var camas = [
    { tipo: "Cama de Solteiro", estilo: "Simples",     img: "Imagens/CamaSolteiroSimples.png", dim: "104 x 104 x 202 (AxLxP)", preco: "325,00"  },
    { tipo: "Cama de Solteiro", estilo: "Bicama",      img: "Imagens/CamaSolteiroBicama.png",  dim: "70 x 87 x 193 (AxLxP)",   preco: "470,00"  },
    { tipo: "Cama de Casal",    estilo: "Simples",     img: "Imagens/CamaCasalSimples.png",    dim: "108 x 154 x 210 (AxLxP)", preco: "680,00"  },
    { tipo: "Cama de Casal",    estilo: "Com gavetas", img: "Imagens/CamaCasalGavetas.png",    dim: "48 x 145 x 195 (AxLxP)",  preco: "1900,00" }
];

function abreCama(i) {
    var c = camas[i];
    var imgAbs = new URL(c.img, document.baseURI).href;   // caminho absoluto para a janela nova
    var j = window.open("", "janelaCama", "width=270,height=420,resizable=yes");
    if (!j) { alert("Libere os pop-ups do navegador para ver a cama."); return; }
    j.document.open();
    j.document.write(
        '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">' +
        '<title>' + c.tipo + ' ' + c.estilo + '</title></head>' +
        '<body style="background-color:#E6F0B5; color:#E53646; text-align:center; ' +
        'font-family:stoke,\'Lucida Bright\',liberation,serif;">' +
        '<h2>' + c.tipo + '</h2>' +
        '<h3 style="font-weight:normal">' + c.estilo + '</h3>' +
        '<img src="' + imgAbs + '" alt="' + c.tipo + ' ' + c.estilo + '"><br>' +
        '<p>' + c.dim + '</p>' +
        '<p>Preço: R$ ' + c.preco + '</p>' +
        '<input type="button" value="Fechar" onclick="window.close();">' +
        '</body></html>'
    );
    j.document.close();
    j.focus();
}

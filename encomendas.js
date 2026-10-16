// AD2 - Questão 4: montagem da lista de compras
function incluir() {
    var sel = document.getElementById("selProduto");
    if (sel.value == "") {                              // "-----" selecionado
        alert("Nenhum Produto selecionado!");
        return;
    }
    var opt   = sel.options[sel.selectedIndex];
    var preco = Number(sel.value);                      // preço guardado no value (número, não string)
    var area  = document.getElementById("lisPedArea");
    var total = document.getElementById("TxtTotal");

    area.value += opt.getAttribute("data-desc") + "\n"; // descrição + mudança de linha
    total.value = Number(total.value) + preco;          // soma numérica (evita concatenação)
    sel.selectedIndex = 0;                              // combo volta ao estado inicial
}

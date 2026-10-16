// AD2 - Questão 3a/3b: compara Senha e Confirme (só se os DOIS estiverem preenchidos)
function verificaSenha() {
    var s = document.getElementById("idSenha").value;
    var c = document.getElementById("idConf").value;
    if (s != "" && c != "" && s != c) {
        alert("Senhas estão diferentes!");
        return false;
    }
    return true;
}

// AD2 - Questão 3c: crítica do formulário, chamada em onsubmit="return criticaForm();"
// true = formulário pode ser enviado; false = envio cancelado
function criticaForm() {
    return verificaSenha();
}

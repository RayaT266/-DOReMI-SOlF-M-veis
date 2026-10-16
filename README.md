# 🛋️ DOReMI SOlFÁ Móveis

Site de uma loja fictícia de móveis, especializada em **sofás e camas**, construído em duas etapas ao longo da disciplina **Construção de Páginas WEB** (Tecnologia em Sistemas de Computação — UFF/CEDERJ, 2º semestre de 2026).

- **AD1:** estrutura, estilo e formulários, só com **HTML5 + CSS3**. O site era 100% estático.
- **AD2:** entrada do **JavaScript**. As mesmas páginas ganharam comportamento: janelas dinâmicas, tabela interativa, validação de formulário e lista de compras com total.

Este README documenta **tudo o que foi feito no projeto** e, principalmente, **como ele evoluiu da AD1 para a AD2**.

> 🇬🇧 *English summary at the end.*

---

## 📌 Visão geral

| | AD1 | AD2 |
|---|---|---|
| **Tecnologias** | HTML5 + CSS3 | HTML5 + CSS3 + **JavaScript** |
| **Foco** | Estrutura, layout e aparência | **Interatividade** e validação |
| **Páginas** | 5 páginas + versão em tabela | As mesmas páginas, agora dinâmicas |
| **Arquivos JS** | nenhum | `camas.js`, `sofas.js`, `cadastro.js`, `encomendas.js` |
| **Dados dos produtos** | escritos direto no HTML | guardados em **vetores** e `data-attributes` |
| **Interação do usuário** | navegar e preencher formulários | clicar, escolher, somar, ser avisado de erros |

---

## 🧱 Parte 1 — AD1: a base do site (HTML5 + CSS3)
 🔗[Site-DOReMI-SOIF-M-veis](https://github.com/RayaT266/Site-DOReMI-SOIF-M-veis/tree/main)   
### 1. Layout com tabela de bordas invisíveis
`Questao1_TabelaInvisivel.html` reproduz a técnica antiga de posicionar elementos com `<table>`, `<font>` e atributos como `bgcolor`. Serviu de comparação com a abordagem moderna.

### 2. Estrutura semântica com HTML5 e CSS externo
Nova versão da página inicial com `header`, `nav` e `section`, posicionados por CSS (`float`, `width`) e sem tags descontinuadas.
- Classes `ender`, `imgLogo` e `apres`.
- Fontes **Karla** e **Stoke** (Google Fonts) com alternativas.
- A `<hr>` foi substituída por `border-bottom` no logo.
- `<base target="_blank">` para abrir os links do menu em nova aba.

### 3. Camas: vários tipos de lista
Listas aninhadas (`ul` com `ol`), numeração romana minúscula, marcadores quadrados e a classe `listaCama` centralizada com `margin: auto`.

### 4. Sofás: tabela com junção de células
Tabela `tabSofa` com `rowspan` e `colspan`, `border-collapse`, classes `titulo`, `linTH` e `colTH` e imagens com tamanho fixo (`imgSofa`).

### 5. e 6. Formulários: Encomendas e Cadastro
Layout feito com **caixas dentro de caixas** (sem tabelas): `FormBox`, `LinhaForm`, `ColEsq`/`ColDir`, `LabBox` e inputs com `float`. Também aparecem:
- `fieldset`, `legend` e `label` ligados aos campos por `for`/`id`;
- campos HTML5 (`type="email"`, `password`, `number`) e `required`;
- `select` com `optgroup`, `textarea` e campos `readonly`;
- `name` em todos os elementos do formulário.

> Ao fim da AD1, tudo era **visual**. Os botões e links não "faziam" nada além de navegar.

---

## ⚡ Parte 2 — AD2: a evolução com JavaScript

### 🛏️ Camas — de lista estática a janelas dinâmicas (`camas.js`)

| Antes (AD1) | Depois (AD2) |
|---|---|
| Lista com dimensões e preço escritos no HTML | Cada item é um **link**. Ao clicar, abre uma **janela** com tipo, estilo, imagem, dimensões, preço e botão **Fechar** |

Os dados ficam em um vetor de objetos, e uma única função monta a janela para qualquer cama:

```javascript
var camas = [
  { tipo: "Cama de Solteiro", estilo: "Simples", img: "Imagens/CamaSolteiroSimples.png",
    dim: "104 x 104 x 202 (AxLxP)", preco: "325,00" },
  // ... demais camas
];

function abreCama(i) {
  var c = camas[i];
  var j = window.open("", "janelaCama", "width=270,height=420");
  j.document.write("<h2>" + c.tipo + "</h2>" /* ... */ );
}
```

**Conceitos praticados:** vetor de objetos, funções com parâmetro, `window.open`, `document.write`, evento `onclick`, `window.close()`.

**Detalhe aprendido:** com `<base target="_blank">`, um link `href="#"` abriria uma aba nova. Por isso os links usam `target="_self"` e `return false`.

---

### 🛋️ Sofás — de tabela fixa a tabela interativa (`sofas.js`)

| Antes (AD1) | Depois (AD2) |
|---|---|
| Tabela com 4 colunas (Produto, Descrição, Foto, Preço) com todos os sofás à mostra | Tabela com 3 colunas (Produto, **Tipo**, **Descrição**). A descrição **muda conforme o link escolhido** |

**2a. Vetor com os produtos** (lugares, tipo, dimensões, tecido, imagem e preço):

```javascript
var sofas = [
  [2, "Retrátil",  "95 x 87-126 x 180 (AxPxL)",  "Linho Cru", "Imagens/Sofa2Retratil.png", "765,00"],
  [2, "Sofá-Cama", "95 x 97-150 x 180 (AxPxL)",  "Linho",     "Imagens/Sofa2SofaCama.png", "4160,00"],
  [3, "Retrátil",  "108 x 95-155 x 200 (AxPxL)", "Suede",     "Imagens/Sofa3Retratil.png", "1900,00"],
  [3, "Retrô",     "80 x 76 x 196 (AxPxL)",      "Veludo",    "Imagens/Sofa3Retro.png",    "1200,00"]
];
```

**2b. Função que atualiza a célula de descrição**, dividida em três áreas (`#NomeDes`, `#ImgDes`, `#PrcDes`):

```javascript
function mostraSofa(i) {
  var s = sofas[i];
  document.getElementById("NomeDes").innerHTML = /* nome e tipo */;
  document.getElementById("ImgDes").innerHTML  = /* imagem */;
  document.getElementById("PrcDes").innerHTML  = /* tecido, tamanho e preço */;
  return false;
}
```

**Conceitos praticados:** vetor de vetores, índices, `getElementById`, `innerHTML`, geração dinâmica de HTML.

**No CSS:** novas regras `descTab` (largura de 300px) e `colTH` (altura de 130px).

---

### 📝 Cadastro — de formulário simples a formulário com crítica (`cadastro.js`)

| Antes (AD1) | Depois (AD2) |
|---|---|
| Só `required` nos campos | Confere se **Senha** e **Confirme** são iguais, por campo e no envio do formulário |

```javascript
function verificaSenha() {                       // 3a e 3b — crítica de campo (onchange)
  var s = document.getElementById("idSenha").value;
  var c = document.getElementById("idConf").value;
  if (s != "" && c != "" && s != c) {            // só verifica se os dois foram preenchidos
    alert("Senhas estão diferentes!");
    return false;
  }
  return true;
}

function criticaForm() {                         // 3c — crítica de formulário (onsubmit)
  return verificaSenha();                        // reaproveita a mesma função
}
```

```html
<form method="POST" onsubmit="return criticaForm();">
```

**Conceitos praticados:** eventos `onchange` e `onsubmit`, retorno `true`/`false` para **cancelar o envio**, reaproveitamento de funções e validação nativa (`required`) combinada com validação própria.

---

### 🛒 Encomendas — de formulário estático a lista de compras com total (`encomendas.js`)

| Antes (AD1) | Depois (AD2) |
|---|---|
| `select` de produtos sem função, e o botão **Incluir** não fazia nada | Escolhe o produto, clica em **Incluir**, e a descrição vai para a lista e o **preço é somado** ao total |

```javascript
function incluir() {
  var sel = document.getElementById("selProduto");
  if (sel.value == "") {                              // nenhum produto selecionado
    alert("Nenhum Produto selecionado!");
    return;
  }
  var opt = sel.options[sel.selectedIndex];
  area.value += opt.getAttribute("data-desc") + "\n"; // nova linha na textarea
  total.value = Number(total.value) + Number(sel.value);
  sel.selectedIndex = 0;                              // combo volta ao início
}
```

**Como os dados chegam à função:** cada `<option>` guarda o **preço em `value`** e a **descrição em `data-desc`**.

**Armadilha enfrentada:** em JavaScript, `"325" + 765` vira `"325765"`, e não `1090`. A solução foi converter com `Number()` antes de somar.

**Resultado dos testes:** cama de solteiro simples (325) + sofá retrátil de 2 lugares (765) = **1090** ✅

---

## 🔧 Correções feitas na revisão (gabarito da AD1)

- Estrutura refeita em HTML5 + CSS externo, conforme o gabarito.
- Preços corrigidos: camas **325, 470, 680 e 1900**; sofás **765, 4160, 1900 e 1200**.
- Página de Encomendas completada com Identificação e Dados do Cartão.
- Imagens dos sofás sem distorção (antes eram esticadas para 150×150).
- Menu com "Sofás" acentuado e `label`/`name` corrigidos nos formulários.

---

## 🗂️ Estrutura dos arquivos

```
.
├── DoremisolfaMoveis.html          # Apresentação
├── Doremi.html                     # Camas
├── Solfa.html                      # Sofás
├── Encomendas.html                 # Lista de compras
├── Cadastro.html                   # Cadastro
├── Questao1_TabelaInvisivel.html   # Layout em tabela (AD1)
├── DoremisolfaMoveis.css           # Estilos de todo o site
├── camas.js                        # AD2 — janelas das camas
├── sofas.js                        # AD2 — vetor e tabela de sofás
├── encomendas.js                   # AD2 — lista de compras e total
├── cadastro.js                     # AD2 — validação de senha
└── Imagens/                        # Logos e fotos dos produtos
```

---

## 🚀 Como executar

```bash
git clone https://github.com/<seu-usuario>/<nome-do-repositorio>.git
```

Abra **`DoremisolfaMoveis.html`** no navegador e navegue pelo menu.

> ⚠️ A página **Camas** abre janelas pop-up. Se nada abrir, libere pop-ups para o site.
> As fontes Karla e Stoke precisam de internet; sem ela, o navegador usa as alternativas.
> Testado no Chromium.

---

## 🧠 Resumo da evolução

1. **AD1** ensinou a construir o site: semântica, CSS, tabelas, listas e formulários.
2. **AD2** deu vida a ele: eventos, funções, vetores e manipulação do DOM.
3. A ideia que ficou: **separar dados, estrutura e comportamento**. Os produtos vivem em vetores, o HTML os organiza e o JavaScript os mostra e calcula.

---

## 🛠️ Tecnologias

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 👩‍💻 Autora

**Rayara** — Estudante de Tecnologia em Sistemas de Computação (UFF/CEDERJ)
🔗 [LinkedIn](www.linkedin.com/in/rayaraescala-r-torres)

---

## 🇬🇧 English summary

**DOReMI SOlFÁ Móveis** is a fictional sofa-and-bed store website built in two stages for a Web Page Construction course (UFF/CEDERJ, 2026).

- **Assignment 1 (AD1):** static site in HTML5 + CSS3: semantic layout, nested lists, merged-cell tables and CSS-positioned forms.
- **Assignment 2 (AD2):** the same pages brought to life with JavaScript:
  - **Beds:** items open pop-up windows with product details (`window.open`).
  - **Sofas:** products stored in an array; clicking a type renders its details in the table (`getElementById` + `innerHTML`).
  - **Registration:** password confirmation checked per field (`onchange`) and on submit (`onsubmit` + `return false`).
  - **Orders:** shopping list with a running total, using `Number()` to avoid string concatenation, plus an empty-selection alert.

**Run it:** open `DoremisolfaMoveis.html` in a browser (allow pop-ups for the Beds page).

---

> Projeto educacional. A loja, os produtos e os preços são fictícios.

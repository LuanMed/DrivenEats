let prato;
let valor1;
let bebida;
let valor2;
let sobremesa;
let valor3;
let valorTotal;

function selecionarPrato(select){

    const botaoAnterior = document.querySelector(".pratos .selecionada");

    if (botaoAnterior !== null){
        botaoAnterior.classList.remove("selecionada");
        botaoAnterior.classList.add("esconde");
    }

    select.classList.toggle("selecionada");
    select.classList.toggle("esconde");

    const pratoSel = document.querySelector(".pratos .selecionada .qualPrato");
    prato = pratoSel.innerHTML;
    const valorPrato = document.querySelector(".pratos .selecionada .cadaValor");
    valor1 = parseFloat(valorPrato.innerHTML.replace(',','.'));

    finalizarPedido();
}

function selecionarBebida(select){

    const botaoAnterior = document.querySelector(".bebidas .selecionada");

    if (botaoAnterior !== null){
        botaoAnterior.classList.remove("selecionada");
        botaoAnterior.classList.add("esconde");
    }

    select.classList.toggle("selecionada");
    select.classList.toggle("esconde");

    const bebidaSel = document.querySelector(".bebidas .selecionada .qualBebida");
    bebida = bebidaSel.innerHTML;
    const valorPrato = document.querySelector(".bebidas .selecionada .cadaValor");
    valor2 = parseFloat(valorPrato.innerHTML.replace(',','.'));

    finalizarPedido();
}

function selecionarSobremesa(select){

    const botaoAnterior = document.querySelector(".sobremesas .selecionada");

    if (botaoAnterior !== null){
        botaoAnterior.classList.remove("selecionada");
        botaoAnterior.classList.add("esconde");
    }

    select.classList.toggle("selecionada");
    select.classList.toggle("esconde");

    const sobremesaSel = document.querySelector(".sobremesas .selecionada .qualSobremesa");
    sobremesa = sobremesaSel.innerHTML;
    const valorPrato = document.querySelector(".sobremesas .selecionada .cadaValor");
    valor3 = parseFloat(valorPrato.innerHTML.replace(',','.'));

    finalizarPedido();
}

function finalizarPedido(){
    if (prato !== undefined){
        if (bebida !== undefined){
            if (sobremesa !== undefined){
                const elemento = document.querySelector(".fechamento");
                elemento.classList.add("verde");
                elemento.innerHTML = "<p>Fechar pedido</p>";
                document.getElementById("botao").disabled = false;
            }
        }
    }
}

let uri;
let encoded;
let linkPronto;

function mensagemFinal () {
    valorTotal = valor1 + valor2 + valor3;

    uri =   `Olá, gostaria de fazer o pedido:
- Prato: ${prato}
- Bebida: ${bebida}
- Sobremesa: ${sobremesa}
Total: R$ ${valorTotal.toFixed(2)}`;

    encoded = encodeURIComponent(uri);
    linkPronto = `https://wa.me/5534991984379?text=${encoded}`;
    window.open(linkPronto);
}
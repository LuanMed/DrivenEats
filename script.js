
function selecionar1(){
    const prato1 = document.querySelector(".caixa1");
    prato1.classList.toggle("selecionada");
    const checking1 = document.querySelector(".check1");
    checking1.classList.toggle("esconde");
}

function selecionar2(){
    const selecao = document.querySelector(".caixa2");
    selecao.classList.toggle("selecionada");
    const checking = document.querySelector(".check2");
    checking.classList.toggle("esconde");
}

function selecionar3(){
    const selecao = document.querySelector(".caixa3");
    selecao.classList.toggle("selecionada");
    const checking = document.querySelector(".check3");
    checking.classList.toggle("esconde");
}

function selecionar4(){
    const selecao = document.querySelector(".caixa4");
    selecao.classList.toggle("selecionada");
    const checking = document.querySelector(".check4");
    checking.classList.toggle("esconde");
}

function selecionar5(){
    const selecao = document.querySelector(".caixa5");
    selecao.classList.toggle("selecionada");
    const checking = document.querySelector(".check5");
    checking.classList.toggle("esconde");
}

function selecionar6(){
    const selecao = document.querySelector(".caixa6");
    selecao.classList.toggle("selecionada");
    const checking = document.querySelector(".check6");
    checking.classList.toggle("esconde");
}

function selecionar7(){
    const selecao = document.querySelector(".caixa7");
    selecao.classList.toggle("selecionada");
    const checking = document.querySelector(".check7");
    checking.classList.toggle("esconde");
}

function selecionar8(){
    const selecao = document.querySelector(".caixa8");
    selecao.classList.toggle("selecionada");
    const checking = document.querySelector(".check8");
    checking.classList.toggle("esconde");
}

function selecionar9(){
    const selecao = document.querySelector(".caixa9");
    selecao.classList.toggle("selecionada");
    const checking = document.querySelector(".check9");
    checking.classList.toggle("esconde");
}

function testeJS(){
    const elemento = document.querySelector(".fechamento");
    elemento.innerHTML = "<p>lala</p>";
        
}

function checagem() {
    const prato1 = document.querySelector(".caixa1");
    const prato2 = document.querySelector(".caixa2");
    const prato3 = document.querySelector(".caixa3");
    const bebida1 = document.querySelector(".caixa4");
    const bebida2 = document.querySelector(".caixa5");
    const bebida3 = document.querySelector(".caixa6");
    const sobremesa1 = document.querySelector(".caixa7");
    const sobremesa2 = document.querySelector(".caixa8");
    const sobremesa3 = document.querySelector(".caixa9");

    if (prato1.classList.contains("selecionada") || prato2.classList.contains("selecionada") || prato3.classList.contains("selecionada")){
        if(bebida1.classList.contains("selecionada") || bebida2.classList.contains("selecionada") || bebida3.classList.contains("selecionada")){
            if(sobremesa1.classList.contains("selecionada") || sobremesa2.classList.contains("selecionada") || sobremesa3.classList.contains("selecionada")){
                const elemento = document.querySelector(".fechamento");
                elemento.classList.add("verde");
                elemento.innerHTML = "<p>Fechar pedido</p>";
            } else{
                const elemento = document.querySelector(".fechamento");
                elemento.classList.remove("verde");
                elemento.innerHTML = "<p>Selecione os 3 itens <br> para fechar o pedido</p>";
            }
        } else{
            const elemento = document.querySelector(".fechamento");
            elemento.classList.remove("verde");
            elemento.innerHTML = "<p>Selecione os 3 itens <br> para fechar o pedido</p>";
        }    
    } else{
        const elemento = document.querySelector(".fechamento");
        elemento.classList.remove("verde");
        elemento.innerHTML = "<p>Selecione os 3 itens <br> para fechar o pedido</p>";
    }
}
/*function calc(){

    var quantities  = document.getElementsByName("quantity");
    var output      = document.getElementById("output");


    for (var input of quantities) {
        output.innerHTML +=   `Id do Elemento = ${input.id} - Value do Elemento ${input.value} </br>`;
    }
}
*/

function calc()
{
    alert("Botão Clicado");

    document.getElementById("itens-pedidos").innerHTML = '';

    const nomecliente = document.getElementById("nome").value;

    document.getElementById("nomecliente").innerHTML = nomecliente;

    /*var qtbife   = document.getElementById("bife").value;
    var qtcoxa     = document.getElementById("coxa").value;
    var qtpanela   = document.getElementById("panela").value;

    var qtfarofa   = document.getElementById("farofa").value;
    var qtsalada   = document.getElementById("salada").value;
    var qttorresmo = document.getElementById("torresmo").value;
    */

    const pedidos = {
        bife: { nome: "Bife com batata", preco: 30, quantidade: document.getElementById("bife").value },
        coxa: {nome: "Coxa de Frango Crocante", preco: 25 , quantidade: document.getElementById("coxa").value },
        panela: {nome: "Carne de Panela", preco: 22, quantidade: document.getElementById("panela").value },

        farofa: {nome: "Farofa", preco: 10, quantidade: document.getElementById("farofa").value },
        salada: {nome: "Salada", preco: 8, quantidade: document.getElementById("salada").value },
        torresmo: {nome: "Torresmo", preco: 12, quantidade: document.getElementById("torresmo").value },
    };


    console.log(`Nome do prato: ${pedidos.bife.nome}`);
    console.log(`Quantidade: ${pedidos.bife.quantidade}`)

    var tbife = 0;
    var tcoxa = 0;
    var tpanela = 0;

    var tfarofa = 0;
    var tsalada = 0;
    var ttorresmo = 0;
    
    if (pedidos.bife.quantidade > 0) {
        document.getElementById("itens-pedidos").innerHTML += `<p>Prato: ${pedidos.bife.nome} - Preço unitário: R$ ${pedidos.bife.preco} - Quantidade: ${pedidos.bife.quantidade} - Total: R$ ${pedidos.bife.preco * pedidos.bife.quantidade}</p>`;

        tbife = pedidos.bife.preco * pedidos.bife.quantidade;
    }

    
    if(pedidos.coxa.quantidade > 0) {
        document.getElementById("itens-pedidos").innerHTML += `<p>Prato: ${pedidos.coxa.nome} - Preço unitário: R$ ${pedidos.coxa.preco} - Quantidade: ${pedidos.coxa.quantidade} - Total: R$ ${pedidos.coxa.preco * pedidos.coxa.quantidade}</p>`;

        tcoxa = pedidos.coxa.preco * pedidos.coxa.quantidade;
    }

    if(pedidos.panela.quantidade > 0) {
        document.getElementById("itens-pedidos").innerHTML += `<p>Prato: ${pedidos.panela.nome} - Preço unitário: R$ ${pedidos.panela.preco} - Quantidade: ${pedidos.panela.quantidade} - Total: R$ ${pedidos.panela.preco * pedidos.panela.quantidade}</p>`;

        tpanela = pedidos.panela.preco * pedidos.panela.quantidade;
    }

    
    if(pedidos.farofa.quantidade > 0) {
        document.getElementById("itens-pedidos").innerHTML += `<p>Prato: ${pedidos.farofa.nome} - Preço unitário: R$ ${pedidos.farofa.preco} - Quantidade: ${pedidos.farofa.quantidade} - Total: R$ ${pedidos.farofa.preco * pedidos.farofa.quantidade}</p>`;
        tfarofa = pedidos.farofa.preco * pedidos.farofa.quantidade;
    }

    if(pedidos.salada.quantidade > 0) {
        document.getElementById("itens-pedidos").innerHTML += `<p>Prato: ${pedidos.salada.nome} - Preço unitário: R$ ${pedidos.salada.preco} - Quantidade: ${pedidos.salada.quantidade} - Total: R$ ${pedidos.salada.preco * pedidos.salada.quantidade}</p>`;
        tsalada = pedidos.salada.preco * pedidos.salada.quantidade;
    }

    if(pedidos.torresmo.quantidade > 0) {
        document.getElementById("itens-pedidos").innerHTML += `<p>Prato: ${pedidos.torresmo.nome} - Preço unitário: R$ ${pedidos.torresmo.preco} - Quantidade: ${pedidos.torresmo.quantidade} - Total: R$ ${pedidos.torresmo.preco * pedidos.torresmo.quantidade}</p>`;
        ttorresmo = pedidos.torresmo.preco * pedidos.torresmo.quantidade;
    }

    var total = tbife + tcoxa + tpanela + tfarofa + tsalada + ttorresmo;

    document.getElementById("itens-pedidos").innerHTML += `Preço Final: ${total}`;

    /*console.log(`Quantidade de bife: ${qtbife}`);
    console.log(`Quantidade de coxa: ${qtcoxa}`);
    console.log(`Quantidade de carne de panela: ${qtpanela}`);

    console.log(`Quantidade de farofa: ${qtfarofa}`);
    console.log(`Quantidade de salada: ${qtsalada}`);
    console.log(`Quantidade de torresmo: ${qttorresmo}`);
    */
}

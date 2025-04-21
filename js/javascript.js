function calcular() {

    const nomecliente = $("#nome").val().trim();
    const telefone = $("#telefone").val().trim();

    if (nomecliente === "") {
        alert("Por favor, preencha o campo Nome.");
        return;
    }

    if (telefone === "") {
        alert("Por favor, preencha o campo Telefone.");
        return;
    }

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    const pedidos = {
        bife: { nome: "Bife com batata", preco: 30, quantidade: $("#bife").val()},
        coxa: {nome: "Coxa de Frango Crocante", preco: 25 , quantidade: $("#coxa").val() },
        panela: {nome: "Carne de Panela", preco: 22, quantidade: $("#panela").val() },

        farofa: {nome: "Farofa", preco: 10, quantidade: $("#farofa").val() },
        salada: {nome: "Mini Salada", preco: 8, quantidade: $("#salada").val() },
        torresmo: {nome: "Torresmo", preco: 12, quantidade: $("#torresmo").val() },
    };

    var tbife = 0; var tcoxa = 0; var tpanela = 0;
    
    var tfarofa = 0; var tsalada = 0; var ttorresmo = 0;

    var totalItens = 
    pedidos.bife.quantidade + 
    pedidos.coxa.quantidade + 
    pedidos.panela.quantidade + 
    pedidos.farofa.quantidade + 
    pedidos.salada.quantidade + 
    pedidos.torresmo.quantidade;

    if (totalItens == 0) {
        alert("Selecione pelo menos um item do cardápio.");
        return;
    }

    $("#itens-pedidos").html('');

    new bootstrap.Modal("#modal").show();

    $("#nome-cliente").html(`Caro <span class="fw-bold">${nomecliente}</span> <br><br>`);
    $("#frase-pedido").html(`Seguem os dados do seu pedido. <br> <br> O seu pedido é:<br><br>`);

    if (pedidos.bife.quantidade > 0) {
        $("#itens-pedidos").append(
            `<p> &bull; Prato: ${pedidos.bife.nome} - Preço unitário: ${formatter.format(pedidos.bife.preco)} - Quantidade: ${pedidos.bife.quantidade} - Total: ${formatter.format(pedidos.bife.preco * pedidos.bife.quantidade)}.</p>`
        );
    
        tbife = pedidos.bife.preco * pedidos.bife.quantidade;
    }

    if (pedidos.coxa.quantidade > 0) {
        $("#itens-pedidos").append(`<p> &bull; Prato: ${pedidos.coxa.nome} - Preço unitário: ${formatter.format(pedidos.coxa.preco)} - Quantidade: ${pedidos.coxa.quantidade} - Total: ${formatter.format(pedidos.coxa.preco * pedidos.coxa.quantidade)}.</p>`);
        tcoxa = pedidos.coxa.preco * pedidos.coxa.quantidade;
    }
    
    if (pedidos.panela.quantidade > 0) {
        $("#itens-pedidos").append(`<p> &bull; Prato: ${pedidos.panela.nome} - Preço unitário: ${formatter.format(pedidos.panela.preco)} - Quantidade: ${pedidos.panela.quantidade} - Total: ${formatter.format(pedidos.panela.preco * pedidos.panela.quantidade)}.</p>`);
        tpanela = pedidos.panela.preco * pedidos.panela.quantidade;
    }
    
    if (pedidos.farofa.quantidade > 0) {
        $("#itens-pedidos").append(`<p> &bull; Prato: ${pedidos.farofa.nome} - Preço unitário: ${formatter.format(pedidos.farofa.preco)} - Quantidade: ${pedidos.farofa.quantidade} - Total: ${formatter.format(pedidos.farofa.preco * pedidos.farofa.quantidade)}.</p>`);
        tfarofa = pedidos.farofa.preco * pedidos.farofa.quantidade;
    }
    
    if (pedidos.salada.quantidade > 0) {
        $("#itens-pedidos").append(`<p> &bull; Prato: ${pedidos.salada.nome} - Preço unitário: ${formatter.format(pedidos.salada.preco)} - Quantidade: ${pedidos.salada.quantidade} - Total: ${formatter.format(pedidos.salada.preco * pedidos.salada.quantidade)}.</p>`);
        tsalada = pedidos.salada.preco * pedidos.salada.quantidade;
    }
    
    if (pedidos.torresmo.quantidade > 0) {
        $("#itens-pedidos").append(`<p> &bull; Prato: ${pedidos.torresmo.nome} - Preço unitário: ${formatter.format(pedidos.torresmo.preco)} - Quantidade: ${pedidos.torresmo.quantidade} - Total: ${formatter.format(pedidos.torresmo.preco * pedidos.torresmo.quantidade)}.</p>`);
        ttorresmo = pedidos.torresmo.preco * pedidos.torresmo.quantidade;
    }
    
    var total = tbife + tcoxa + tpanela + tfarofa + tsalada + ttorresmo;
    
    $("#preco-final").html(`<br><p> Preço Final: ${formatter.format(total)}</p>`);

}

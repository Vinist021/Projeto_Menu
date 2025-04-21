function calcular() {

    const nomeCliente = $("#nome").val().trim();
    const telefone = $("#telefone").val().trim();

    if (nomeCliente === "") {
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

    const pratos = {
        bife: { nome: "Bife com batata", preco: 30 },
        coxa: { nome: "Coxa de Frango Crocante", preco: 25 },
        panela: { nome: "Carne de Panela", preco: 22 },
        farofa: { nome: "Farofa", preco: 10 },
        salada: { nome: "Mini Salada", preco: 8 },
        torresmo: { nome: "Torresmo", preco: 12 }
    };

    let totalItens = 0;
    let totalGeral = 0;

    for (const chave in pratos) {
        const quantidade = parseInt($(`#${chave}`).val()) || 0;
        pratos[chave].quantidade = quantidade;
    }

    Object.values(pratos).forEach(prato => {
        totalItens += prato.quantidade;
    });

    if (totalItens === 0) {
        alert("Selecione pelo menos um item do cardápio.");
        return;
    }

    $("#itens-pedidos").html('');
    new bootstrap.Modal("#modal").show();

    $("#nome-cliente").html(`Caro <span class="fw-bold">${nomeCliente}</span> <br><br>`);
    $("#frase-pedido").html(`Seguem os dados do seu pedido.<br><br> O seu pedido é:<br><br>`);

    Object.values(pratos).forEach(prato => {
        if (prato.quantidade > 0) {
            const totalItem = prato.quantidade * prato.preco;
            $("#itens-pedidos").append(`
                <p> &bull; Prato: ${prato.nome} - Preço unitário: ${formatter.format(prato.preco)} - Quantidade: ${prato.quantidade} - Total: ${formatter.format(totalItem)}.</p>
            `);
            totalGeral += totalItem;
        }
    });

    $("#preco-final").html(`<br><p> Preço Final: ${formatter.format(totalGeral)}</p>`);
}

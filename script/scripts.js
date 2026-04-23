const { createElement } = require("react");

function SalvarCarros(event) {
    //impedir de carregar a página
    event.preventDefault();
    let titulo = document.getElementById('title');
    let preco = document.getElementById('preco');
    let marca = document.getElementById('marca');
    let modelo = document.getElementById('modelo');

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

    let lista = document.getElementById('listarCarros');

    let card = createElement('div')
}

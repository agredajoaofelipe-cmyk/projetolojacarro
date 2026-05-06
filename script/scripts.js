function SalvarCarros(event) {
    //impedir de carregar a página
    event.preventDefault();
    let titulo = document.getElementById('title').value;
    let preco = document.getElementById('preco').value;
    let descricao = document.getElementById('descricao').value;
    ('descricao').value;
    let marca = document.getElementById('marca').value;
    let modelo = document.getElementById('modelo').value;

    let kilometragem = document.getElementById('kilometragem').value;
    
    let data_de_compra = document.getElementById('data_de_compra').value;

    let cambioSelecionado = document.querySelector('input[name="marcha"]:checked');

    let cambio = cambioSelecionado ? cambioSelecionado.id : "Não informado";

    let carro = {
        titulo,
        preco,
        descricao,
        marca,
        modelo,
        kilometragem,
        data_de_compra,
        cambio
    };

    let carros =JSON.parse(localStorage.getItem("carros")) || [];
    carros.push(carro);
    localStorage.setItem("carros", JSON.stringify(carros));

    adicionarNaTela(carro);

    document.querySelector("form").reset();
}

function adicionarNaTela(carro) {
    let lista = document.getElementById('ListarCarros');
    let card = document.createElement('div');
    card.classList.add('card') 

    card.innerHTML = ` 
    <img src = 'hhtps://picsum.photos/250/150?random = ${Math.random()}'>
    <h3>${carro.titulo}</h3>
    <p><strong>preço:</strong> R$ ${carro.preco}</p>
    <p><strong>Marca:</strong>  ${carro.marca}</p>
    <p><strong>Modelo:</strong> ${carro.modelo}</p>
    <p><strong>Câmbio:</strong>  ${carro.cambio}</p>
   
    <button onclick="excluirCarros(${carro.id}, this)
    ">Excluir</botton>
    `;

    lista.appendChild(card);


}

window.onload = function () {
    let carros = JSON.parse(localStorage.getItem ("carros")) || [];
    
    carros.forEach(carro => {
        adicionarNaTela(carro);
    })
        
    
}

function excluirCarro(id, botao) {
    let carros = JSON.parse(localStorage.getItem ("carros")) || [];

    carro = carros.filter(carro => Number(carro.id) !== Number(id));

    localStorage.setItem("carros", JSON.stringify(carros));

    let card = botao.parentElement;
    card.remove();
}




















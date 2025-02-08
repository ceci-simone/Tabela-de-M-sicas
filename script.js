// Adicionar evento de click no botão de gravar
document.getElementById('btn-gravar').addEventListener('click', gravarDados);

// Função para gravar dados
function gravarDados() {
    // Obter os dados do formulário
    var nome = document.getElementById('nome').value;
    var banda = document.getElementById('banda').value;

    // Criar uma nova linha na tabela
    var tabela = document.getElementById('tabela-cadastro');
    var novaLinha = tabela.insertRow();

    // Criar as células da nova linha
    var celulaNome = novaLinha.insertCell(1);
    var celulaBanda = novaLinha.insertCell(2);

    // Inserir os dados nas células
    celulaNome.innerHTML = nome;
    celulaBanda.innerHTML = banda;
}


// Adicionar evento de click no botão de gravar
/*document.getElementById('btn-gravar').addEventListener('click', gravarDados);

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
}*/
// Seleciona o formulário e a tabela
const form = document.getElementById('form-cadastro');
const tabela = document.getElementById('tabela-cadastro').getElementsByTagName('tbody')[0];

// Evento para capturar o envio do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o recarregamento da página

  // Captura os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const banda = document.getElementById('banda').value;
  const id = tabela.rows.length + 1;
  // Criação de uma nova linha na tabela
  const novaLinha = tabela.insertRow();

  // Definindo o ID com base na quantidade de linhas existentes

  // Criação das células
  const celulaId = novaLinha.insertCell(0);
  const celulaNome = novaLinha.insertCell(1);
  const celulaBanda = novaLinha.insertCell(2);

  // Inserção dos valores nas células
  celulaId.textContent = id;
  celulaNome.textContent = nome;
  celulaBanda.textContent = banda;

  // Limpa o formulário após o envio
  form.reset();
});

// Seleciona o formulário e a tabela
const form = document.getElementById('form-cadastro');
const tabela = document.getElementById('tabela-cadastro').getElementsByTagName('tbody')[0];
const thId = document.querySelector('#tabela-cadastro th:nth-child(1)');
const thNome = document.querySelector('#tabela-cadastro th:nth-child(2)');
const thBanda = document.querySelector('#tabela-cadastro th:nth-child(3)');

let ordemAscendenteId = true;    // Controle da ordem de ordenação para ID
let ordemAscendenteNome = true;  // Controle da ordem de ordenação para Nome
let ordemAscendenteBanda = true; // Controle da ordem de ordenação para Banda

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

thBanda.addEventListener('click', function() {
    const linhas = Array.from(tabela.rows);
  
    linhas.sort((a, b) => {
      const bandaA = a.cells[2].textContent.toLowerCase();
      const bandaB = b.cells[2].textContent.toLowerCase();
  
      if (bandaA < bandaB) return ordemAscendenteBanda ? -1 : 1;
      if (bandaA > bandaB) return ordemAscendenteBanda ? 1 : -1;
      return 0;
    });
  
    // Reordenar as linhas na tabela
    linhas.forEach(linha => tabela.appendChild(linha));
  
    // Alternar a ordem para a próxima vez que clicar
    ordemAscendenteBanda = !ordemAscendenteBanda;
  });

  // Função para ordenar pela coluna Nome
thNome.addEventListener('click', function() {
    const linhas = Array.from(tabela.rows);
  
    linhas.sort((a, b) => {
      const nomeA = a.cells[1].textContent.toLowerCase();
      const nomeB = b.cells[1].textContent.toLowerCase();
  
      if (nomeA < nomeB) return ordemAscendenteNome ? -1 : 1;
      if (nomeA > nomeB) return ordemAscendenteNome ? 1 : -1;
      return 0;
    });
  
    // Reordenar as linhas na tabela
    linhas.forEach(linha => tabela.appendChild(linha));
  
    // Alternar a ordem para a próxima vez que clicar
    ordemAscendenteNome = !ordemAscendenteNome;
  });

  // Função para ordenar pela coluna ID
thId.addEventListener('click', function() {
    const linhas = Array.from(tabela.rows);
  
    linhas.sort((a, b) => {
      const idA = parseInt(a.cells[0].textContent);
      const idB = parseInt(b.cells[0].textContent);
  
      return ordemAscendenteId ? idA - idB : idB - idA;
    });
  
    // Reordenar as linhas na tabela
    linhas.forEach(linha => tabela.appendChild(linha));
  
    // Alternar a ordem para a próxima vez que clicar
    ordemAscendenteId = !ordemAscendenteId;
  });
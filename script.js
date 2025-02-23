// seleciona o formulário e a tabela
const form = document.getElementById('form-cadastro');
const tabela = document.getElementById('tabela-cadastro').getElementsByTagName('tbody')[0];
const thId = document.querySelector('#tabela-cadastro th:nth-child(1)');
const thNome = document.querySelector('#tabela-cadastro th:nth-child(2)');
const thBanda = document.querySelector('#tabela-cadastro th:nth-child(3)');

// pega os dados do formulário e adiciona na tabela
form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita o recarregamento da página

  // pegando os valores do formulário
  const nome = document.getElementById('nome').value;
  const banda = document.getElementById('banda').value;
  const id = tabela.rows.length + 1;

  // criando linha na tabela
  const novaLinha = tabela.insertRow();

  // criando as células
  const celulaId = novaLinha.insertCell(0);
  const celulaNome = novaLinha.insertCell(1);
  const celulaBanda = novaLinha.insertCell(2);

  celulaId.textContent = id;
  celulaNome.textContent = nome;
  celulaBanda.textContent = banda;

  form.reset();
});

// ordenando pelo id
thId.addEventListener('click', function() {
  const linhas = Array.from(tabela.rows);

  linhas.sort((a, b) => {
    const idA = parseInt(a.cells[0].textContent);
    const idB = parseInt(b.cells[0].textContent);
    return idA - idB; 
  });

  linhas.forEach(linha => tabela.appendChild(linha));
});

// ordenando pelo nome
thNome.addEventListener('click', function() {
  const linhas = Array.from(tabela.rows);

  linhas.sort((a, b) => {
    const nomeA = a.cells[1].textContent.toLowerCase();
    const nomeB = b.cells[1].textContent.toLowerCase();
    return nomeA.localeCompare(nomeB); 
  });

  linhas.forEach(linha => tabela.appendChild(linha));
});

// ordenando pela banda
thBanda.addEventListener('click', function() {
  const linhas = Array.from(tabela.rows);

  linhas.sort((a, b) => {
    const bandaA = a.cells[2].textContent.toLowerCase();
    const bandaB = b.cells[2].textContent.toLowerCase();
    return bandaA.localeCompare(bandaB); 
  });

  linhas.forEach(linha => tabela.appendChild(linha));
});
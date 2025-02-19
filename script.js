<<<<<<< HEAD
// seleciona o formulário e a tabela
=======
// Seleciona o formulário e a tabela
>>>>>>> 9cde75e291fff4d9eca9899ea30dba75f1fddd9a
const form = document.getElementById('form-cadastro');
const tabela = document.getElementById('tabela-cadastro').getElementsByTagName('tbody')[0];
const thId = document.querySelector('#tabela-cadastro th:nth-child(1)');
const thNome = document.querySelector('#tabela-cadastro th:nth-child(2)');
const thBanda = document.querySelector('#tabela-cadastro th:nth-child(3)');

let ordemAscendenteId = true;    // ordenação por id
let ordemAscendenteNome = true;   //ordenação por nome
let ordemAscendenteBanda = true;   //ordenação por banda

//pra pegar os dados do formulário
form.addEventListener('submit', function(event) {
  event.preventDefault(); // evita o recarregamento da página

<<<<<<< HEAD
  // pegando os dados do formulário
=======
  // eegando os valores do formulário
>>>>>>> 9cde75e291fff4d9eca9899ea30dba75f1fddd9a
  const nome = document.getElementById('nome').value;
  const banda = document.getElementById('banda').value;
  const id = tabela.rows.length + 1;

<<<<<<< HEAD
  // criando linha na tabela
=======
  // criando nova linha na tabela
>>>>>>> 9cde75e291fff4d9eca9899ea30dba75f1fddd9a
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

 // função pra ordenar pelo id
 thId.addEventListener('click', function() {
    const linhas = Array.from(tabela.rows);
  
    linhas.sort((a, b) => {
      const idA = parseInt(a.cells[0].textContent);
      const idB = parseInt(b.cells[0].textContent);
  
      return ordemAscendenteId ? idA - idB : idB - idA;
    });
  
    linhas.forEach(linha => tabela.appendChild(linha));
  
    ordemAscendenteId = !ordemAscendenteId;
  });

  // função pra ordenar pelo nome
thNome.addEventListener('click', function() {
    const linhas = Array.from(tabela.rows);
  
    linhas.sort((a, b) => {
      const nomeA = a.cells[1].textContent.toLowerCase();
      const nomeB = b.cells[1].textContent.toLowerCase();
  
      if (nomeA < nomeB) return ordemAscendenteNome ? -1 : 1;
      if (nomeA > nomeB) return ordemAscendenteNome ? 1 : -1;
      return 0;
    });
  
    linhas.forEach(linha => tabela.appendChild(linha));

    ordemAscendenteNome = !ordemAscendenteNome;
  });

  //função pra ordenar pela banda
thBanda.addEventListener('click', function() {
    const linhas = Array.from(tabela.rows);
  
    linhas.sort((a, b) => {
      const bandaA = a.cells[2].textContent.toLowerCase();
      const bandaB = b.cells[2].textContent.toLowerCase();
  
      if (bandaA < bandaB) return ordemAscendenteBanda ? -1 : 1;
      if (bandaA > bandaB) return ordemAscendenteBanda ? 1 : -1;
      return 0;
    });
  
    linhas.forEach(linha => tabela.appendChild(linha));
  
    ordemAscendenteBanda = !ordemAscendenteBanda;
  });

 
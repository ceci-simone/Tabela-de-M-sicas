
// // seleciona o formulário e a tabela
// const form = document.getElementById('form-cadastro');
// const tabela = document.getElementById('tabela-cadastro').getElementsByTagName('tbody')[0];
// const thId = document.querySelector('#tabela-cadastro th:nth-child(1)');
// const thNome = document.querySelector('#tabela-cadastro th:nth-child(2)');
// const thBanda = document.querySelector('#tabela-cadastro th:nth-child(3)');

// let ordemAscendenteId = true;    // ordenação por id
// let ordemAscendenteNome = true;   //ordenação por nome
// let ordemAscendenteBanda = true;   //ordenação por banda

// //pra pegar os dados do formulário
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // evita o recarregamento da página


//   // pegando os dados do formulário
//   const nome = document.getElementById('nome').value;
//   const banda = document.getElementById('banda').value;
//   const id = tabela.rows.length + 1;

//   // criando linha na tabela
//   const novaLinha = tabela.insertRow();

//   // criando as células
//   const celulaId = novaLinha.insertCell(0);
//   const celulaNome = novaLinha.insertCell(1);
//   const celulaBanda = novaLinha.insertCell(2);

//   celulaId.textContent = id;
//   celulaNome.textContent = nome;
//   celulaBanda.textContent = banda;

//   form.reset();
// });

//  // função pra ordenar pelo id
//  thId.addEventListener('click', function() {
//     const linhas = Array.from(tabela.rows);
  
//     linhas.sort((a, b) => {
//       const idA = parseInt(a.cells[0].textContent);
//       const idB = parseInt(b.cells[0].textContent);
  
//       return ordemAscendenteId ? idA - idB : idB - idA;
//     });
  
//     linhas.forEach(linha => tabela.appendChild(linha));
  
//     ordemAscendenteId = !ordemAscendenteId;
//   });

//   // função pra ordenar pelo nome
// thNome.addEventListener('click', function() {
//     const linhas = Array.from(tabela.rows);
  
//     linhas.sort((a, b) => {
//       const nomeA = a.cells[1].textContent.toLowerCase();
//       const nomeB = b.cells[1].textContent.toLowerCase();
  
//       if (nomeA < nomeB) return ordemAscendenteNome ? -1 : 1;
//       if (nomeA > nomeB) return ordemAscendenteNome ? 1 : -1;
//       return 0;
//     });
  
//     linhas.forEach(linha => tabela.appendChild(linha));

//     ordemAscendenteNome = !ordemAscendenteNome;
//   });

//   //função pra ordenar pela banda
// thBanda.addEventListener('click', function() {
//     const linhas = Array.from(tabela.rows);
  
//     linhas.sort((a, b) => {
//       const bandaA = a.cells[2].textContent.toLowerCase();
//       const bandaB = b.cells[2].textContent.toLowerCase();
  
//       if (bandaA < bandaB) return ordemAscendenteBanda ? -1 : 1;
//       if (bandaA > bandaB) return ordemAscendenteBanda ? 1 : -1;
//       return 0;
//     });
  
//     linhas.forEach(linha => tabela.appendChild(linha));
  
//     ordemAscendenteBanda = !ordemAscendenteBanda;
//   });

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
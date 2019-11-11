//const fetch = import('node-fetch');

const resultadoApi = "https://produtoapi.azurewebsites.net/api/"

const reqGetprodutos = "produto/GetProdutos"



fetch(resultadoApi+reqGetprodutos)
.then(response => response.json())
.then(result => { 
  console.log(result);
  
  
})
.catch(err => { 
  // trata se alguma das promises falhar
  console.error('Falha ao recuperar os dados da API', err); 
});

document.body.innerHTML = ('ola')
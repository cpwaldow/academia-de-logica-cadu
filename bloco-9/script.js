const input = document.getElementById('cep');
const btn = document.getElementById('btn');

const getValue = (event) => {
  event.preventDefault();
  fetch(`https://viacep.com.br/ws/${input.value}/json/`)
    .then((response) => response.json())
    .then((data) => {
      const objEndereco = {
        rua: data.logradouro,
        bairro: data.bairro,
        estado: `${data.localidade} - ${data.uf}`,
      };
      input.value = '';
      return recebeObj(objEndereco);
    })
    .catch(() => {
      alert('Número inválido, tente novamente');
      input.value = '';
    });
};

const recebeObj = ({ rua, bairro, estado }) => {
  const ruaDOM = document.getElementById('rua');
  const bairroDOM = document.getElementById('bairro');
  const estadoDOM = document.getElementById('estado');

  ruaDOM.innerText = rua;
  bairroDOM.innerText = bairro;
  estadoDOM.innerText = estado;
};

btn.addEventListener('click', getValue);

// Manipulação de DOM
// Funções e parâmetros
// Função depender de outra para ser executada e receber parâmetro
// criar um objeto a partir de outro objeto
// destructuring de objetos
// eventos
// Fetch em API
// usando then / catch

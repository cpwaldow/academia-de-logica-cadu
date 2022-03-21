const input = document.getElementById('cep');
const btn = document.getElementById('btn');

// Fetch com Promise

/* const getValue = (event) => {
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
}; */

// Fetch com async/await

const getValue = async (event) => {
  event.preventDefault();
  const response = await fetch(`https://viacep.com.br/ws/${input.value}/json/`);
  const data = await response.json();
  input.value = '';

  const objEndereco = {
    rua: data.logradouro,
    bairro: data.bairro,
    estado: `${data.localidade} - ${data.uf}`,
  };
  return recebeObj(objEndereco);
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

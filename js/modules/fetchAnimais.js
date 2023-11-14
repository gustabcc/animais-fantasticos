import animaNumeros from './anima-numeros.js';

export default function fetchAnimais() {
  async function fetchDados(url) {
    const response = await fetch(url);
    const json = await response.json();
    const numerosGrid = document.querySelector('.numeros-grid');
    json.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
    animaNumeros();
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  fetchDados('http://127.0.0.1:5500/animaisAPI.json');
}

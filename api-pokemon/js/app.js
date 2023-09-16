const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
})

const seccionPokemones = document.querySelector('#contenedor')
const previous = document.querySelector('#previous')
const next = document.querySelector('#next')
const inputBusqueda = document.querySelector('#inputBusqueda')
const btnBuscar = document.querySelector('#btnBuscar')

let offset = 0
const limite = 12

async function obtenerPokemones(offset, limite) {
  try {
    const respuesta = await api.get(`pokemon?offset=${offset}&limit=${limite}`)
    const pokemones = respuesta.data.results
    for (const pokemonData of pokemones) {
      const respuestaPokemon = await api.get(pokemonData.url)
      const pokemon = respuestaPokemon.data
      crearTarjetaPokemon(pokemon)
    }
  } catch (error) {
    console.error('Error al obtener los datos de Pokémon:', error)
  }
}

function crearTarjetaPokemon(pokemon) {
  const tarjetaPokemon = document.createElement('div')
  tarjetaPokemon.classList.add('card', 'col-md-3', 'm-3')

  tarjetaPokemon.innerHTML = `
    <img class="card-img-top" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <div class="card-body">
      <h5 class="card-title">${pokemon.name}</h5>
      <p class="card-text">Tipo: ${pokemon.types[0].type.name}</p>
      <button class="btn btn-primary btn-ver-detalles" data-bs-toggle="modal" data-bs-target="#modalDetalles"
        data-pokemon-name="${pokemon.name}">Ver detalles</button>
    </div>
  `

  seccionPokemones.appendChild(tarjetaPokemon)
}

function limpiarPokemones() {
  seccionPokemones.innerHTML = ''
}

next.addEventListener('click', () => {
  limpiarPokemones()
  offset += limite
  obtenerPokemones(offset, limite)
})

previous.addEventListener('click', () => {
  if (offset === 0) {
    return
  }
  limpiarPokemones()
  offset -= limite
  obtenerPokemones(offset, limite)
})

btnBuscar.addEventListener('click', async () => {
  const terminoBusqueda = inputBusqueda.value.trim()
  limpiarPokemones()

  if (terminoBusqueda !== '') {
    try {
      const respuesta = await api.get(`pokemon/${terminoBusqueda}`)
      const pokemon = respuesta.data
      crearTarjetaPokemon(pokemon)
    } catch (error) {
      console.error('Error al buscar Pokémon:', error)
    }
  } else {
    // Si el campo de búsqueda está vacío, muestra todos los Pokémon nuevamente.
    obtenerPokemones(offset, limite)
  }
})


seccionPokemones.addEventListener('click', async (event) => {
  if (event.target.classList.contains('btn-ver-detalles')) {
    const pokemonName = event.target.getAttribute('data-pokemon-name')
    try {
      const respuesta = await api.get(`pokemon/${pokemonName}`)
      const pokemon = respuesta.data
      mostrarDetalles(pokemon)
    } catch (error) {
      console.error('Error al obtener los detalles del Pokémon:', error)
    }
  }
})

function mostrarDetalles(pokemon) {
  const modalBody = document.querySelector('#modalDetalles .modal-body')

  modalBody.innerHTML = `
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p><strong>Tipo:</strong> ${pokemon.types.map(type => type.type.name).join(', ')}</p>
    <p><strong>Habilidades:</strong></p>
    <ul>
      ${pokemon.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
    </ul>
    <p><strong>Altura:</strong> ${pokemon.height / 10} metros</p>
    <p><strong>Peso:</strong> ${pokemon.weight / 10} kilogramos</p>
    <p><strong>Estadísticas:</strong></p>
    <ul>
      ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
    </ul>
  `
}

obtenerPokemones(offset, limite)

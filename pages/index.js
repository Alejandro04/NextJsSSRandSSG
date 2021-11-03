import Link from 'next/link'
import Image from 'next/image'

const Pokemon = ({ pokemon }) => {
  console.log("poke", pokemon)
  const id = pokemon.url.split('/').filter(x => x).pop()
  return (
    <li>
      <Link href={`/pokemons/${id}`}>{pokemon.name}</Link>
    </li>
  )
}
export default function Pokemones({ pokemones }) {
  return (
    <div>
      <div className="header">
        <div className="title">Poke app</div>
        <Link href={`/requests/`}>Send http request for test</Link>
      </div>
      <div className="container">
        <div className="center">
          <ul>
            {pokemones.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.name} />)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()

  return {
    props: { pokemones: data.results }
  }

}

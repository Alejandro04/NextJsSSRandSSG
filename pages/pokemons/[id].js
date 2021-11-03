import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Pokemon = ({ data }) => {
  const router = useRouter()

  if (!data) {
    return (
      <div>
        <div>This pokemon not exist</div>
        <Link href="/">Back</Link>
      </div>
    )
  }

  return (
    <div className="pokemon">
      <h1>{data.name} #{data.id}</h1>
      <Image src={data.sprites.front_default} width={200} height={200} />
      <Link href="/">Back</Link>
    </div>
  )
}

export default Pokemon

export const getServerSideProps = async ({ params }) => {

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()

    console.log(data)
    return { props: { data } }

  } catch (error) {

    const data = null;
    return { props: { data } }
  }

}

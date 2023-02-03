import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h2>Herramientas</h2>
      <ul>
        <li><Link href="/character-creator">Creador de Personaje</Link></li>
      </ul>
    </>
  )
}

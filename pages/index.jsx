import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h2>Tools</h2>
      <ul>
        <li><Link href="/character-creator">Create Character</Link></li>
      </ul>
    </>
  )
}

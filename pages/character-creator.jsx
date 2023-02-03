import Link from 'next/link'

export default function Creator({ test }) {
  return (
    <>
      <h2>Creador de Personaje</h2>
      <div><Link href="/">Back</Link></div>

      <form>
        <label>
          <p>Nombre del Personaje {test}</p>
          <input type="text" />
        </label>

        <label>
          <p>Seleccionar Clase</p>
          <select>
            <option value="">Test</option>
          </select>
        </label>

      </form>
    </>
  )
}

export function getServerSideProps(){
  const test = "Wepa"
  return {
    props:{
      test 
    }
  }
}
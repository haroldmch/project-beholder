
import Link from 'next/link'
import { getRaces } from '../db/getRaces'
import { useCreateCharacter } from '../hooks/useCreateCharacter';


export default function Creator({ races }) {
  const { subraces, getSubraces, classes, skills } = useCreateCharacter(); 
  
  return (
    <>
      <h2>Creador de Personaje</h2>
      <div><Link href="/">Back</Link></div>

      <form>
        <label>
          <p>Nombre del Personaje</p>
          <input type="text" name="name" />
        </label>

        <label>
          <p>Raza</p>
          <select onChange={({target}) => {getSubraces(target.value)}} defaultValue="" name="race">
            <option value="" disabled>Selecciona Raza</option>
            {
              races.map( ({ id, name }) => (
                <option key={name} value={id}>{name}</option>
              ))
            }
          </select>
        </label>


        {
          subraces.map( (item) => (
            <>
              <p>{item.name}</p>
            </>
          ))
        }    


      </form>
    </>
  )
}

export async function getServerSideProps(){

  const races = await getRaces();

  return {
    props:{
      races
    }
  }
}

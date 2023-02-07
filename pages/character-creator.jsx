
import Link from 'next/link'
import { getRaces } from '../db/getRaces'
import { useCreateCharacter } from '../hooks/useCreateCharacter';


export default function Creator({ races, loading }) {
  const {
    subraces,
    getSubraces,
    isLoadingSubraces,
    classes,
    getClasess,
    isLoadingClasses,
    skills
  } = useCreateCharacter(); 

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
          (!isLoadingSubraces) &&  (
            <label>
              <p>Subraza</p>
              <select onChange={() => {getClasess()}} defaultValue="" name="subrace">
                <option value="" disabled>Selecciona Subraza</option>
                {
                  subraces.map( ( {id, name} ) => (
                    <option key={name} value={id}>{name}</option>
                  ))
                }
              </select>
            </label>
          )
        }

        {
          (!isLoadingClasses) &&  (
            <label>
              <p>Clases</p>
              <select defaultValue="" name="classes">
                <option value="" disabled>Selecciona Clase</option>
                {
                  classes.map( ( {id, name} ) => (
                    <option key={name} value={id}>{name}</option>
                  ))
                }
              </select>
            </label>
          )
        }

      </form>
    </>
  )
}

export async function getStaticProps(){

  const races = await getRaces();

  return {
    props:{
      races
    }
  }
}

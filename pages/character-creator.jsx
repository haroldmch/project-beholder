
import Link from 'next/link'
import Abitilies from '../components/Abitilies';
import SelectOptions from '../components/SelectOptions';
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
    showAbilities,
    activateAbilities
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

        <SelectOptions
          items={races}
          callback={getSubraces}
          title="Raza"
          placeholder="Selecciona Raza"
          name="race" /> 

        {
          (!isLoadingSubraces) &&  (
            <SelectOptions
              items={subraces}
              callback={getClasess}
              title="Subraza"
              placeholder="Selecciona Subraza"
              name="subrace" /> 
          )
        }

        {
          (!isLoadingClasses) &&  (
            <SelectOptions
              	items={classes}
                callback={activateAbilities}
                title="Clases"
                placeholder="Selecciona Clase"
                name="classes" /> 
          )
        }

        {
          (showAbilities) &&  (
            <Abitilies/>
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

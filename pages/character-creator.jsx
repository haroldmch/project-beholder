import { Prisma, PrismaClient } from '@prisma/client'
import Link from 'next/link'

export default function Creator({ races }) {

  const testo = () => {
    console.log(JSON.parse(results));
  }

  return (
    <>
      <h2>Creador de Personaje</h2>
      <div><Link href="/">Back</Link></div>

      <form>
        <label>
          <p onClick={testo}>Nombre del Personaje </p>
          <input type="text" />
        </label>

        <label>
          <p>Seleccionar Clase</p>

          <select>
            {
              JSON.parse(races).map( ({ id, name }) => (
                <option key={id}>{name}</option>
              ))
            }
          </select>
        </label>

      </form>
    </>
  )
}

export async function getStaticProps(){

  const prisma = new PrismaClient();

  const results = await prisma.$queryRaw(
    Prisma.sql`
      SELECT
        race_id as id,
        race_name as name,
        date_format(race_created,'%m/%d/%Y %h:%i:%s %p') as date
      FROM races
    `);

  return {
    props:{
      races: JSON.stringify(
        results,
        (key, value) => (typeof value === 'bigint' ? value.toString() : value)
      )
    }
  }
}
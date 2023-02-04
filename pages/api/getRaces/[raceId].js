import { Prisma, PrismaClient } from '@prisma/client'

export default async function handler(req, res) {

  const prisma = new PrismaClient(),
        { raceId } = req.query;

  const results = await prisma.$queryRaw(
    Prisma.sql`
      SELECT
        race_id as id,
        race_name as name,
        race_description as description
      FROM races
      WHERE race_id = ${raceId}
    `);


  res.status(200).json({ races: JSON.parse(JSON.stringify(
    results,
    (key, value) => (typeof value === 'bigint' ? value.toString() : value)
  )) })
}

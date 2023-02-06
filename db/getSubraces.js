import { Prisma, PrismaClient } from '@prisma/client'
import { parsePrisma } from '../helpers/parsePrisma';

export const getSubraces = async (raceId) => {

  const prisma = new PrismaClient();

  const results = await prisma.$queryRaw(
    Prisma.sql`
      SELECT
        subrace_id as id,
        subrace_name as name,
        subrace_description as description
      FROM subraces
      WHERE race_id = ${raceId}
    `);

  return parsePrisma(results);
}

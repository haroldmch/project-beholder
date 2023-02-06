import { Prisma, PrismaClient } from '@prisma/client'
import { parsePrisma } from '../helpers/parsePrisma';

export const getRaces = async () => {

  const prisma = new PrismaClient();

  const results = await prisma.$queryRaw(
    Prisma.sql`
      SELECT
        race_id as id,
        race_name as name,
        race_description as description
      FROM races
    `);

  return parsePrisma(results);
}

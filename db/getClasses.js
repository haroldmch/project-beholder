import { Prisma, PrismaClient } from '@prisma/client'
import { parsePrisma } from '../helpers/parsePrisma';

export const getClasses = async () => {

  const prisma = new PrismaClient();

  const results = await prisma.$queryRaw(
    Prisma.sql`
      SELECT
        class_id AS id,
        class_name AS name,
        class_description AS description,
        class_hit_dice AS hit_dice,
        (CASE
          WHEN class_armors is null THEN 'Ninguna'
          WHEN class_armors is not null THEN class_armors
        END) AS armors,
        class_weapons AS weapons,
        (CASE
          WHEN class_tools is null THEN 'Ninguna'
          WHEN class_tools is not null THEN class_tools
        END) AS tools,
        class_tips AS tips,
        class_max_skills AS max_skills
      FROM classes
    `);

  return parsePrisma(results);
}



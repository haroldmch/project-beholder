import { getSubraces } from "../../../db/getSubraces";

export default async function handler(req, res) {
  const { raceId } = req.query;

  res.status(200).json(await getSubraces(raceId))
}

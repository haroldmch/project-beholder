import { getRaces } from "../../db/getRaces";

export default async function handler(req, res) {
  res.status(200).json(await getRaces())
}

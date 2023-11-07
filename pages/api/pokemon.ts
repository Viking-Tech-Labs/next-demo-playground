import type { NextApiRequest, NextApiResponse } from "next";

import { data } from "./pokemon-data";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  if (req.method === "GET") {
    // Get page and limit from the query string
    const page: number = parseInt(req.query.page) || 0;
    const limit: number = parseInt(req.query.limit) || 10;

    try {
      // Assuming there's a function getPokemon that fetches data from an API or database.
      // This function should handle pagination logic based on `page` and `limit`.
      const data = await getPokemon({ page, limit });

      // Send the paginated data as a response
      res.status(200).json(data);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ message: "Error fetching Pokémon data" });
    }
  }
}

async function getPokemon({ page, limit }: { page: number; limit: number }) {
  const offset = page * limit;
  return { data: data.slice(offset, offset + limit), count: data.length };
}

async function getPokemonByFilter(filters: any) {
  return [];
}

import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import apiClient from "./services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[]; // 1. Fixed Typo
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

//   console.log("1. Component Rendered. Games count:", games.length);
//   console.log("2. Current Error:", error);


  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games")
      .then((res) => setGames(res.data.results))
       
      .catch((err) => setError(err.message));
  }); // 3. Fixed Infinite Loop

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
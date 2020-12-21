import React, { useEffect, useState } from "react";
import "./App.css";
import Tile from "./Tile";
import SelectableTile from "./SelectableTile";

export default function App() {
  const [numberOfTiles, setNumberOfTiles] = useState(20);
  const [increment, setIncrement] = useState(0);
  const [allTiles, setAllTiles] = useState([]);

  useEffect(() => {
    const tiles = [];

    for (let i = 0; i < numberOfTiles; i++) {
      for (let j = 0; j < numberOfTiles; j++) {
        tiles.push({ x: i, y: j, id: `${i},${j}` });
      }
    }

    setAllTiles(tiles);
  }, [numberOfTiles]);

  return (
    <div className="App">
      <div>
        <h1>This is some initial layout I want here</h1>
      </div>
      <div>
        <button onClick={() => setIncrement(increment + 1)}>+1</button>
        {increment}
      </div>
      <div className="tiles">
        {allTiles.map(({ x, y, id }) => (
          <Tile x={x} y={y} key={id} max={numberOfTiles} tileSize={64}>
            <SelectableTile x={x} y={y}></SelectableTile>
          </Tile>
        ))}
      </div>
    </div>
  );
}

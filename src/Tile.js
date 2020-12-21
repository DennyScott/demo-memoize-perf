import React, { useMemo } from "react";

const regularBorder = "1px solid #aaa";

function Tile(props) {
  const { tileSize, children, x, y, max } = props;
  const left = x * tileSize;
  const top = y * tileSize;

  const rightBorder = x === max - 1 ? regularBorder : "0";
  const bottomBorder = y === 0 ? regularBorder : "0";
  const color = useMemo(() => {
    let i = 0;
    while (i < 5000000) {
      i++;
    }
    return `rgb(${x % 2}${y % 5}${x % 5},${y % 2}${x % 5}${y % 2},${x % 2}${
      y % 5
    }${x % 5})`;
  }, [x, y]);

  const style = {
    width: `${tileSize}px`,
    height: `${tileSize}px`,
    position: "absolute",
    transform: `translate(${left + "px," + top + "px"})`,
    border: regularBorder,
    borderRight: rightBorder,
    borderBottom: bottomBorder,
    backgroundColor: color,
  };

  return <div style={style}>{children}</div>;
}

export default Tile;

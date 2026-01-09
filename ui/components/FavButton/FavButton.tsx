"use client";

import { useState } from "react";

const FavButton = () => {
  const [isFav, setIsFav] = useState(false);
  const handleClick = () => {
    setIsFav((prev) => !prev);
  };

  return isFav ? (
    <button onClick={handleClick}>Fav</button>
  ) : (
    <button onClick={handleClick}>NoFav</button>
  );
};

export default FavButton;

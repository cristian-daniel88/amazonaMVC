import { useState } from "react";

export const useTypeClothes = () => {
  const [clothes, setClothes] = useState(null);

  return {clothes, setClothes };
};

import { useState } from "react";

export const useNotFound = () => {
  const [notFound, setnotFound] = useState(false);

  return {notFound, setnotFound};
};

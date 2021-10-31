import { useState } from "react";

export const useFind = () => {
  const [find, setFind] = useState('');

  return {find, setFind};
};

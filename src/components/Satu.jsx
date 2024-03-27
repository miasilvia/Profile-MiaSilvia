import React, { useState } from "react";

export default function Satu() {
  const [plus, setPlus] = useState(0);


  const plusHandler = (amount) => {
    setPlus((prevPlus) => {
      const newPlus = prevPlus + amount;
      if (newPlus >= 0 && newPlus <= 10) {
        return newPlus;
      } else {
        return prevPlus;
      }
    });
  };

  return (
    <>
      <button onClick={() => plusHandler(1)}> +</button>({plus})
      <button onClick={() => plusHandler(-1)}>-</button>
      <button className="bg-black text-white" onClick={() => setPlus(0)}>
        RESET
      </button>
      <form action="">
        <input className="border-2 border-black" />
      </form>
    </>
  );
}

import React, { useState } from "react";
import '../components/Counter.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count +1);
  };
  return (
    <div className="counter"> 
      <h2>{count}</h2>
      <button onClick={handleAdd}>+1</button>
    </div>
  );
};

export default Counter;

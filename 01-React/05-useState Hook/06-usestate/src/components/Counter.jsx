import React, { useState } from "react";

function Counter () {
  const [count, setCount] = useState(0);

  console.log(" Value changed : ", count);

  return (
    <div>
      <h1> Count is : {count} </h1>

      <h4>Number is {count %2 ===0 ? "Even" : "Odd" } </h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
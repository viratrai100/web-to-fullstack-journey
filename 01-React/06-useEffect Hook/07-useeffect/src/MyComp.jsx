import React, { useEffect, useState } from 'react';

const MyComponent = () => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // only run when component is mounted
    useEffect(() => {
        console.log("My Componnent is Mounting");

        return function() {
            console.log("Unmounting ...............");
        }
         
    }, []);

    // run when state is udated 
    useEffect(() => {
        console.log("Count got updated", count);

        return function() {
            console.log("Returning count", count);
        }
    }, [count]);

  return (
    <div>
        {/* <h2>My Component is Render</h2> */}
        <h1>Count is {count} </h1>
        <h1>Count is {count2} </h1>
        <button onClick={() => setCount(count + 1)} >Update</button>
        <button onClick={() => setCount2(count + 1)} >Update 2</button>
    </div>
  )
}

export default MyComponent;

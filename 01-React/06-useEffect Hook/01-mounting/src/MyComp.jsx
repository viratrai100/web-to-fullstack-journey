import React, { useEffect } from 'react';

const MyComponent = () => {

    useEffect(() => {
        console.log("My Componnent is Mounting");
    }, []);

  return (
    <div>
        <h2>My Component is Render</h2>
    </div>
  )
}

export default MyComponent;
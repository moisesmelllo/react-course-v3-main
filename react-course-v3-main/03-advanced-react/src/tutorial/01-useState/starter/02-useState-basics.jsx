import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
  <div>
    <h3>You clicked {count} times</h3>
    <button type="button" className="btn" onClick={handleClick}>Add</button>
  </div>
  );
};

export default UseStateBasics;

import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const increaseButton = () => {
    setValue((currentState) => {
      const newState = currentState + 1;
      console.log(newState)
      return newState;
    })
    
    
  }
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={increaseButton}>Increase</button>
    </div>
  )
};

export default UseStateGotcha;

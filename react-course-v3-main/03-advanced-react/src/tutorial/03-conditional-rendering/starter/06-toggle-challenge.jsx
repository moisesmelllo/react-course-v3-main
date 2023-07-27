import React, { useState, useEffect } from 'react'

const ToggleChallenge = () => {
  const [isTruthy, setIsTruthy] = useState(false)

  const toggle = () => {
    setIsTruthy(!isTruthy)
  }

  useEffect(() => {
    const element = document.querySelector('.texto')
    element.innerHTML = isTruthy ? 'funcionou': '';
  }, [isTruthy])

  return (
    <div>
      <button onClick={toggle} className="btn">
        Click me
      </button>
      <div className="texto"></div>
    </div>
  )
}

export default ToggleChallenge

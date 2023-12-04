import React, { useCallback, useState } from 'react'
import Container from './Container'

interface ButtonProps {
  onClick: () => void
}

const Button: React.FC<ButtonProps> = React.memo((props) => {
  console.debug('<Button /> foi renderizado')
  return (
    <button onClick={props.onClick}>Rodar D6</button>
  )
});

const UseCallbackComponent = () => {
  const [roll, setRoll] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.debug('useCallback > estado atualizado');
    setRoll(Math.floor((Math.random() * 6) + 1))
  }, [])

  return (
    <Container>
      <h1>useCallback</h1>
      <h2>{roll}</h2>
      <Button onClick={handleClick} />
    </Container>
  )
}

export default UseCallbackComponent

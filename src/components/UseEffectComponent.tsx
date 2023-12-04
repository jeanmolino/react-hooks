import React, { useState } from 'react'
import { useEffect } from 'react'
import Container from './Container';

function Box() {
  useEffect(() => {
    return () => {
      console.debug('Irei executar quando o component <Box /> for removido da DOM! (unmount)')
    }
  })

  return (
    <div style={{width: 40, height: 40, background: '#000'}} />
  )
}

const UseEffectComponent = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');


  useEffect(() => {
    console.debug('Irei executar a cada render!');
  })

  useEffect(() => {
    console.debug('Irei executar no primeiro render!');
  }, [])

  useEffect(() => {
    console.debug('Irei executar no primeiro render e quando uma determinada variável mudar!');
  }, [visible, text])

  return (
    <Container>
      <h1>useEffect</h1>
      <button onClick={() => setVisible((prevState) => !prevState)}>Show box</button>
      <br />
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      {visible && <Box />}
    </Container>
  )
}

export default UseEffectComponent

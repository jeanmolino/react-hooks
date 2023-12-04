import React, { useEffect, useState } from 'react'
import Container from './Container'

function useLocalStorage(key: string, initialValue = '') {
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);

    if (storedData) {
      return JSON.parse(storedData);
    }

    return initialValue;
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state])

  return [state, setState];
}

const UseLocalStorageComponent = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const handleChangeTheme = () => {
    setTheme((prevState: string) => prevState === 'light' ? 'dark' : 'light');
  }

  return (
    <Container>
      <h1>Custom Hook</h1>
      <button onClick={handleChangeTheme}>Mudar tema</button>
      <h2>Tema atual</h2>
      {theme === 'light' ? '🌞' : '🌚'}
    </Container>
  )
}

export default UseLocalStorageComponent
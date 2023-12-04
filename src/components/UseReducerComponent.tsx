import React, { useReducer } from "react";
import Container from "./Container";

const INITIAL_STATE = {count: 1};

interface Action {
  type: 'increment' | 'decrement'
}

interface State {
  count: number
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      if (state.count < 1) return { count: state.count }
      return { count: state.count - 1 }
  }
}

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const counterText = `Valor atual ${state.count}`

  return (
    <Container>
      <h1>useReducer</h1>
      <h2>Contador</h2>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <p>{counterText}</p>
    </Container>
  )
}

export default UseReducerComponent
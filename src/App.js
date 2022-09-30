import {useReducer} from "react";
import {useRef} from "react";

const init = (initialValue) => {
  return {counter1: initialValue, counter2: initialValue}
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC1':
      return {...state, counter1: state.counter1 + 1}
    case  'DEC1':
      return {...state, counter1: state.counter1 - 1}
    case  'RESET1':
      return {...state, counter1: 0}
    case  'SET1':
      return {...state, counter1: action.payload}
    case 'INC2':
      return {...state, counter2: state.counter2 + 1}
    case  'DEC2':
      return {...state, counter2: state.counter2 - 1}
    case  'RESET2':
      return {...state, counter2: 0}
    case  'SET2':
      return {...state, counter2: action.payload}
  }
  return {...state}
}
const name = useRef();
const age = useRef();

const submit = (e) => {
  e.preventDefault()
  const data = {name: name.current.value, age: age.current.value}
  console.log(data);
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0, init);
  return (
      <div>
        <h1>Add cat: {state.counter1}</h1>
        <h1>Add dog: {state.counter2}</h1>
        <form onSubmit={submit}>
          <input type="text" placeholder={'name'} ref={name}/>
          <input type="text" placeholder={'age'} ref={age}/>
          <button>save</button>
        </form>
        {/*<form onSubmit={submit}>*/}
        {/*  <input type="text" placeholder={'name'} ref={name}/>*/}
        {/*  <input type="text" placeholder={'age'} ref={age}/>*/}
        {/*  <button>save</button>*/}
        {/*</form>*/}
        {/*<button onClick={() => dispatch({type: 'INC1'})}>inc</button>*/}
        {/*<button onClick={() => dispatch({type: 'DEC1'})}>dec</button>*/}
        {/*<button onClick={() => dispatch({type: 'RESET1'})}>reset</button>*/}
        {/*<button onClick={() => dispatch({type: 'SET1', payload: 10})}>set</button>*/}
        {/*<hr/>*/}
        {/*<button onClick={() => dispatch({type: 'INC2'})}>inc</button>*/}
        {/*<button onClick={() => dispatch({type: 'DEC2'})}>dec</button>*/}
        {/*<button onClick={() => dispatch({type: 'RESET2'})}>reset</button>*/}
        {/*<button onClick={() => dispatch({type: 'SET2', payload: 20})}>set</button>*/}
      </div>
  );
};

export {App};
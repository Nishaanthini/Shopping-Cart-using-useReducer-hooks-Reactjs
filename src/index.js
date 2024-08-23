import ReactDOM from 'react-dom';
import React, { useReducer } from 'react';
import './index.css';

const initialState = {
    apple: 0,
    banana: 0,
    papaya: 0,
    orange: 0,
    cherry: 0,
    total: 0
};

function Welcome(state, action) {
    switch (action.type) {
        case 'increment_apple':
            return {
                ...state,
                apple: state.apple + 1,
                total: state.total + 1
            };
        case 'decrement_apple':
            return {
                ...state,
                apple: state.apple - 1,
                total: state.total - 1
            };
        case 'increment_banana':
            return {
                ...state,
                banana: state.banana + 1,
                total: state.total + 1
            };
        case 'decrement_banana':
            return {
                ...state,
                banana: state.banana - 1,
                total: state.total - 1
            };
        case 'increment_papaya':
            return {
                ...state,
                papaya: state.papaya + 1,
                total: state.total + 1
            };
        case 'decrement_papaya':
            return {
                ...state,
                papaya: state.papaya - 1,
                total: state.total - 1
            };
            case 'increment_orange':
              return {
                  ...state,
                  orange: state.orange + 1,
                  total: state.total + 1
              };
          case 'decrement_orange':
              return {
                  ...state,
                  orange: state.orange - 1,
                  total: state.total - 1
              };
              case 'increment_cherry':
                return {
                    ...state,
                    cherry: state.cherry + 1,
                    total: state.total + 1
                };
            case 'decrement_cherry':
                return {
                    ...state,
                    cherry: state.cherry - 1,
                    total: state.total - 1
                };
        case 'reset_apple':
            return {
                ...state,
                total: state.total - state.apple,
                apple: 0
            };
        case 'reset_banana':
            return {
                ...state,
                total: state.total - state.banana,
                banana: 0
            };
        case 'reset_papaya':
            return {
                ...state,
                total: state.total - state.papaya,
                papaya: 0
            };
            case 'reset_orange':
              return {
                  ...state,
                  total: state.total - state.orange,
                  orange: 0
              };
              case 'reset_cherry':
            return {
                ...state,
                total: state.total - state.cherry,
                cherry: 0
            };
        default:
            throw new Error();
    }
}

function CounterOne({ state, dispatch }) {
    return (
        <div >
            <div className='f1'>
            <p >Apple: {state.apple}</p>
            <div className='btn'>
            <button onClick={() => dispatch({ type: 'increment_apple' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement_apple' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset_apple' })}>Reset</button>
            </div>
            </div>
        </div>
    );
}

function CounterTwo({ state, dispatch }) {
    return (
        <div>
            <div className='f1'>
            <p >Banana: {state.banana}</p>
            <div className='btn'>
            <button onClick={() => dispatch({ type: 'increment_banana' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement_banana' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset_banana' })}>Reset</button>
            </div>
            </div>
        </div>
    );
}

function CounterThree({ state, dispatch }) {
    return (
        <div>
            <div className='f1'>
            <p>Papaya: {state.papaya}</p>
            <div className='btn'>
            <button onClick={() => dispatch({ type: 'increment_papaya' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement_papaya' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset_papaya' })}>Reset</button>
            </div>
            </div>
        </div>
    );
}
function CounterFour({ state, dispatch }) {
  return (
      <div>
        <div className='f1'>
          <p>Orange: {state.orange}</p>
          <div className='btn'>
          <button onClick={() => dispatch({ type: 'increment_orange' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement_orange' })}>-</button>
          <button onClick={() => dispatch({ type: 'reset_orange' })}>Reset</button>
          </div>
          </div>
      </div>
  );
}
function CounterFive({ state, dispatch }) {
  return (
      <div>
        <div className='f1'>
          <p>Cherry: {state.cherry}</p>
          <div className='btn'>
          <button onClick={() => dispatch({ type: 'increment_cherry' })}>+</button>
          <button onClick={() => dispatch({ type: 'decrement_cherry' })}>-</button>
          <button onClick={() => dispatch({ type: 'reset_cherry' })}>Reset</button>
          </div>
          </div>
      </div>
  );
}

function TotalCount({ state }) {
    return (
        <div>
            <div className='f1'>
            <p className='p'>Total Quantity: {state.total}</p>
            </div>
        </div>
    );
}

function Counter() {
    const [state, dispatch] = useReducer(Welcome, initialState);

    return (
        <div>
            <h1>Fruits Shop</h1>
            <CounterOne state={state} dispatch={dispatch} />
            <CounterTwo state={state} dispatch={dispatch} />
            <CounterThree state={state} dispatch={dispatch} />
            <CounterFour state={state} dispatch={dispatch} />
            <CounterFive state={state} dispatch={dispatch} />
            <TotalCount state={state} />
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById('root'));

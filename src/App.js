// import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [task, setTask] = useState(null);
  const [number2, setNumber2] = useState('');
  // const [inputNum, setInputNum] = useState('');

  const changeRes = (num = null) => {
    if (task === null) {
      if (result === 0) {
        if (result.toString().includes('.')) {
          setResult(result + num.toString())

        } else {
          setResult(num)
        }
      } else {
        if (result.toString().includes('.')) {
          setResult(result + num.toString())

        } else {
          setResult( result + num.toString())
        }

      }
    } else if (task !== null) {
        if (number2 === '') {
          setNumber2(num)
        } else {
          setNumber2( number2 + num.toString())
        }
    } 
  }

  const finalRes = () => {
    if (task === '+') {
      setResult(parseFloat(result) + parseFloat(number2));
      setNumber2('');
      setTask(null);
    } 
    else if (task === '-') {
      setResult(parseFloat(result) - parseFloat(number2));
      setNumber2('');
      setTask(null);
    } 
    else if (task === '/') {
      setResult(parseFloat(result) / parseFloat(number2));
      setNumber2('');
      setTask(null);
    }
    else if (task === 'x') {
      setResult(parseFloat(result) * parseFloat(number2));
      setNumber2('');
      setTask(null);
    }
    else if (task === '%') {
      setResult(parseFloat(result) % parseFloat(number2));
      setNumber2('');
      setTask(null);
    }
  }

  const resetBtn = () => {
    setResult(0)
    setTask(null)
    setNumber2('')
  }

  const addFloat = () => {
    if (task === null) {
      setResult(result + '.')
    } else if (task !== null && number2 !== '') {
      setNumber2(number2 + '.')
    }
  }

  // const detectKeyDown = (e) => {
  //   console.log(e)
  //   e.preventDefault()
  //   if (e.charCode >= 48 && e.charCode <= 57) {
  //     changeRes(e.key)
  //     document.removeEventListener('keypress', detectKeyDown)
  //   }
  //    else if (e.key === '+') {
  //     setTask('+')
  //     document.removeEventListener('keypress', detectKeyDown)
  //   }
  //    else if (e.key === '=' || e.key === 'Enter') {
  //     finalRes()
  //     document.removeEventListener('keypress', detectKeyDown)
  //   } 
  //   else if (e.key === 'Backspace') {
  //     resetBtn()
  //     document.removeEventListener('keypress', detectKeyDown)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('keypress', detectKeyDown)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [result, number2, task])
  

  return (
    <div className="App">
        <h1>Welcome to the calculator!</h1>
        <div className="calc-container">
          <div className="buttons-grid">
            <div className="result">
            {result} {task !== null ? task : ''} {number2}</div>
            <div className="row-1">
              <button onClick={() => resetBtn()}>AC</button>
              <button onClick={() => setResult(result * -1)}>+/-</button>
              <button onClick={() => setTask('%')}>%</button>
              <button onClick={() => setTask('/')}>/</button>
            </div>
            <div className="row-2">
              <button onClick={() => changeRes(7)}>7</button>
              <button onClick={() => changeRes(8)}>8</button>
              <button onClick={() => changeRes(9)}>9</button>
              <button onClick={() => setTask('x')}>x</button>
            </div>
            <div className="row-3">
              <button onClick={() => changeRes(4)}>4</button>
              <button onClick={() => changeRes(5)}>5</button>
              <button onClick={() => changeRes(6)}>6</button>
              <button onClick={() => setTask('-')}>-</button>
            </div>
            <div className="row-4">
              <button onClick={() => changeRes(1)}>1</button>
              <button onClick={() => changeRes(2)}>2</button>
              <button onClick={() => changeRes(3)}>3</button>
              <button onClick={() => setTask('+')}>+</button>
            </div>
            <div className="row-5">
              <button className='btn-0' onClick={() => changeRes(0)}>0</button>
              <button onClick={() => addFloat()}>.</button>
              <button onClick={() => finalRes()}>=</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

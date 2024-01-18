import { useState } from 'react'
import './styles/App.css'

function App() {
  const [calculation, setCalculation] = useState('csdac');

  const calculate = (): void => {
    const value = eval(calculation);
    setCalculation(`${calculation}=${value}`);
  }

  return (
    <main className='relative bg-indigo-950 w-full h-screen py-0 px-8 flex justify-center'>
      <div className='max-w-screen-md'>
        <section className='w-full flex justify-center py-8'>
          <div className='bg-slate-200 w-full h-40 rounded-lg flex items-center px-3 text-5xl'>{calculation}</div>
        </section>
        <section className='w-full'>
          <div className='w-full flex gap-x-3 justify-between mb-3'>
            <button className='calc-button' onClick={() => setCalculation('')}>↺</button>
            <button className='calc-button'>⬅</button>
            <button className='calc-button' onClick={() => setCalculation('')}>C</button>
            <button className='calc-button'>AC</button>
          </div>
          <div className='w-full flex gap-x-3 justify-between mb-3'>
            <button className='calc-button'>mc</button>
            <button className='calc-button'>m+</button>
            <button className='calc-button'>m-</button>
            <button className='calc-button'>mr</button>
          </div>
          <div className='w-full flex justify-between'>
            <div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm' value={7} onClick={() => setCalculation(`${calculation}7`)}>7</button>
                <button className='calc-button-sm' value={8} onClick={() => setCalculation(`${calculation}8`)}>8</button>
                <button className='calc-button-sm' value={9} onClick={() => setCalculation(`${calculation}9`)}>9</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm' value={4} onClick={() => setCalculation(`${calculation}4`)}>4</button>
                <button className='calc-button-sm' value={5} onClick={() => setCalculation(`${calculation}5`)}>5</button>
                <button className='calc-button-sm' value={6} onClick={() => setCalculation(`${calculation}6`)}>6</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm' value={1} onClick={() => setCalculation(`${calculation}1`)}>1</button>
                <button className='calc-button-sm' value={2} onClick={() => setCalculation(`${calculation}2`)}>2</button>
                <button className='calc-button-sm' value={3} onClick={() => setCalculation(`${calculation}3`)}>3</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm' value={0} onClick={() => setCalculation(`${calculation}0`)}>0</button>
                <button className='calc-button-sm'>.</button>
                <button className='calc-button-sm'>+ -</button>
              </div>
            </div>
            <div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm' value={'/'} onClick={() => setCalculation(`${calculation}/`)}>/</button>
                <button className='calc-button-sm'>R</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm' value={'*'} onClick={() => setCalculation(`${calculation}*`)}>X</button>
                <button className='calc-button-sm'>x^2</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm' value={'-'} onClick={() => setCalculation(`${calculation}-`)}>-</button>
                <button className='calc-button-sm'>1/x</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm' value={'+'} onClick={() => setCalculation(`${calculation}+`)}>+</button>
                <button className='calc-button-sm' value={'='} onClick={calculate}>=</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App

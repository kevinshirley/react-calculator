// import { useState } from 'react'
import './styles/App.css'

function App() {
  return (
    <main className='relative bg-indigo-950 w-full h-screen py-0 px-8 flex justify-center'>
      <div className='max-w-screen-md'>
        <section className='w-full flex justify-center py-8'>
          <div className='bg-slate-200 w-full h-40 rounded-lg'></div>
        </section>
        <section className='w-full'>
          <div className='w-full flex gap-x-3 justify-between mb-3'>
            <button className='calc-button'>↺</button>
            <button className='calc-button'>⬅</button>
            <button className='calc-button'>C</button>
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
                <button className='calc-button-sm'>7</button>
                <button className='calc-button-sm'>8</button>
                <button className='calc-button-sm'>9</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm'>4</button>
                <button className='calc-button-sm'>5</button>
                <button className='calc-button-sm'>6</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm'>1</button>
                <button className='calc-button-sm'>2</button>
                <button className='calc-button-sm'>3</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm'>0</button>
                <button className='calc-button-sm'>.</button>
                <button className='calc-button-sm'>+ -</button>
              </div>
            </div>
            <div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm'>/</button>
                <button className='calc-button-sm'>R</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm'>X</button>
                <button className='calc-button-sm'>x^2</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm'>-</button>
                <button className='calc-button-sm'>1/x</button>
              </div>
              <div className='w-full flex gap-x-3 justify-between mb-3'>
                <button className='calc-button-sm'>+</button>
                <button className='calc-button-sm'>=</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App

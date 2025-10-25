"use client"
import React, { useState } from 'react'

function Counter() {
  const [a, setA] = useState(0)
  function add() {
    if(a < 10){
      setA(a + 1)
    }
    else{
      alert("Value cannot exceed than 10.")
    }
  }
  const subtract = () => {
    if(a > 0){
      setA(a - 1)
    }
    else{
      alert("Value cannot be less than 0.")
    }
  }
  return (
    <div>
      <div className='min-h-screen bg-green-300 flex flex-col justify-center items-center gap-2'>
        <h1 className='font-extrabold text-5xl'>Counter Program</h1>
        <h1 className='font-extrabold text-4xl'>{a}</h1>
        <div className='flex text-white gap-5'>
          <button onClick={add} className='font-bold bg-red-500 px-5 py-2 rounded-md'>Add 1</button>
          <button onClick={subtract} className='font-bold bg-blue-500 px-5 py-2 rounded-md'>Subtract 1</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
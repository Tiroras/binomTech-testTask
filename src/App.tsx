import React, { useState } from 'react'
import { Graph } from './components/Graph'
import './App.scss'
import { Inputs } from './components/Inputs'

const App: React.FC = () => {
  const [total, setTotal] = useState('690000')
  const [value, setValue] = useState('270000 ')

  const handleTotal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTotal(e.target.value)
  }

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <div className="App">
      <Inputs total={total} value={value} handleTotal={handleTotal} handleValue={handleValue} />
      <Graph fact={Number(value)} prognosis={Number(total)}/>
    </div>
  )
}

export default App

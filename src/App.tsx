import React from 'react'
import { Graph } from './components/Graph'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Graph fact={270000} prognosis={690000}/>
    </div>
  )
}

export default App

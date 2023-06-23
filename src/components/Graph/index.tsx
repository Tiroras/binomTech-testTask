import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Tooltip } from './Tooltip'
import { Canvas } from './Canvas'

interface IProps {
  fact: number
  prognosis: number
}

export const Graph: React.FC<IProps> = ({ fact = 270000, prognosis = 690000 }) => {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className={styles.wrapper} onMouseEnter={() => { setShowTooltip(true) }} onMouseLeave={() => { setShowTooltip(false) }}>
      <Canvas prognosis={prognosis} fact={fact} />
      <Tooltip show={showTooltip} prognosis={prognosis} fact={fact} />
    </div>
  )
}

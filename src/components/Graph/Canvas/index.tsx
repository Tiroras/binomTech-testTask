import React, { memo, useRef, useEffect } from 'react'
import styles from './Canvas.module.scss'
import { drawDiagram } from '../../../utils/drawDiagram'

interface IProps {
  fact: number
  prognosis: number
}

export const Canvas: React.FC<IProps> = memo(({ fact, prognosis }) => {
  const percent = Math.round((fact / prognosis) * 100)
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = ref.current?.getContext('2d')

    if (ctx !== null && ctx !== undefined) {
      drawDiagram(ctx, prognosis, fact)
    }

    return () => {
      const width = ref.current?.width ?? 0
      const height = ref.current?.height ?? 0
      ctx?.clearRect(0, 0, width, height)
    }
  }, [fact, prognosis])

  return (
    <div className={styles.diagramWrapper}>
      <canvas className={styles.canvas} ref={ref} />
      <div className={styles.percent}>{percent}%</div>
    </div>
  )
})

Canvas.displayName = 'Canvas'

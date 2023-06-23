import React from 'react'
import cn from 'classnames'
import styles from './Tooltip.module.scss'

interface IProps {
  fact: number
  prognosis: number
  show: boolean
}

export const Tooltip: React.FC<IProps> = ({ fact, prognosis, show }) => {
  return (
    <div className={cn(styles.tooltip, show && styles.active)}>
        <div className={styles.info}>
          <div className={styles.title}>
            ФАКТ / ПЛАН (НА ТЕКУЩУЮ ДАТУ)
          </div>
          <div className={styles.amount}>
            <span className={styles.orangeFont}>{fact.toLocaleString()} т</span><span> / {fact.toLocaleString()} т</span>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            ПРОГНОЗ / ПЛАН
          </div>
          <div className={styles.amount}>
            <span className={styles.orangeFont}>{prognosis.toLocaleString()} т</span><span> / {prognosis.toLocaleString()} т</span>
          </div>
        </div>
      </div>
  )
}

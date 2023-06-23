import React from 'react'
import styles from './styles.module.scss'

interface IProps {
  total: string
  value: string
  handleTotal: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Inputs: React.FC<IProps> = ({ total, value, handleTotal, handleValue }) => {
  return (
    <div className={styles.inputs}>
      <div className={styles.inputWrapper}>
        <label htmlFor="total">Total: </label>
        <input id="total" name={'total'} value={total} onChange={handleTotal} placeholder='Input total value' />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="value">Value: </label>
        <input id="value" name={'value'} value={value} onChange={handleValue} placeholder='Input part of total value' />
      </div>
    </div>
  )
}

import React from 'react'
import styles from './Button.module.css'

const Button = ({text,OnClick}) => {
  return (
    <button onClick={OnClick} className={styles.button}>
    <span>{text}</span>
    <img className={styles.arrow} src="/images/arrow-forward.png" alt="arrow-forward" />
  </button>
  )
}

export default Button
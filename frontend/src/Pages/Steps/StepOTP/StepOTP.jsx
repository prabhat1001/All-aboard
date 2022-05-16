import React from 'react'
import styles from './StepOTP.module.css'

const StepOTP = ({onNext}) => {
  return (
    <>
      <div>StepOTP</div>
      <button className={styles.NextButton}  onClick={onNext}>Next</button>
    </>
  )
}

export default StepOTP;
import React from 'react'
import styles from './StepPhoneEmail.module.css'

const StepPhoneEmail = ({onNext}) => {
  return (
    <>
      <div>StepPhoneEmail</div>
      <button  className={styles.NextButton} onClick={onNext}>Next</button>
    </>
  )
}

export default StepPhoneEmail;
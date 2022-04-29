import React from 'react'
import styles from './StepName.module.css'

const StepName = ({onNext}) => {
  return (
    <>
      <div>StepName</div>
      <button className={styles.NextButton}  onClick={onNext}>Next</button>
    </>
  )
}

export default StepName;
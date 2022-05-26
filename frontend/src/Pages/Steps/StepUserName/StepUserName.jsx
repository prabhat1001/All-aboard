import React from 'react';
import styles from './StepUserName.module.css'

const StepUserName = (onNext) => {
  return (
      <>
          <div>StepUserName</div>
          <button className={styles.NextButton}  onClick={onNext}>Next</button>
      </>
  )
}

export default StepUserName;
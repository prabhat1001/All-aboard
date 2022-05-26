import React, { useState } from 'react'
import Button from '../../../components/shared/Button/Button';
import Card from '../../../components/shared/Card/Card';
import TextInput from '../../../components/shared/TextInput/TextInput';
import styles from './StepOTP.module.css'

const StepOTP = () => {
  const [otp, setotp] = useState('');
  return (
    <>
      <Card  title="Enter the code we just texted you" icon="lock-emoji">
      <TextInput value={otp} onChange={(e)=> setotp(e.target.value)}/>
    <div>
     <div className={styles.actionButtonWrap}>
      <Button  text="Next"></Button>
     </div>
     <p className={styles.bottomParagraph}>
       By entering your number, you're agreeing to our Terms of 
       Service and Privacy Policy. Thanks!
     </p>
    </div>
  </Card>
    </>
  )
}

export default StepOTP;
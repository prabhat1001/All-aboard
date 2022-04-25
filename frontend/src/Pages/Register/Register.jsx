import React,{ useState } from 'react';
import styles from './Register.module.css';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';
import StepAvatar from '../Steps/StepAvatar/StepAvatar';
import StepName from '../Steps/StepName/StepName';
import StepOTP from '../Steps/StepOTP/StepOTP';
import StepUserName from '../Steps/StepUserName/StepUserName';

const steps={
    1: StepPhoneEmail,
    2: StepOTP,
    3: StepName,
    4: StepAvatar,
    5: StepUserName,

};


const Register=()=>{
    const [step,setStep]=useState(1);
    const Step=steps[step];

function onNext(){
    setStep(step+1);
}
    return <Step onNext={onNext} />
};

export default Register;
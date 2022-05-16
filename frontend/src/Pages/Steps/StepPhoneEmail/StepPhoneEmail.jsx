import React,{useState} from 'react'
import styles from './StepPhoneEmail.module.css'
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
// import styles from "./StepPhoneEmail.module.css";
const phoneEmailMap = {
  phone: Phone,
  email: Email
}


const StepPhoneEmail = ({onNext}) => {
  const [type,setType]=useState('phone');
        const Component=phoneEmailMap[type];
    
function onNext(){
        
  return (
    <>
    <div className={styles.cardwrapper}>
      <div className={styles.buttonwrap}>
      <button className={`${styles.tabButton} ${type==='phone' ? styles.active : ''}`} onClick={() =>setType('phone')}>
      <img src='/images/phone-white.png' alt='phone'/>
    </button>
    <button className={`${styles.tabButton} ${type==='email' ? styles.active : ''}`} onClick={() =>setType('email')}>
    <img src='/images/mail-white.png' alt='phone'/>
    </button>

      </div>
      <Component onNext={onNext} />

    </div>
    </>
  );
  
    
}};

export default StepPhoneEmail;
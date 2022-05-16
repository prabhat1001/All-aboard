import React from "react";
import styles from "./Home.module.css";
import Card from "../../components/shared/Card/Card";
import { useNavigate, Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";


const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();

  //   function startRegister() {
  //     navigate.push('/authenticate');
  // }

  function startRegister() {
    navigate("/authenticate");     
    
    console.log("button clicked..");

  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to All-aboard !" icon="logo">
        
        <p className={styles.text}>
          {/*children */}
          We're working hard to get All-aboard ready for everyone! While we wrap
          up the finishing youches, we’re adding people gradually to make sure
          nothing breaks :
        </p>

        <div>
          <Button onClick={startRegister} text="Let's Go"></Button>
        </div>

        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to="login"> 
             Sign in 
          </Link> 
        </div>
      </Card>
    </div>
  );
};

export default Home;

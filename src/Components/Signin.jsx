import React from 'react';
import Googlebutton from 'react-google-button';
import {auth} from '../Firebase';
import {GoogleAuthProvider,  signInWithRedirect} from 'firebase/auth';



const style = {
    repper: `flex justify-center `
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth, provider);
}

function Signin() {
  return (
    <div className={style.repper}>
        <Googlebutton onClick={googleSignIn} />
    </div>
  )
}

export default Signin
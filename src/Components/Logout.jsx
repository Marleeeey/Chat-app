import React from 'react';
import {auth} from '../Firebase';


const style = {
    btn:`bg-gray-200 px-4 py-2 hover:bg-gray-100 rounded-md`
}

const LogOut = () => {
    const signOut = () => {
        signOut(auth);
    }
}


function Logout() {
  return (
    <button onClick={() => auth.signOut()} className={style.btn}>
        Log out
    </button>
  )
}

export default Logout
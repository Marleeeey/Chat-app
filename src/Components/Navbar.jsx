import React from 'react';
import {auth} from '../Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Signin from './Signin';
import Logout from './Logout';


const styleNav = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white font-bold text-3xl`
}

function Navbar() {

    const [user] = useAuthState(auth);
    console.log(user);
  return (
    <div className={styleNav.nav}>
        <h1 className={styleNav.heading}>Chat App</h1>
        {user ? <Logout /> : <Signin />}
    </div>
  )
}

export default Navbar;
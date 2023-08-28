import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {auth} from './Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from './Components/Chat';


const Style  = {
  appCountainer: `max-w-[728-px] mx-auto text-center`,
  section: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={Style.appCountainer}>
      <section className={Style.section}>
        {/*                                        N a v b a r                                                */}
        <Navbar />
  
        {/*                                     C h a t    C m p o n e n t s                                  */}
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;

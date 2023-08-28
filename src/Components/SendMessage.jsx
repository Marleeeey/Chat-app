import React, {useState} from 'react';
import {auth, db} from '../Firebase';
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';

const style = {
  form: `h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded-md`,
  btn: `w-[20%] bg-green-500 font-bold rounded-md active:opacity-90`

}

function SendMessage({scroll}) {

  const [send, setSend] = useState('');
  const sendMessage = async (e) => {
    e.preventDefault()
    if (send === '') {
      alert ('You forget to write Your Message');
      return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
      text: send,
      name: displayName,
      uid,
      timestamp: serverTimestamp()
    })
    setSend('');
    scroll.current.scrollIntoView({behavior: 'smooth'});
  }
  return (
      <form className={style.form} onSubmit={sendMessage}>
        <input value={send} onChange={(e) => setSend(e.target.value)} className={style.input} type="text" placeholder='Message'/>
        <button type='sumbit' className={style.btn}>Send</button>
      </form>
  )
}

export default SendMessage;
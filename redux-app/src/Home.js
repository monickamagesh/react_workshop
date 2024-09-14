// src/Home.js
import { useDispatch} from 'react-redux';
import Header from './Header';
import { useState } from 'react';

function Home() {
  const dispatch = useDispatch();
  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [status,setStatus]=useState(true);

  const add = () => {
    dispatch({ type: 'Add' });
  };

  const sub = () => {
    dispatch({ type: 'Sub' });
  };

  const saveMyDetails = () => {
    dispatch({ type: 'saveDetails', data:{"name":name , email:email} }); 
  };


  return (
    <div>
      <Header />
      <h1>Increment or decrement in redux store</h1>
      <input type="button" value="Add" onClick={add} /><br/>
      <input type="button" value="Sub" onClick={sub} />

      <br/><br/><br/>

      <h1>Save name and email to redux store</h1>
      <input type="type" onChange={(e)=>setName(e.target.value)} placeholder='Enter your name'/><br/>
      <input type="type" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email'/><br/>
      <input type="button" onClick={saveMyDetails} value="Submit" />
      <br/>
      {(status) ? <p className='red'>This is paragraph</p> : null}

    </div>
  );
}

export default Home;

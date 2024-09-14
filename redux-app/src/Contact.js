// src/Contact.js
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';

function Contact() {
  //dispatch - Update the actions from redux
  const dispatch = useDispatch();
  //get status of counter from redux
  const counterVal = useSelector((state) => state.counter);


  const add =()=>{
    //set Add as type of action
    dispatch({ type: 'Add' })
  }

  const sub =() =>{
    //set Sub as type of action
    dispatch({ type: 'Sub' })
  }

  return (
    <div>
      <Header />
      <h1>Contact Page</h1>
      <h1>Counter from redux: {counterVal}</h1>
      <input 
        type="button" 
        value="Add" 
        onClick={add} 
      />
      <input 
        type="button" 
        value="Sub" 
        onClick={sub} 
      />
    </div>
  );
}

export default Contact;

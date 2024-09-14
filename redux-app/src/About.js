// src/About.js
import { useSelector } from 'react-redux';
import Header from './Header';

function About() {
  //dispatch - Update the actions from redux
  const counterVal = useSelector((state) => state.counter);
  const counterName = useSelector((state) => state.myDetails);
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <h1>Counter from redux: {counterVal}</h1>
      <br/>
      <h1>Name from redux: {counterName.name}</h1>
      <h1>Email from redux: {counterName.email}</h1>
    </div>
  );
}

export default About;

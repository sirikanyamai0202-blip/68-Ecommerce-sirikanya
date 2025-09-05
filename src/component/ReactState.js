import { useState } from 'react';


const ReactState = () => {
  const [name, setName] = useState('john');
  const [age, setAge] = useState(30);

  const updateInfo = () => {
    setName('Poom');
    setAge(25);
  }
  return (
    <div>
        <h1>Name:{name}</h1>
        <h1>Age: {age}</h1>
        <button onClick={updateInfo}> Update Info</button>
    </div>

  )
  
}
export default ReactState;
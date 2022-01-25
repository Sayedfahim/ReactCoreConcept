import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Users></Users>
      <Component></Component>
      <Component></Component>
      <Component></Component>
    </div>
  );
}
function Users(){
  const [user, setUser] = useState([]);
  useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUser(data))
  }, [])
  return(
    <div className='main'> 
      <h1>Yo yo mama: {user.length}</h1>
      {
        user.map(user => <ComponentUser name={user.name} phone={user.phone}></ComponentUser>)
      }
      </div>
  )
  }
function ComponentUser(props){
  return(
    <div>
        <h1>Name: {props.name}</h1>
        <h3>Phone: {props.phone}</h3>
    </div>
  )
  }


function Component(){
  const [click,setClick] = useState(0);

  const handleAddClick = () => {
    const newClick = click + 1;
    setClick(newClick);
  }
  const handleAddClick1 = () => {
    const newClick = click - 1;
    setClick(newClick);
  }
  
  
  return(
    <div className='main'> 
      <h1>Yo yo mama</h1>
      <h3>Clicked Me: {click} </h3>
      <p>Let's test something</p>
      <button onClick={handleAddClick}>Click Up</button>
      <button onClick={handleAddClick1}>Click Down</button>
    </div>
  )
}

export default App;


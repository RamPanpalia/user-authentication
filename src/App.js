// import React,{useState} from 'react'
import './App.css';
import UserAuthentication from './UserAuthentication'
import Dashboard from './Dashboard'

function App() {
  // const [loginStatus,setLoginStatus]=useState(false);
  return (
    <div className="App">
      <UserAuthentication/>
      <Dashboard/>
    </div>
  );
}

export default App;

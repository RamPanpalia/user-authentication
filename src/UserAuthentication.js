import React, { useState } from "react";
import './UserAuthentication.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from "axios";

const UserAuthentication = () => {
  const url="https://sutt-front-task-one.herokuapp.com/api/v1/auth/register";
  const urlLogin="https://sutt-front-task-one.herokuapp.com/api/v1/auth/login";
  // const urlProfile="https://sutt-front-task-one.herokuapp.com/api/v1/auth/user";
  const [name,setName]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [data,setData]=useState({
    name:"",
    username:"",
    email:"",
    password:""
  })
  function handleLogin(){
    const newData={
      username:`${username}`,
      password:`${password}`
    }
    setData(newData)
    // console.log(data)
    Axios.post(urlLogin,{
      username:data.username,
      password:data.password
    })
    .then(res=>{
      // if(!res.data.responses.accessToken){
      //   // alert(res.data.response.data)
      //   alert("It came here")
      // }
      console.log(res.data.response.data.success)
      // console.log(res.data.responses.accessToken)
    })
  }
  function handleRegister(){
    const newData={
      name:name,
      username:username,
      email:email,
      password:password
    }
    setData(newData)
    // console.log(data)
    // console.log("Its working")
    Axios.post(url,{
      name:data.name,
      username:data.username,
      email:data.email,
      password:data.password
    })
    .then(res=>{
      console.log(res.data.responses.accessToken)
    })
    
  }
    const styleA={
        margin:'8px',
        lineHeight: 1.5,
        backgroundColor: '#441c74',
        padding:'10px 15px',
        width:'fit-content',
    }
  const [hasAccount,setHasAccount]=useState(false);
  const toggleIt=()=>{
    setHasAccount(!hasAccount);
  }
  return (
    <div className='authenticate-main'>
        <div className='box box1'> <h1>{hasAccount===true?"Login":"SignUp"}</h1></div>
        <div className='box box2'>
        <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          {hasAccount?
          <></>:
          <TextField 
          error={""} 
          id="outlined-basic" 
          className="" 
          label="Name" 
          variant="outlined" 
          onChange={(e)=>setName(e.target.value)}
          />
          }

          <TextField 
          id="outlined-basic" 
          className="Username" 
          label="Username" 
          variant="outlined" 
          onChange={(e)=>setUsername(e.target.value)}
          />

          {hasAccount?
          <></>:
          <TextField 
          id="outlined-basic" 
          className="Email" 
          label="Email" 
          variant="outlined" 
          onChange={(e)=>setEmail(e.target.value)}
          />
          }

          <TextField 
          id="outlined-basic" 
          className="Password" 
          label="Password" 
          variant="outlined" 
          onChange={(e)=>setPassword(e.target.value)}
          />

          {hasAccount?
          <Button style={styleA} variant="contained" onClick={handleLogin}>Login</Button>
          :
          <Button style={styleA} variant="contained" onClick={handleRegister}>Register</Button>
          }
        
        </Box>
        <p className="toggleText">
            {hasAccount?
            <>Don't Have a Account? <span className='toggler' onClick={toggleIt}>Register</span> </>
            :
            <>Already have a Account? <span className='toggler' onClick={toggleIt}>Login</span> </>}
            
        </p>
        </div>
    </div>
  )
}

export default UserAuthentication


//asasas
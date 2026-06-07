
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
        import { useState } from 'react';
function Login() {

    let [uname, setUname] = useState("");
    let [password, setPassword] = useState("");


    const navigate=useNavigate();

  let showNotification=()=>{

   toast.success("submitted");

   setTimeout(()=>{
    navigate("/");
   },2000);

  }




    let handleSubmit=(e)=>{
e.preventDefault();
console.log({uname,password});
       
    }
  return (
    <div>
      <h1 className='flex justify-center align-text-center'>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div className=' mt-3 items-start '>
            <label htmlFor="username"className='m-1'>Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Name" value={uname} onChange={(e)=>setUname(e.target.value)} />
        </div>
        <div className='mt-3 items-start '>
            <label htmlFor="username" className='m-1'>Password:</label>
            <input type="password" id="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <ToastContainer/>
<div className="flex justify-center items-center w-full">
  <button
    onClick={showNotification}
    type="submit"
    className="bg-blue-500 rounded-2xl px-6 py-2 text-white"
  >
    Submit
  </button>
</div>

      </form>
    </div>
  );
}export default Login;
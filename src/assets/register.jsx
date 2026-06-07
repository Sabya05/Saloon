import React,{useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {



  
      let [entername, setEntername] = useState("");
      let [yourpassword, setYourpassword] = useState("");
  
  
      const navigate=useNavigate();
  
    let showNotification=()=>{
  
     toast.success("submitted");
  
     setTimeout(()=>{
      navigate("/");
     },2000);
  
    }
  
  
  
  
      let handleSubmit=(e)=>{
  e.preventDefault();
  console.log("entername,yourpassword");
         
      }


  return (
    <div>
      

<h1 className='flex justify-center'>Register Now</h1>
      <form onSubmit={handleSubmit}>
        <div className='mt-3 items-start '>
            <label htmlFor="username"className='m-1'>Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your Name" value={entername} onChange={(e)=>setEntername(e.target.value)} />
        </div>
        <div className='mt-3 items-start '>
            <label htmlFor="username" className='m-1'>Password:</label>
            <input type="password" id="password" placeholder="password" value={yourpassword} onChange={(e)=>setYourpassword(e.target.value)} />
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
}

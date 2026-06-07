<button className="lg:hidden ml-auto mr-5 text-3xl" onClick={()=>{ setShowMenu(!showMenu) }}>&#9776;</button>
           {showMenu?
            <ul className="flex  text-center lg:justify-end">
            <li className="mx-10 hover:text-[cyan]">Home</li>
            <li className="mx-10 hover:text-[cyan]">About</li>
            <li className="mx-10 hover:text-[cyan]">Contacts</li>
            <li className="mx-10 hover:text-[cyan]">Services</li>
            </ul>
        : null}




        import React from 'react';
        import { useState } from 'react';
        export default function Login() {
        
            let [uname, setUname] = useState("");
            let [password, setPassword] = useState("");
        
        
            let handleSubmit=(e)=>{
        e.preventDefault();
        console.log({uname,password});
               
            }
          return (
            <div>
              <h1 className='mb-4'>Login Page</h1>
              <form onSubmit={handleSubmit}>
                <div className=' items-start '>
                    <label htmlFor="username"className='m-1'>Username:</label>
                    <input type="text" id="username" name="username" placeholder="Enter your Name" value={uname} onChange={(e)=>setUname(e.target.value)} />
                </div>
                <div className='mx-3 m-3 p-3 items-start '>
                    <label htmlFor="username" className='m-1'>Password:</label>
                    <input type="password" id="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className='justify-center align-items-center '>
                <button >submit</button>
                </div>
              </form>
            </div>
          );
        }
        
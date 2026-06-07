import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./assets/login";   

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import Middle from "./middle.jsx";

function Home(props){

var titleref=useRef(null);
var first=useRef(null);
var second=useRef(null);
var third=useRef(null);
var fourth =useRef(null);
var fifth=useRef(null);
var sixth=useRef(null);
var seventh=useRef(null);
    let [showMenu, setShowMenu] = useState(false);
    let [themes, setThemes] = useState(false);
let[uname,setUserName]=useState(false);


useGSAP(() => {
const el = titleref.current;
var tl=gsap.timeline();

el.addEventListener("mouseenter",()=>{
  gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
})
  
el.addEventListener("mouseleave",()=>{
   gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
})
  

tl.set(titleref.current, {
    opacity: 0,
    y: -80
  });

  // 2️⃣ Animate IN
  tl.to(titleref.current, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    delay: 0.2,
    ease: "elastic.out(1, 0.5)"
  });
    
tl.set(first.current,{
  y:-50,
  opacity:0,
})
tl.to(first.current,{
  y:0,
  opacity:1,
  duration:0.2,
  ease:"power.out"
})
tl.set(second.current,{
  y:-50,
  opacity:0,
})
tl.to(second.current,{
  y:0,
  opacity:1,
  duration:0.2,
  ease:"power.out"
})
tl.set(third.current,{
  y:-50,
  opacity:0,
})
tl.to(third.current,{
  y:0,
  opacity:1,
  duration:0.2,
  ease:"power.out"
})
tl.set(fourth.current,{
  y:-50,
  opacity:0,
})
tl.to(fourth.current,{
  y:0,
  opacity:1,
  duration:0.2,
  ease:"power.out"
})
tl.set(fifth.current,{
  y:-50,
  opacity:0,
})
tl.to(fifth.current,{
  y:0,
  opacity:1,
  duration:0.2,
  ease:"power.out"
})
tl.set(sixth.current,{
  y:-50,
  opacity:0,
})
tl.to(sixth.current,{
  y:0,
  opacity:1,
  duration:0.2,
  ease:"power.out"
})
tl.set(seventh.current,{
  y:-50,
  opacity:0,
})
tl.to(seventh.current,{
  y:0,
  opacity:1,
  duration:0.2,
  ease:"power.out"
})
  

  // 1️⃣ Force initial hidden state BEFORE animation
  
});


    return(<> 
    <div className={` transition-colors duration-[0.5s] ${themes ? 'bg-white text-black' : 'bg-black text-white'}  h-auto  w-full overflow-x-hidden top-0 left-0 right-0 z-10  `}>
        <nav className={`transition-colors duration-500  ${themes ? 'bg-white text-black' : 'bg-black text-white'} flex  items-center  h-auto fixed w-full top-0 left-0 right-0 z-10 shadow-lg`}>
        <h1 ref={titleref} className="text-6xl ml-7 opacity-0 font-bold basis-[55%] md:text-left mx-2 font-stretch-110% text-bl text-[#5305ee] hover:transition-transform hover:scale-105 duration-300 cursor-pointer">
  {props.title}
</h1>

       
        <div className=" basis-[45%] mb-6 flex justify-end items-center flex-row ">
            <button className="lg:hidden   mr-6 text-4xl" onClick={()=>{ setShowMenu(!showMenu) }}>&#9776;</button>

            <ul ref={first} className="items-center px-5  sm:hidden hidden lg:flex text-center  text-2xl">
            <li ref={second} className="mx-10  opacity-0 hover:text-[cyan]">Home</li>
            <li ref={third} className="mx-10 opacity-0 hover:text-[cyan]">About</li>
            <li ref={fourth} className="mx-10 opacity-0 hover:text-[cyan]">Contacts</li>
            <li ref={fifth} className="mx-10 opacity-0 hover:text-[cyan]"><Link to="/services">Services</Link></li>
            <li ref={sixth} className="mx-10 opacity-0 hover:text-[cyan]"><button onClick={()=>setThemes(!themes)}>{themes?"☀️":"🌙"}</button></li>
   <li ref={seventh} className="border-[5] opacity-0 rounded-2xl border-white px-3 py-1 hover:bg-white hover:text-black cursor-pointer"> <Link to="/account">👤</Link></li> 
           </ul>

         
        </div>
  
        </nav>
<ul className={`flex flex-col text-center lg:hidden text-3xl ${themes ? 'bg-white text-black' : 'bg-black text-white'}
      transition-all duration-[0.5s] ease-in-out md
       mt-21
      ${showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0 "}
    `}
  >
    <li className="my-5 hover:text-cyan-400 cursor-pointer">Home</li>
    <li className="my-5 hover:text-cyan-400 cursor-pointer">About</li>
    <li className="my-5 hover:text-cyan-400 cursor-pointer">Contacts</li>
    <li className="my-5 hover:text-cyan-400 cursor-pointer"><Link to="/services">Services</Link></li>
    <li className="my-5 hover:text-cyan-400 cursor-pointer" onClick={()=>setThemes(!themes)} >{themes?"🌙Dark":"☀️Light"}</li>
    <li className="border-[5] rounded-2xl border-white px-3 py-1 hover:bg-white hover:text-black cursor-pointer"> <Link to="/login">👤</Link></li> 
 
  </ul>

<main className="pt-10">
    <Middle themes={themes} />


    
  </main>



       


        


<footer className={`h-16 w-full flex items-center justify-center  transition-colors duration-500 ${themes? 'bg-black text-white' : 'bg-white text-black'}`}>
  <p>© 2024 Saloon. All rights reserved.</p>
  <a href="/privacy" className="ml-4 underline">Privacy Policy</a>
  

        
        
   
</footer>
</div>
        </>
    )
}export default Home;        
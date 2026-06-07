import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap';
import { useRef } from 'react';

function Middle({themes}){
var titleRef= useRef(null)
var UserRef=useRef(null)
var card1=useRef(null);
var card2=useRef(null);
var card3=useRef(null);
var sentence=useRef(null);
var book_button=useRef(null);
var button=gsap.timeline();
         useGSAP(() => {
            var tl=gsap.timeline()
  tl.set(
    titleRef.current,
    {
      opacity:0,
      scale:1,
      
      
    }
  );
tl.to(titleRef.current,{
    opacity:1,
    Scale:1,
    duration:2,
      
  delay:2
})
 
tl.to(UserRef.current,{
    opacity:1,
    Scale:1,
    duration:1.5,
      
     
})
gsap.fromTo(card1.current,
    {
        y:50,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:1,delay:3,
        ease:"power2.out"
    }   )

gsap.fromTo(card2.current,
    {
        y:50,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:1,delay:3,
        ease:"power2.out"
    }   )

gsap.fromTo(card3.current,
    {
        y:50,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:1,delay:3,
        ease:"power2.out"
    }   )

gsap.fromTo(sentence.current,
    {
        y:50,
        opacity:0,
    },
    {
        y:0,
        opacity:1,
        duration:1,delay:2.5,
        ease:"power2.out"
    }   )

    button.fromTo(book_button.current,
        {
            y:-100,
            opacity:0,
        },
        {   
            y:0,
            opacity:1,
            duration:1,delay:4,
            ease:"bounce.out"
        }   )
   
    

});



    return(
        <>


  <div className={`min-h-screen transition-colors duration-500 w-100vw
${themes ? 'bg-white text-black' : 'bg-black text-white'}`}>



<div className="mt-5 pt-3 py-0 px-0  w-full ">
  <div className="mt-10 pt-3 justify-center items-center flex flex-col">
    <h2 ref={titleRef} className="text-4xl font-bold text-center mb-4">Welcome to Our Saloon </h2>
    <h2 ref={UserRef} className="text-4xl font-bold text-center mb-4 opacity-0">Username</h2>
    <p ref={sentence} className="text-lg text-center">Experience the finest grooming services in a relaxing and stylish environment. Our expert stylists are dedicated to providing you with personalized care and attention to help you look and feel your best.</p>
</div>
</div>

<div className="">
    <h1 className="text-3xl font-bold text-center mt-10 mb-5">Book Your Appointment Now</h1>
    <button ref={book_button} className="bg-blue-500 text-white px-6 py-2 rounded-full mx-auto flex items-center hover:bg-blue-600 transition-colors duration-300">Book now</button>
</div>


       <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 px-4 md:px-6 lg:px-8 mt-5">


        <div ref={card1} >
<img src="https://tse1.mm.bing.net/th/id/OIP.YCkCIZ1gGhebPnkOmiOU8gHaE8?pid=Api&P=0&h=180 " alt="Saloon Image" className="w-full h-auto rounded-lg shadow-lg"/> 
 <h2 className="text-center mt-2 text-xl font-semibold">Skin care </h2>
        </div>

        <div ref={card2} >
<img src="https://tse4.mm.bing.net/th/id/OIP.WuoYd5fAw_d5XaQgRdGHSAHaE8?pid=Api&P=0&h=180 " alt="Saloon Image" className="w-full h-auto rounded-lg shadow-lg"/> 
  <h2 className="text-center mt-2 text-xl font-semibold">Hair Style</h2>
     
        </div >



        <div ref={card3} className="items-center justify-center flex flex-col">
<img src="https://tse2.mm.bing.net/th/id/OIP.yl-dv74Swc2LPRN70B-G1gHaEN?pid=Api&P=0&h=180" alt="Saloon Image" className="w-full h-auto rounded-lg shadow-lg"/>  
<h2 className="text-center mt-2 text-xl font-semibold">Beard Types</h2>
        </div>
        

              </div>


</div>

        </>
    )

}export default Middle;


import { Tabs } from '../reglog';
import { useState } from 'react';


function Account() {





let [activetabs, setActivetabs]=useState(0);
let [activecontent, setActivecontent]=useState(Tabs[0]);






  return (<>




    <div className="flex items-center justify-center min-h-screen bg-gray-100">   
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">


  <ul className='flex justify-center mb-6'>
  {
Tabs.map((item,index)=>{
    return(
      <li key={index} className="inline-block mx-4">
        <button className={`${activetabs===index?'border-b-4 border-blue-500':''} px-3 py-2 text-xl font-semibold hover:text-blue-500`} onClick={()=>{
            setActivetabs(index);
            setActivecontent(Tabs[index]);
        }}>
          {item.title}
        </button>
      </li>
    )                                                   
})}
</ul>
{
activecontent!==undefined?
<p>{activecontent.description()}</p>
:""
}


      </div>
              </div> 
               </>
  );
}

 




export default Account
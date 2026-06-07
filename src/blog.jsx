import { blogs } from "./assets/blogs";

import { Link } from "react-router-dom";
function Blogs(){  


let allblogs=blogs.map((v,i)=>{

    return(
<>

        <div className="border-2  border-gray-300 rounded-lg p-4 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300" >
        <div key={i}>
            <p>
                {v.title}
                {v.body}
               
            </p>
            
                  <button className="rounded border-blue-600 hover:animate-ping"><Link to={`/blogs/${v.id}`}>Read more</Link></button>
       
        </div></div>
        

</>
      
    )

})
  

return(
<>
<h1>Blog page</h1>

{allblogs}
</>

)
}export default Blogs;
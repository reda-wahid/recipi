import React from 'react'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AllFood({data}) {
  AOS.init();
  return (
    <>
    <section>
     <div className="container m-auto p-10 w-full">
     <div className="w-full grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 min-sm gap-10 text-white ">
{
data?.map(item=>{ 
    return(
      <div key={item.id} data-aos="fade-up" data-aos-duration="3000">
  <div className="grid  content-between border-2 shadow-lg  p-4 bg-neutral-50 hover:bg-neutral-200 rounded-md h-80" >
         <div className='w-full text-center grid place-items-center '>
         <Link to={`/recipi/details/id/${item.id}`}>
         <img
            src={item.image}
            alt={item.title}
            className="w-36 h-36 contrast-125 border-solid border-4  border-l-rose-950 rounded-full brightness-50 hover:brightness-100 hover:shadow-md shadow-2xl"
          />
         </Link>
         </div>

          <div className="w-full background-text content-center  ">
            <h1 className="text-4xl text-orange-400  max-sm:w-full">
              {item.type}
            </h1>
            <p className=" max-sm:w-full ">{item.title}</p>
          </div>
          <Link to={`/recipi/details/id/${item.id}`}>
          <button className='w-full text-white bg-orange-200 hover:bg-orange-400 p-1 text-2l mt-4 rounded-sm'>            
            Go Detailes
          </button>
          </Link>
    </div>
    </div>)})
}
     </div>
     </div>
   </section>

        
    </>
  
 
  )
}

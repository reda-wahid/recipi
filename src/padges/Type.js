import React from 'react';
import { useParams,Link } from "react-router-dom";
import { allData } from "../data";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Type() {
  AOS.init();
    var { useid } = useParams();
    const iduse = ++useid - 1;
    
    const data = allData.find(item => item.id === iduse);
  

  return (
    <>
      <section>
      <div className=" m-auto w-full grid xl:grid-cols-3 md:grid-cols-2  max-md:grid-cols-1 gap-6  container mt-8 mb-8">
{data.data.map((item)=>{
   return (

    
      
        <div className="grid justify-center border-2 shadow-lg w-full p-4 bg-neutral-50 hover:bg-neutral-200 rounded-md" data-aos="fade-up" data-aos-duration="3000">
         <div className='w-full text-center grid place-items-center '>
         <Link to={`/recipi/slidedetails/id/${item.id}/${item.useid}`}>
         <img
            src={item.image}
            alt={item.title}
            className="w-48 h-48 contrast-125 border-solid border-4  border-l-rose-950 rounded-full brightness-50 hover:brightness-100 hover:shadow-md shadow-2xl"
          />
         </Link>
         </div>

          <div className="background-text content-center  ">
            <h1 className="text-4xl text-orange-400  max-sm:w-full">
              {item.type}
            </h1>
            <p className=" max-sm:w-full ">{item.title}</p>
          </div>
          <Link to={`/recipi/slidedetails/id/${item.id}/${item.useid}`}>
          <button className='w-full text-white bg-orange-200 hover:bg-orange-400 p-1 text-2l mt-4 rounded-sm'>            
            Go Detailes
          </button>
          </Link>
    </div>
)
})}
</div>
      
      </section>
    </>
  )
}

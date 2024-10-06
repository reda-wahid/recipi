import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allData } from "../data";
import { useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";

function Details() {
  const navigate = useNavigate();
  var { userId } = useParams();
  var { useid } = useParams();
  var { id } = useParams();
  const idin = ++id - 1;
  const idout = ++userId - 1;
  const iduse = ++useid - 1;

  const { meal } = useSelector((state) => state.recipi);
  const dataApi = meal.find((item) => {
    return item.id === idout;
  });  


  const dd = allData.find(item => item.id === iduse);
  const dat = dd?.data?.find((item) => {
    return item.id === idin;
  });

    const data = dat?.detailes?.find((item) => {
        return item.id === idout;
    });



console.log(meal,"meal");

if (dataApi === null) return null;
  const healthLable = [
    "sugar conscious",
    "gluten free",
    "wheat free",
    "egg free",
    "peanut free",
    "soyfree",
    "keto friendly",
    "egg free",
    "wheat free",
  ];
  return (
    <>
      {
       <div className="container m-auto ">
       <button onClick={() => navigate(-1)} className="flex text-red-500">
         <IoMdArrowRoundBack className="text-xl" />
         Go back
       </button>
       <h1 className="text-5xl text-orange-300">Recipes</h1>
       <div className="background min-[1040px]:flex justify-between   content-between gap-6 m-10 text-white">
         <img
           src={data?.image || dataApi?.image}
           alt={data || dataApi?.title}
           className="w-96 h-80 min-[640px]:w-full max-[1039px]:w-full"
         />
         <div className="grid content-between">
           <h1 className="text-2xl text-orange-300">
             {data?.type && dataApi?.type}
           </h1>
           <p className="w-full">{data?.title || dataApi?.title}</p>
           <div className="">
             <p className="mt-4 text-orange-300 w-full">Health label:</p>
             <div className="flex gap-2 flex-wrap">
               {healthLable.map((item) => {
                 return (
                   <span className="bg-orange-300 rounded-md p-1 cursor-pointer">
                     {item}
                   </span>
                 );
               })}
             </div>
           </div>
           <div>
             <h2 className="text-2xl text-orange-300 mt-4 w-full">
               Image Different:
             </h2>
             <div className="flex gap-5">
               <img
                 src={data?.image || dataApi?.image}
                 alt={data || dataApi?.title}
                 className="w-20"
               />
               <img
                 src={data?.image || dataApi?.image}
                 alt={data || dataApi?.title}
                 className="w-20"
               />
               <img
                 src={data?.image || dataApi?.image}
                 alt={data || dataApi?.title}
                 className="w-20"
               />
             </div>
           </div>
         </div>
       </div>
     </div>
      }
    </>
  );
}
export default Details;

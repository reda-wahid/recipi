import './App.css';
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchrecipi } from "./redux/chickenSlice";
import Home from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import  Details  from "./padges/details";
import  Notfound  from "./padges/notfound";
import AllFood from './padges/AllFood';
import TypeDiches from './padges/type-diches';
import SlideDetails from './padges/SlideDetails';
import Type from './padges/Type';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const {meal,isloading,error} = useSelector((state)=> state.recipi);

const dispatch = useDispatch();

useEffect(()=>
   {
    dispatch(fetchrecipi())
    console.log(dispatch(fetchrecipi()));
    
   },
[dispatch]);


const [data,setData]= useState(meal);

const handledata = (e)=>{
  
  setData(meal.filter(i=>i.title.toLowerCase().includes(e.target.value))) 
 
};



  return (

<>
<Header handledata={handledata}/>
<ToastContainer />
<Routes>
  <Route path="/" exact element={<Home />} />
  <Route path="recipi/type/:useid" element={<Type />} />
  <Route path="/recipi/allfood" element={<AllFood data={data} isloading={isloading} error={error}/>} />
  <Route path="*" element={<Notfound />} />
  <Route path="recipi/slidedetails/id/:userId/:useid" element={<TypeDiches dispatch={dispatch}/>} />
  <Route path="recipi/slidedetails/id/:userId/:useid" element={<SlideDetails/>} />
  <Route path="recipi/details/id/:userId/:useid/:id" element={<Details/>} />
  <Route path="recipi/details/id/:userId" element={<Details/>} />
</Routes>
<Footer/>
  
</>

  );
}

export default App;

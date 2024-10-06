import React from 'react'
import SliderHome from '../SliderHome/SliderHome';
import Categrious from '../Categrious/Categrious';
import Diches from '../Diches/Diches';
import Meal from '../Meal/Meal';
import Checken from '../checken/checken';


export default function Home(props) {
  
  return (
    <>
    
      <SliderHome/>
      <Categrious />
      <Checken dispatch={props.dispatch}/>
      <Diches/>
      <Meal/>
    </>
  )
}

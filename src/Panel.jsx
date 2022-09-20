import React from 'react'
import { useState, useContext } from 'react';
import './Panel.scss'
import { AiFillExperiment, AiOutlineExpandAlt } from "react-icons/ai";
import { maximizeContext } from './App';


const Panel = ({title}) => {
 const isMaxmized = useContext(maximizeContext)
  return (
    <div className='panel'>
     <AiFillExperiment />
     <p>{title}</p>
     <AiOutlineExpandAlt className='expand'  />
    </div>
  )
}

export default Panel
import React from 'react'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle, } from 'react-icons/io'

export default function ScrollButtons({scroll}) {


  return (
    <div className="d-none d-lg-flex" style={{position: 'absolute', top:'40%', width: '100%'}}>
   <div className="d-flex justify-content-between align-items-center w-100" >
    <IoMdArrowDropleftCircle className="text-secondary" size='1.9rem' style={{cursor: 'pointer'}}
    onClick={() => scroll('left')}/>
    <IoMdArrowDroprightCircle className="text-secondary" size='1.9rem' style={{cursor: 'pointer'}}
    onClick={() => scroll('right')}
    />
   </div>
  </div>
  )
}

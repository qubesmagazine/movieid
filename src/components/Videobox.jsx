import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle, } from 'react-icons/io'
import ReactPlayer from 'react-player'

export default function Videobox({setShowModal, results, index, setIndex}) {
   const resultSlides = results.map((u) => u.key )
   const prevSlide = () => {
setIndex(index === 1 ? results.length : (prev) => prev - 1)
   }
   const nextSlide = () => {
    setIndex(index === results.length ? 1 : (prev) => prev + 1)
       }

  return (
    <div className='modalbox'>
   <div className='backdrop'/>
   <div className='text-white bg-transparent p-3 rounded-3 contentbox'>
       <div className='d-flex justify-content-end'>
        <AiOutlineClose size='1.8rem'className='text-white mt-2'  
        style={{cursor: 'pointer'}}
        onClick={() => setShowModal(false)}
        
        />
       </div>
       <div className='position-relative mt-3'>
<div className='d-flex w-100 justify-content-between position-absolute top-50'>
<IoMdArrowDropleftCircle 
size='2rem' 
style={{cursor: 'pointer'}}
onClick={prevSlide}

/>
<IoMdArrowDroprightCircle 
size='2rem' 
style={{cursor: 'pointer'}}
onClick={nextSlide}
/>
</div>
<div className='d-flex justify-content-center'>
    <ReactPlayer url={`https://www.youtube.com/watch?v=${resultSlides[index]}`} controls className='reactplayer'/>

</div>

       </div>
   </div>
    </div>
  )
}

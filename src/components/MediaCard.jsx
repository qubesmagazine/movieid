import React from 'react'
import {Link} from 'react-router-dom'
import { Image } from 'react-bootstrap'
import { BsStarFill } from 'react-icons/bs'

export default function Mediacard({id, poster_path, title, release_date, vote_average}) {
  return (
    <div className='mediaCard'>
        <div className='cast'>
            <Link to={`/movie/${id}`}>
            <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className='img-fluid'
            alt={title}
            title={title}
            loading='lazy'/>
            </Link>
            <div className='px-1 mt-2'>
              <Link to={`/movie/${id}`}>
              <p className='text-white small fw-bold mb-0'>{title}</p>
              </Link>
              <div className='d-flex justify-content-between align-items-center'>
                <p className='text-secondary small '>{release_date?.slice(0,4)}</p>
                <div className='d-flex gap-1'>
                   <BsStarFill className='text-warning' size='1rem'/>
                   <p className='small text-secondary'>{vote_average.toFixed(2)}</p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
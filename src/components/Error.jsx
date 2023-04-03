import React from 'react'
import { Button } from 'react-bootstrap'

export default function Error() {
  return (
    <div className='px-4 d-flex flex-column justify-content-center align-items-center text-white mt-5 vh-100'>
        <h1 className='fs-4 mb-6'>Oops! an error occured while fetching data</h1>
        <Button className='rounded-md bg-warning text-dark fw-bold border-0 p-2' onClick={() => window.location.replace('/')} style={{width:'150px'}}>Go Home</Button>
    </div>
  )
}
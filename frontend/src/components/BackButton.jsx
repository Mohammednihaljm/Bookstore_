import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackButton = ({destination='/'}) => {
  return (
    <div className='flex'>
        <Link to={destination} className='bg-sky-800 text-white px-4 px-1 rounde-lg w-fit'>
            <BsArrowLeft className='text-2xl'/>


        </Link>


    </div>
  )
}

export default BackButton
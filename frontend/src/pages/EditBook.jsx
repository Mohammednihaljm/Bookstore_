import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'

const EditBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const {id}=useParams()
  const navigate=useNavigate()

  useEffect(() => {
    setLoading(true)
    axios
    .get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
       setTitle(response.data.title)
       setAuthor(response.data.author)
       setPublishYear(response.data.publishYear)
    }).catch((error)=>{
      setLoading(false)
      alert("error")
      console.log(error);

    })
    
  
   
  }, [])
  
  const hadelEditBook=()=>{
    const data ={
      title,
      author,
      publishYear,
    };
    setLoading(true)
    axios
    .put(`http://localhost:5555/books/${id}`,data)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      alert('an error')
      console.log(error);

    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>
       {loading ? "" : <Spinner/>}
       <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 my-auto">
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Title:</label>
          <input className='border-2 border-gray-500 w-full' type='text' value={title} onChange={(e)=>setTitle(e.target.value)}/>

        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Author:</label>
          <input className='border-2 border-gray-500 w-full' type='text' value={author} onChange={(e)=>setAuthor(e.target.value)}/>

        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Publish Year:</label>
          <input className='border-2 border-gray-500 w-full' type='text' value={publishYear} onChange={(e)=>setPublishYear(e.target.value)}/>

        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={hadelEditBook}>save</button>
       </div>
    </div>
  )
}

export default EditBook
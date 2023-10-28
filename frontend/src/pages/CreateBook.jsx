import React, { useState } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
const CreateBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [publishYear, setPublishYear] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()
  const {enqueueSnackbar}=useSnackbar()

  const hadelSaveBtton=()=>{
    const data ={
      title,
      author,
      publishYear,
    };
    setLoading(true)
    axios
    .post("http://localhost:5555/books",data)
    .then(()=>{
      setLoading(false)
      enqueueSnackbar('book created suuceesfully',{variant:'success'})
      navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
      // alert('an error')
      enqueueSnackbar('error',{variant:'error'})
      console.log(error);

    })
  }
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Create Book</h1>
       {loading ? <Spinner/>: ""}
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
        <button className='p-2 bg-sky-300 m-8' onClick={hadelSaveBtton}>save</button>
       </div>
    </div>
  )
}

export default CreateBook
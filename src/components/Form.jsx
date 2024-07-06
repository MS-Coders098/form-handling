import React, { useState } from 'react'

function Form(prop) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [image, setImage] = useState();
    const [text, setText] = useState()

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        prop.formData(name, email, image, text)
        setName('');
        setEmail('');
        setImage('');
        setText('');
    }


  return (
    <div className='mt-10 flex gap-10 justify-center'>
        <form className='flex gap-10' onSubmit={handleFormSubmit}>
            <input required className='rounded-md px-2 text-base font-semibold outline-none' onChange={(e)=>{setName(e.target.value)}} type="text" placeholder ='Name' value={name} />
            <input required className='rounded-md px-2 text-base font-semibold outline-none' onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder ='Email' value={email} />
            <input className='rounded-md px-2 text-base font-semibold outline-none' onChange={(e)=>{setImage(e.target.value)}} type="text" placeholder ='Image' value={image} />
            <textarea required className='w-[20vw] h-9 rounded-md text-base font-semibold outline-none px-2' onChange={(e)=>{setText(e.target.value)}} placeholder='Enter Text' value={text} ></textarea>
            <input className='bg-blue-500 py-2 px-1 rounded-lg' type="submit"  value="Post Card" />
        </form>
    </div>
  )
}

export default Form

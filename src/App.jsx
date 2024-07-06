import React, { useState } from 'react'
import Cards from './components/Cards'
import Form from './components/Form'

const App = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (name, email, image, text) => {
    const newUser = {
      name: name,
      email: email,
      image: image,
      text: text
    }
    setUsers(prevUsers => [...prevUsers, newUser]);
  }

  const handleDelete = (id)=>{
    setUsers(()=>{
      return users.filter((item, index) => {
        return index!=id
      })
    })
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center '>
      <div className="mx-auto w-[70%]">
        <Cards handleDelete={handleDelete} users={users} />
        <Form formData={handleFormSubmit} />
      </div>
    </div>
  )
}

export default App
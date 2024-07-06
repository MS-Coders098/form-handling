import React from 'react'
import Card from './Card'

function Cards(prop) {
  return (
    <div className='w-full  p-4 max-h-96 flex justify-center gap-4 flex-wrap overflow-auto'>
      {prop.users.map((item, index) => {
        return (
          <>
            <Card handleDelete={prop.handleDelete} id={index} user={item} key={index} />
          </>
        )
      })}
    </div>
  )
}

export default Cards

import React from 'react'

function Card(prop) {

    return (
        <>
            <div className='w-44 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
                <div className="image w-[55px] h-[55px] rounded-full bg-zinc-200 overflow-hidden">
                    <img className='w-full h-full object-cover ' src={prop.user.image} alt="" />
                </div>
                <h1 className='mt-1 text-center font-semibold'>{prop.user.name}</h1>
                <h4 className='text-xs opacity-40 '>{prop.user.email}</h4>
                <p className='mt-2 text-center text-xs leading-none tracking-tight'>{prop.user.text}</p>
                <button className='px-2 py-1 rounded-md font-semibold text-white bg-red-600 mt-2 text-sm' onClick={() => prop.handleDelete(prop.id)}>Remove it</button>
            </div>
        </>
    )
}

export default Card

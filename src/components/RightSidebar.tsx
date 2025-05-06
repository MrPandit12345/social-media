"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import News from './News';

function RightSideBar(){
    const router = useRouter()
    const [input,setInput] = useState('')
    function handleSubmit(ev:React.FormEvent) : void{
        ev.preventDefault()
        if(!input.trim()) return
        router.push(`/search/${input}`);
    }
    const handleChange =(e:React.ChangeEvent<HTMLInputElement> )=>{
        setInput(e.target.value)
    }
  return (
    <>
     <div className='sticky  top-0 bg-white py-2'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search" value={input} onChange={handleChange}
            className='bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2 mb-8'
            />
        </form>
        <News/>
     </div>
    </>
  )
}

export default RightSideBar

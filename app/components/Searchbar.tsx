'use client'

import React, { FormEvent, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useRouter } from 'next/navigation'
import Link from 'next/link';


type Props = {}


const Searchbar = (props: Props) => {
    const [search,setSearch] = useState<string>(location.pathname.replace('/',''))
    const router = useRouter()
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/${search}/`)
    }
    return (
    <div className=' px-3 py-2 flex justify-between text-black bg-gray-100 container mx-auto mt-4 rounded'>
        <div>
            <Link href='/' className=' font-bold text-lg md:text-xl font-mono'>Wiki Media</Link>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)} className='flex items-center shadow pr-1 bg-white'>
            <input placeholder='search' type="search" value={search} onChange={(e)=>setSearch(e.target.value)} className=' px-1 py-2.5'/>
            <button type="submit" className='p-1'>
            <CiSearch  size={24}/>
            </button>
        </form>
    </div>
  )
}

export default Searchbar
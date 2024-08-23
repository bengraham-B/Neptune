import React from 'react'

export default function InputField({ label, value, onChange, type = "text" }) {
  return (

    <div className='w-[22.5%]'>
        <label className="block text-black text-lg mb-1">{label}</label>
        <input 
            onChange={(e) => onChange(e.target.value)} 
            value={value} 
            className="shadow appearance-none border border-blue-600 bg-inherit rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"  
            type={type} 
        />
    </div>

  )
}

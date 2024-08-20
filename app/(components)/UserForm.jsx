"use client"
import { useRouter } from "next/navigation"
import React, {useState} from "react"

export default function UserForm() {
    const router = useRouter()
    const [formData, setFormData] = useState({})
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrorMessage("")
        const res = await fetch("/api/Users", {
            method: "POST",
            body: JSON.stringify({formData: formData}),
            headers: {"content-Type": "application/json"}
        })

        if(!res.ok){
            const response = await res.json()
            console.log(response)
        }

        else {
            router.refresh()
            router.push("/")
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} method="post">
                <h1>Create New user</h1>
                
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} required={true} value={formData.name}/>
                
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={handleChange} required={true} value={formData.email}/>
                
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" onChange={handleChange} required={true} value={formData.password}/>

                <input type="submit" value="Create User" className="bg-blue-600 rounded text-white" />

            </form>
            <p className="text-red-600 m-4">{errorMessage}</p>
        </div>
    )
}

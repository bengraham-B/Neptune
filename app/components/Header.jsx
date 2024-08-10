"use client"
import React from 'react'
import Link from 'next/link'

// Redux

import { useSelector, useDispatch } from 'react-redux'
import { LOGIN_REDUX, LOGOUT_REDUX } from '../GlobalRedux/Auth/authASlice'

// Material Tailwind
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
   

export default function Header() {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth.value)

  return (
    <main className='flex bg-blue-700 text-white py-4 px-2'>
        <section className='w-[50%]'>
            <Link href="/">
                <h1 className='text-3xl'>Neptune</h1>
            </Link>
        </section>
        <section className='w-[50%] flex justify-end'>
            <Menu className="bg-white">
                <MenuHandler>
                    <Button>{auth}</Button>
                </MenuHandler>
                <MenuList>
                    <MenuItem onClick={() => dispatch(LOGIN_REDUX())}>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem onClick={() => dispatch(LOGOUT_REDUX())}>Logout</MenuItem>
                </MenuList>
            </Menu>
        </section>
    </main>
  )
}

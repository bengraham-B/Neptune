"use client"
import React from 'react'
import Table from './components/Table'

// Redux
import store from './GlobalRedux/store'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/Counter/counterSlice'

export default function page() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <main>
			<section></section>
			
			<section className='flex p-1'>
				<Table/>
			</section>

            <section>
                <div>{count}</div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Increment</button>
            </section>
        </main>
    )
}

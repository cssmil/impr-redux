import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter';



function App() {

  const { counter } = useSelector( state => state.counter )
  const { times } = useSelector( state => state.times )
  const dispatch = useDispatch();

  return (
    <>

      <h1>Counter: {counter}</h1>
      <h1>Times: {times}</h1>
      <div className="card">
        <button onClick={()=>dispatch( increment() )}>
          Increment
        </button>
        <button onClick={()=>dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={()=>dispatch( incrementBy(5) )}>
          +2 Increment
        </button>
      </div>

    </>
  )
}

export default App

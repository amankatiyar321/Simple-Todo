import React from 'react'
import './todo.css'

const Todoitem = (props) => {



  return (
    <>
    <div className='a1'>
     <p className='a2' onClick={()=>{
        props.onSelect(props.id)
     }}>X</p>
     <h1 className='a3'>{props.text}</h1>
    </div>
    </>
  )
}

export default Todoitem
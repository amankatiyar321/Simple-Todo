import React, { useState } from 'react'
import './todo.css';
import Todoitem from './Todoitem';
const Todo = () => {
   const [data,setData]=useState("");
   const [store,setStore]=useState([]);

   const addTodo=(e)=>{
       setData(e.target.value);
   }

   const item=()=>{
      setStore((rey)=>{
        return [...rey,data]
      })
      setData("");
   }


   const deleteItem=(id)=>{
    setStore((old)=>{
     return old.filter((ele,index)=>{
        return index!==id;
     });
    });
}
  return (
    <>
    <div className='d'>
    <h1 className='d1'>Write Todo here...</h1>
    <div className='d2'>
        <input type="text" placeholder='Add Items Here..' className='d3' 
        value={data}
        onChange={addTodo}/>
        <button className='d4' onClick={item}>+</button>

        <p>
         { store.map((s,index)=>{
          return <Todoitem text={s}
          key={index}
          id={index}
          onSelect={deleteItem}
          />
        
          })}
        </p>
    </div>
    </div>
    </>
  )
}

export default Todo
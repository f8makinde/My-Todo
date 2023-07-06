import React, { useState } from 'react'
export const Form = ({onAddItems}) => {
    const [desc, setDesc] = useState('')
    const [quantity, setQuantity] = useState(1)
    
  
    function handleSubmit(e){
     e.preventDefault()
     if(!desc)return;
     const newItem = {desc, quantity, packed: false, id: Date.now()}
     setDesc('')
     setQuantity(1)
     onAddItems(newItem)
     console.log(newItem)
    }
     return <form className='add-form' onSubmit={handleSubmit}>
      <h3>WHat do you need for your 😊 trip?</h3>
      <select value={quantity}  onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map(num => 
        <option value={num} key={num}>{num}</option>)}
       
      </select>
      <input type='text' placeholder='Item...' value={desc} onChange={(e) => setDesc(e.target.value)}/>
      <button>Add</button>
     
    </form>
  }
import React, { useState } from 'react'
import { Form } from './Form'
import { PackingList } from './PackingList'
import { Stats } from './Stats'
import { Logo } from './Logo'
const App = () => {
  const [items, setItems] = useState([])
  function handleAddItems(item){
    setItems(items => [...items, item])
  }
  function handleDeleteItem(id){
    setItems(items => items.filter(item => item.id !== id))
  }
  function handleToggleItem(id){
    setItems(items => items.map((item) => item.id === id ? {...item, packed: !item.packed } : item) )
  }
  function handleClearItem(){
    const confirmed = window.confirm('Are you ready to delete all items')
   if(confirmed) setItems([])
  }
  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onClearItem={handleClearItem} onDeleteItems={handleDeleteItem} onToggle={handleToggleItem}/>
      <Stats items={items}/>
    </div>
  )
}
export default App

import React from 'react';


export function Item({ item, onDeleteItems, onToggle }) {
  return <li>
    <input type='checkbox' value={item.packed} onChange={() => { onToggle(item.id); }} />
    <span style={item.packed ? { textDecoration: 'line-through' } : {}}>{item.quantity} {item.desc}</span>
    <button onClick={() => onDeleteItems(item.id)}>❌</button>
  </li>;
}

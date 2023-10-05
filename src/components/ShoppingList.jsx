import React, { useState, useEffect } from 'react'
import ItemForm from './ItemForm'
import Item from './Item'


function ShoppingList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/items')
      .then((r) => r.json())
      .then((items) => setItems(items))
    }, [])
    
    function handleAddItem(newItem) {
      setItems([...items, newItem])
    }

    function handleDeleteItem(deletedItem) {
      const updatedItems = items.filter((item) => item.id !== deletedItem.id);
      setItems(updatedItems);
    }
    function handleUpdateItem(updatedIem) {
      const updatedItems = items.map((item) => {
        if(item.id === updatedIem.id){
          return updatedIem
        } else {
          return item
        }
      })
      setItems(updatedItems)
    }
    const itemsToDisplay = items.filter((item) => {
        if (selectedCategory === "All") return true;
    
        return item.category === selectedCategory;
      });
    return (
        <div className="ShoppingList">
        <ItemForm onAddItem={handleAddItem}/>

        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item 
              key={item.id} 
              item={item} 
              onUpdatedItem={handleUpdateItem}
              onDeleteItem={handleDeleteItem}
              />
          ))}
        </ul>
      </div>
    )
}

export default ShoppingList
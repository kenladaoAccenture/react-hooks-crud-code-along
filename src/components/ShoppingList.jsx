import React, { useState } from 'react'
import ItemForm from './ItemForm'
import Item from './Item'


function ShoppingList() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [items, setItems] = useState([]);

    const itemsToDisplay = items.filter((item) => {
        if (selectedCategory === "All") return true;
    
        return item.category === selectedCategory;
      });
    return (
        <div className="ShoppingList">
        <ItemForm />
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </ul>
      </div>
    )
}

export default ShoppingList
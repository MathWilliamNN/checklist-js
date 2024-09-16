import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemProvider = ({ children }) => {
  
  const [items, setItems] = useState([]);

  const handleStatusChange = (updatedItem, purchased) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === updatedItem.name
          ? { ...item, purchased }
          : item
      )
    );
  };

  const handleDelete = (itemToDelete) => {
    setItems((prevItems) =>
        prevItems.filter(item => item.name !== itemToDelete.name)
    );
};

const [editMode, setEditMode] = useState(false);
const [editItem, setEditItem] = useState('');

  const handleEdit = (itemToEdit) => {
      setEditItem(itemToEdit);
      setEditMode(true);
    ;
};

  return (
    <ItemsContext.Provider value={{ items, setItems, handleStatusChange, handleDelete, handleEdit, editMode, setEditMode, editItem, setEditItem }}>
      {children}
    </ItemsContext.Provider>
  );
}
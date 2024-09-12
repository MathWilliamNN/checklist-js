import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemProvider = ({ children }) => {
  
  const [items, setItems] = useState([
    { nome: 'Apple', purchased: false },
    { nome: 'Banana', purchased: true },
    { nome: 'Orange', purchased: false },
    { nome: 'Grapes', purchased: true },
    { nome: 'Mango', purchased: false },
  ]);

  const handleStatusChange = (updatedItem, purchased) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.nome === updatedItem.nome
          ? { ...item, purchased }
          : item
      )
    );
  };

  const handleDelete = (itemToDelete) => {
    setItems((prevItems) =>
        prevItems.filter(item => item.nome !== itemToDelete.nome)
    );
};

  return (
    <ItemsContext.Provider value={{ items, setItems, handleStatusChange, handleDelete }}>
      {children}
    </ItemsContext.Provider>
  );
}
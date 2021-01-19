import React, { useState } from 'react';
import axios from 'axios';

export default function Admin({ items, setItems }) {
  const [userInput, setUserInput] = useState({
    name: '',
    description: '',
    price: '',
  });

  console.log('userInput is', userInput);

  const handleUserInputChange = (event) => {
    const changedAttribute = event.target.name;
    console.log('changedAttribute', changedAttribute);

    if (changedAttribute === 'name') {
      setUserInput({ ...userInput, name: event.target.value });
    } else if (changedAttribute === 'description') {
      setUserInput({ ...userInput, description: event.target.value });
    } else if (changedAttribute === 'price') {
      setUserInput({ ...userInput, price: event.target.value });
    }
  };

  // add the item to the DB
  const handleItemSubmitClick = () => {
    axios.post('/items', userInput)
      .then((result) => {
        console.log(result);
        console.log('items is', items);

        setItems([...items, result.data.item]);
      });
  };

  return (
    <div className="col-sm">
      <label htmlFor="name">name</label>
      <input id="name" name="name" value={userInput.name} onChange={handleUserInputChange} />
      <br />
      <label htmlFor="description">description</label>
      <input id="description" name="description" value={userInput.description} onChange={handleUserInputChange} />
      <br />
      <label htmlFor="price">price in $</label>
      <input id="price" name="price" value={userInput.price} onChange={handleUserInputChange} />
      <button onClick={handleItemSubmitClick}>submit item</button>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/names/')
      .then(response => setNames(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/names/', { name })
      .then(response => {
        setNames([...names, response.data]);
        setName('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {names.map((nameObj) => (
          <li key={nameObj.id}>{nameObj.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

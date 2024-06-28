import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/names/')
      .then(response => {
        console.log('Data fetched from API:', response.data);
        setNames(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/names/', { name })
      .then(response => {
        console.log('Data saved:', response.data);
        setNames([...names, response.data]);
        setName('');
        setAlert({ type: 'success', message: 'Name added successfully!' });
      })
      .catch(error => {
        console.error('Error saving data:', error);
        setAlert({ type: 'danger', message: 'Failed to add name.' });
      });
  };

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-4">
        <span className="navbar-brand mb-0 h1">Names manager</span>
      </nav>
      <h1 className="text-center mb-4">Welcome</h1>
      {alert && (
        <div className={`alert alert-${alert.type}`} role="alert">
          {alert.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="form-control"
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
      <div className="row">
        {names.map((nameObj) => (
          <div key={nameObj.id} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{nameObj.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

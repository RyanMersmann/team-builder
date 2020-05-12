import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Team from './components/Team';

function App() {

  const [teams, setTeams] = useState([{
      name: '',
      email: '',
      role: ''
    }
  ]);
  
  const addNewForm = form => {
    const newForm = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      role: form.role
    };
    setTeams([...teams, newForm]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
      <Form addNewForm={addNewForm} />
      <Team teams={teams} />      
    </div>
  );
}

export default App;

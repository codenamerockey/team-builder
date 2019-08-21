import React, { useState } from 'react';
import data from './data';
import Team from './Team';
import TeamForm from './TeamForm';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState(data);

  const addNewTeamMember = newMember => {
    setTeamMember([...teamMember, newMember]);
  };

  console.log(teamMember);
  return (
    <div className="App">
      <TeamForm addNewTeamMember={addNewTeamMember} />
      <Team teamList={teamMember} />
    </div>
  );
}

export default App;

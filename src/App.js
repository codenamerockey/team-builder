import React, { useState } from 'react';
import teamData from './data';
import Team from './Team';
import TeamForm from './TeamForm';
import './App.css';

function App() {
  const [teamMember, setTeamMember] = useState([teamData]);

  const addNewTeamMember = () => {
    setTeamMember(...teamMember, teamMember);
  };

  console.log(teamMember);
  return (
    <div className="App">
      <TeamForm addNewTeamMember={addNewTeamMember} />
      <Team data={teamData} />
    </div>
  );
}

export default App;

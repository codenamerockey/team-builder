import React, { useState } from 'react';
import data from './data';
import Team from './Team';
import TeamForm from './TeamForm';
import './App.css';

function App() {
  //setting use state for team members
  const [teamMember, setTeamMember] = useState(data);

  //function to add a new member to the team list
  const addNewTeamMember = newMember => {
    setTeamMember([...teamMember, newMember]);
  };

  console.log(teamMember);
  return (
    <div className="App">
      {/* Function passed a prop to the team form component */}
      <TeamForm addNewTeamMember={addNewTeamMember} />
      {/* team member data passed to the team component */}
      <Team teamList={teamMember} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import uuid from 'uuid/v1';

function TeamForm(props) {
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  });

  const submitForm = event => {
    event.preventDefault(); // prevent default from form
    const newTeamMember = {
      // creates new object for team.
      ...teamMember,
      id: uuid()
    };

    props.addNewTeamMember(newTeamMember);

    setTeamMember({ name: '', email: '', role: '' });
  };

  return (
    <div>
      <h1>Team Form</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Please enter your name"
          /*value
        //onChange*/
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email here"
          /*value={}
        onChange={} */
        />

        <label htmlFor="role">Email</label>
        <input
          type="text"
          name="role"
          placeholder="Enter your role here"
          /*value={}
        onChange={} */
        />
      </form>
    </div>
  );
}

export default TeamForm;

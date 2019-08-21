import React, { useState } from 'react';
import uuid from 'uuid/v1';

function TeamForm(props) {
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  });

  const changeHandler = event => {
    //computed property
    console.log(event.target.value);
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

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
          value={teamMember.name}
          onChange={changeHandler}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email here"
          value={teamMember.email}
          onChange={changeHandler}
        />

        <label htmlFor="role">Email</label>
        <input
          type="text"
          name="role"
          placeholder="Enter your role here"
          value={teamMember.role}
          onChange={changeHandler}
        />
        <button className="btn waves-effect waves-light" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TeamForm;

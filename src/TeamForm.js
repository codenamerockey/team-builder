import React, { useState } from 'react';
import uuid from 'uuid/v1';

//Team Form function that returns the form that is placed inside App.js and rendered to the View.
function TeamForm(props) {
  // use state hook holding a empty team member object
  const [teamMember, setTeamMember] = useState({
    name: '',
    email: '',
    role: ''
  });

  //Change handler function that gets the value from the input field dynamically with the target name. and uses the spread operator to copy the use set the value of use state with the object and data from the input field.
  const changeHandler = event => {
    //computed property
    console.log(event.target.value);
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  //Submit form function that runs when the submit button for the form is pressed. It prevents the default behavior of the form and also adds a new team member to the list by using the props from the add Team form component in App.js where the add new Team member function was created and passed it takes the argument of the new Team member object created which has the use state value inside of it along with what is written inside the input fields. Making a brand new Team member. Then lastly the state is set to a cleared object to empty out the user input fields after the form is submitted.
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

  //The form that is created and returned by this component.
  return (
    <div className="container">
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

        <label htmlFor="role">Role</label>
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

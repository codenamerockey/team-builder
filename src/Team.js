import React from 'react';

function Team(props) {
  return (
    //Div returning a card with the team data dynamically extracted
    <div>
      {/* props passed in from Team component inside App.js and used to map over and return the card for the team member, card design from material design */}
      {props.teamList.map(member => {
        console.log(member);

        return (
          <div className="row" key={member.id}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Name: {member.name}</span>
                  <p>Please Email me at: {member.email}</p>
                  <p>Role: {member.role}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;

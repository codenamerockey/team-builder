import React, { useState } from 'react';

function Team(props) {
  return (
    <div>
      {props.teamList.map(member => {
        console.log(member);
        return (
          <div className="row">
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Name:{member.name}</span>
                  <p>Please Email me at:{member.email}</p>
                  <p>Role:{member.role}</p>
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

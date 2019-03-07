import React from 'react';
import PropTypes from 'prop-types';

const UserCard = (props) => { 
  const {
    data: {
      name,
      username,
      email,
      phone,
      company: {
        name: companyName
      },
      website,
      address: {
        city,
        street,
        suite,
        zipcode
      }
    },
  } = props;
  return (
    <div className="card">
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {name}</li>
            <li className="list-group-item">User Name: {username}</li>
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
            <li className="list-group-item">Company: {companyName}</li>
            <li className="list-group-item">Website: {website}</li>
            <li className="list-group-item">Website: {city} {street} {suite} {zipcode}</li>
        </ul>
    </div>
  );
};

UserCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserCard;

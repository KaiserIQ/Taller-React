import React from 'react';

function ProfileCard({ name, email }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default ProfileCard;
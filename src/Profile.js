import React from 'react';

function Profile({ user }) {
  return (
    <div className="profile">
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
}

export default Profile;
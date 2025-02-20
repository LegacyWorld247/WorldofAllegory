// src/pages/Profile.js
import React from "react";

const Profile = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-greenAccent mb-6">Profile</h2>
      <div className="bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-xl text-greenAccent">Your Stats</h3>
        <p className="mt-2">Name: [Your Name]</p>
        <p>Prosperity Score: 82</p>
        <p>Member Since: Feb 19, 2025</p>
        <button className="mt-4 bg-greenAccent text-dark px-4 py-2 rounded hover:bg-green-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
import React from "react";
import ProfilePic from "../../../../public/ProfilePic.png"

const ProfileImage: React.FC = () => {
  return (
    <div className="profile-image-container">
      <img
        src={ProfilePic}
        alt="Your Name"
        className="profile-image"
      />
    </div>
  );
};

export default ProfileImage;

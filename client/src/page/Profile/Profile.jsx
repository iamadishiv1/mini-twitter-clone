import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightBar from '../../components/RightBar/RightBar'

const Profile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      <div className="px-6">
        <LeftSideBar />
      </div>
      <div className="col-span-4 border-x-2 border-t-slate-800 px-6"></div>

      <div className="px-6">
        <RightBar />
      </div>
    </div>
  );
};

export default Profile;

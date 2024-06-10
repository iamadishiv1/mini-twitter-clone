import React from 'react'

import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userS';

const LeftSideBar = () => {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex flex-col h-full md:h-[90vh] justify-between mr-6">
      <div className="mt-6 flex flex-col space-y-4">
        <Link to="/">
            <div className="flex items-center space-x-1  py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                <HomeIcon fontSize="large" />
                <p>Home</p>
            </div>
        </Link>
        <Link to="/explore">
            <div className="flex items-center space-x-0 py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                <TagIcon fontSize="large" />
                <p>Exlpore</p>
            </div>
        </Link>
        <Link to="/profile/">
            <div className="flex items-center space-x-1  py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                <PersonIcon fontSize="large" />
                <p>Profile</p>
            </div>
        </Link>
        <Link to="/more">
            <div className="flex items-center space-x-1  py-2 hover:bg-slate-200 rounded-full cursor-pointer">
                <MoreHorizIcon fontSize="large" />
                <p>More</p>
            </div>
        </Link>
      </div>
      <div className="flex justify-between">
        <div>
            <p className="font-bold cursor-pointer">Username</p>
            <p className="font-medium cursor-pointer">@Username</p>
            <Link to="/signin">
                <button className="bg-slate-500 px-4 py-2 text-white rounded-full" onClick={handleLogout}>Logout</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default LeftSideBar;

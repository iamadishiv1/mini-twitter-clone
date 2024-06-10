import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightBar from '../../components/RightBar/RightBar';
import MainPart from '../../components/MainPart/MainPart';

import Signin from '../Signin/Signin';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { currentUser } = useSelector((state) => state.user);

  console.log("user", currentUser);
  return (
    <>
      {!currentUser ? (<Signin />) :
        (
          <div className="grid grid-cols-1 md:grid-cols-6 ">
            <div className="px-6">
              <LeftSideBar />
            </div>
            <div className="col-span-4 border-x-2 border-t-slate-800 px-6">
              <MainPart />
            </div>
            <div className="px-6">
              <RightBar />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Home;
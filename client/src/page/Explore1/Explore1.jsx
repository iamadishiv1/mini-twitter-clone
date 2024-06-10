import React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightBar from '../../components/RightBar/RightBar'
import TweetExplore1 from '../../components/TweetExplore1/TweetExplore1'

const Explore1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6">
      <div className="px-6">
        <LeftSideBar />
      </div>
      <div className="col-span-4 border-x-2 border-t-slate-800 px-6"> <TweetExplore1 /> </div>
      <div className="px-6">
        <RightBar />
      </div>
    </div>
  )
}

export default Explore1

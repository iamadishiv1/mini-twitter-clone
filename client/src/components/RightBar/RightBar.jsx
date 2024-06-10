import React from 'react'

const RightBar = () => {
  return (
    <div className="p-10 bg-slate-100 rounded-lg space-y-4 pr-40">
        <h2 className="font-bold">What's Happening</h2>
        <div>
            <p className="font-medium">Trending</p>
            <ul>
                <li className="font-bold">#adarsh</li>
                <li className="font-bold">#shivam</li>
                <li className="font-bold">#india</li>
                <li className="font-bold">#jaspritbumrah</li>
            </ul>
        </div>
        <p className="font-bold text-center text-blue-600 cursor-pointer">Subscribe</p>
      
    </div>
  )
}

export default RightBar;

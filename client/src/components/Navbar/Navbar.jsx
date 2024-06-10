import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 my-5 justify-center">
      <div className="mx-auto md:mx-0">
        <img src="/images.png" alt="twitter-logo" width="40px" className="ml-8 cursor-pointer" />
      </div>
      <div className="col-span-4 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl cursor-default">Home</h2>
            <img src="/images.png" alt="twitter-logo" width="40px" className="ml-8 cursor-pointer" />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
        <input type="text" className="bg-blue-100 rounded-full py-2 px-8"/>
        <SearchIcon className="text-blue-500 absolute m-2 cursor-pointer"/>
      </div>
    </div>
  );
}

export default Navbar;

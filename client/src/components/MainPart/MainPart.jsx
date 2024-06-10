import React from 'react'

const MainPart = () => {
  return (
    <div>
        <p className="font-bold pl-2 my-2">Username</p>
        <form className="border-b-2pb-6">
            <textarea type="text" placeholder="What is happening?" maxLength={300} className="bg-slate-200 rounded-lg w-full p-2"></textarea>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-full ml-auto">Post</button>
        </form>

    </div>
  )
}

export default MainPart;

import React from 'react'
import team5 from "../assets/team5.png";
import team6 from "../assets/team6.png";
interface TeamsCardProps {
  id: number; // Change this type based on your actual data type, e.g., number
}

const TeamsCard: React.FC<TeamsCardProps> = ({ id }) => {
  return (
    <div className='flex bg-white  rounded-lg mx-2  p-2'>
        <div className="w-20 bg-gray-100 rounded-lg p-2">
        <img src={id === 1 ?team6:team5} className='w-16 h-16' alt="team_logo" />
        </div>
        <div className="flex flex-col pl-2">
            <h2 className='text-lg'>TISB</h2>
            <p className='font-semibold text-lg'>{id === 1 ?"U15":"Champions"}</p>
            <span className='text-xs w-20 font-light'>{id === 1 ?"17 Players":"15 Players"}</span>
        </div>
       
    </div>
  )
}

export default TeamsCard

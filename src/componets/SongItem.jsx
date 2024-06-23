import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({name,image,desc,id}) => {

  const {playWithId} = useContext(PlayerContext);
  return (
    <div className='min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img onClick={()=>playWithId(id)} className='rounded' src={image} alt="image" />
        <p className='font-bold mt-2 mb-1 '>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
      
    </div>
  )
}

export default SongItem

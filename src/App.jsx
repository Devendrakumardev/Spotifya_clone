
import React from 'react'
import Sidebar from './componets/Sidebar'
import Player from './componets/Player'
import Display from './componets/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <Player />

    </div>
  )
}

export default App

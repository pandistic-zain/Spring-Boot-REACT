import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'

const Home = () => {
  return (
    <>
    <div className="home-container" id='home'>
        <NavBar />
        <Banner/>
    </div>
    </>
  )
}

export default Home
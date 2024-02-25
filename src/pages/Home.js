import React from 'react';
// import NavBar from '../components/NavBar.js';
import Hero from '../components/Hero.js';

function Home() {
  document.querySelector('body').classList = ['bg-home'];
  
  return (
    <>
      {/* <NavBar active= {'Home'} tabs = {['Home', 'About us', 'Blogs', 'Gallery']} id = {0}/> */}

      <Hero />
    </>
  )
}

export default Home;

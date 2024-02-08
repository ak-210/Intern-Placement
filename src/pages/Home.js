import React from 'react';
import NavBar from '../components/NavBar.js';
import Hero from '../components/Hero.js';

function Home() {
  return (
    <>
      <NavBar active= {'Home'} tabs = {['Home', 'About us', 'Blogs', 'Gallery']} />

      <Hero />
    </>
  )
}

export default Home;

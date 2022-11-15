import React from 'react';
import Header from '../../components/header/Header'
import HeroBanner from '../../components/hero-banner/HeroBanner';
import Main from '../../components/main/Main';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Header/>
      <h1>HOME PAGE</h1>
      <HeroBanner/>
      <Main/>
    </div>
  )
}

export default Home
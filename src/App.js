import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import TrustedCard from './components/TrustedCard';
import Services from './components/Services';
import Choose from './components/Choose';
import Tools from './components/Tools';
import Review from './components/Review';
import Quote from './components/Quote';
import Partner from './components/Partner';
import News from './components/News';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <TrustedCard />
      <Services/>
      <Choose />
      <Tools />
      <Review />
      <Quote />
      <Partner />
      <News />
      <Footer />
    </div>
  );
}

export default App;


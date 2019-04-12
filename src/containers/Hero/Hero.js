import React from 'react';
import Logo from '../../components/Logo/Logo.js';
import SearchBar from '../../components/SearchBar/SearchBar.js';
import Phrase from '../../components/Phrase/Phrase.js';

import './Hero.css';

function Hero(props) {
  return (
    <section className="hero">
      <header>
        <SearchBar />
      </header>
      <Logo color='dark' />
      <h3 className="callout">
        I<br/>create<br/>
          <Phrase />
        <br/>digital<br/>experiences.
      </h3>
    </section>
  );
}

export default Hero;

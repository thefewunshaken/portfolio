import React, { Component } from 'react';
import '../../assets/css/vars.css';
// import 'normalize.css';
import './App.css';
import Hero from '../Hero/Hero';
import Menu from '../Menu/Menu';

/**
 * TO DOs < MVP
 * > add menu page component
 *   >> add projects page
 *   >> add code page
 *   >> add contact page
 * > add footer
 * > add media queries for desktop
 * TO DOs < RnD
 * > add visual indicator on Hero component that there is more content below
 * > add animation & transition for going from projects page > project
 * > change Phrase transition to not overlap other text
 * > add about page
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      <div className="App">
        
        <section className="app-wrapper">
          <Hero />
          <Menu />
        </section>

      </div>
    );
  }
}

export default App;

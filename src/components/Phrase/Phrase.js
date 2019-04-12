import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { randomizeText, getAnimationTime } from '../../containers/Hero/HeroAnimateText';

import './Phrase.css';

class Phrase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'modern',
      inAnim: true
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ phrase: randomizeText() });
      // this.setState(prevState => ({ inAmin: !prevState.inAnim }));
      // this.setState({ inAnim: !this.state.inAnim});
    }, getAnimationTime());

    setTimeout(() => {this.setState({ inAnim: !this.state.inAnim})}, getAnimationTime());
  }

  render() {
    const { inAnim, phrase } = this.state;
    return (
      <div className="phrase-frame">
        <CSSTransition
              in={inAnim}
              timeout={{
                appear: 500,
                enter: 500,
                exit: 500
              }}
              classNames="phrase-change"
              onEntered={() => {
                setTimeout(() => {
                  this.setState({ inAnim: !inAnim});
                }, getAnimationTime());
              }}
              onExited={() => {
                document.querySelector('.phrase').textContent = phrase;
                this.setState({ inAnim: !inAnim});
                }}>
          <span className='phrase' li={phrase} >modern</span>
        </CSSTransition>
      </div>
    );
  }
}

export default Phrase;
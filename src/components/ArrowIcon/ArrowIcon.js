import React from 'react';

import './ArrowIcon.css';

function ArrowIcon({ handleArrowClick }) {

    return (
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 27 32.8" enableBackground="new 0 0 27 32.8"
        className='arrow-icon'
        onClickCapture={handleArrowClick}>
        <polygon points="0,32.8 13.5,32.8 27,16.4 13.5,0 0,0 13.5,16.4 "/>
      </svg>
    );
}

export default ArrowIcon;

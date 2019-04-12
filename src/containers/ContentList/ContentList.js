import React from 'react';
import ContentListItem from '../../components/ContentListItem/ContentListItem';
import ArrowIcon from '../../components/ArrowIcon/ArrowIcon.js';
import './ContentList.css';

function ContentList({ contentVisible, pageNum, menuContent, handleArrowClick, handleContentListItemClick }) {  
  return (
    <ul className="content-list">
      <li>
        <ArrowIcon handleArrowClick={handleArrowClick} />
        <h1>{menuContent.pages[pageNum].title}</h1>
      </li>
      {
        menuContent.pages[pageNum].content
          .map(content => ContentListItem(
            { content, contentVisible, pageNum, menuContent, handleContentListItemClick }
          ))
      }
      {/* <ContentListItem contentVisible={contentVisible} pageNum={pageNum} menuContent={menuContent} /> */}
    </ul>
  );
}

export default ContentList;

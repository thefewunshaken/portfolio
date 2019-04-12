import React from 'react';

import './ContentListItem.css';

function ContentListItem({ content, contentVisible, pageNum, menuContent, handleContentListItemClick }) {
  let displayedContent;
  
  if(contentVisible) {
    displayedContent = content.title;
    document.querySelectorAll(".content-list-item").forEach(li => li.classList.add("clickable"));
  } else {
    displayedContent = menuContent.pages[pageNum].title;
    document.querySelectorAll(".content-list-item").forEach(li => li.classList.remove("clickable"));
  }

  return (
    <li key={content.id} className="content-list-item" onClickCapture={handleContentListItemClick}>
      <h1>{displayedContent}</h1>
    </li>
  );
}

export default ContentListItem;

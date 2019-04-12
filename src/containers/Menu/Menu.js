import React, { Component } from 'react';
import TextLogo from '../../components/TextLogo/TextLogo';
import ContentList from '../../containers/ContentList/ContentList';
import ProjectModal from '../../components/ProjectModal/ProjectModal';

import menuContent from './menuContent.json';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentVisible: false,
      pageNum: 0,
      displayProjectModal: false,
      activeProject: '',
    };

    this.startX = '';
    this.endX = '';

    this.handleArrowClick = this.handleArrowClick.bind(this);
    this.handleSwipe = this.handleSwipe.bind(this);
    this.handleContentListItemClick = this.handleContentListItemClick.bind(this);
    this.handleExitButtonClick = this.handleExitButtonClick.bind(this);
    this.renderProjectModal = this.renderProjectModal.bind(this);
  }

  handleArrowClick(e) {
    e.currentTarget.classList.toggle('rotate');
    this.setState((state) => {
      return {contentVisible: !state.contentVisible}
    });
  }

  handleSwipe(e) {
    if(e.type === 'touchstart') {
      this.startX = e.touches[0].clientX;
    } else if(e.type === 'touchmove') {
      this.endX = e.changedTouches[0].clientX;

      // don't allow swipe if page content is visible
      if(this.startX !== '' && this.endX !== '' && !this.state.contentVisible) {
        if(this.startX - this.endX >= 50 || this.endX - this.startX >= 50) {
          this.startX > this.endX ? this.incrementPageNum() : this.decrementPageNum();
          this.startX = '';
          this.endX = '';
        }
      }
    }
  }

  handleContentListItemClick(e) {
    if(this.state.contentVisible) {
      this.setState({ displayProjectModal: true });
      this.setState({ activeProject: e.target.textContent });
    }
  }
  
  handleExitButtonClick(e) {
    this.setState({ displayProjectModal: false });
  }

  renderProjectModal() {
    const { contentVisible, pageNum, activeProject } = this.state;
    if(contentVisible) {
      let content = menuContent.pages[pageNum].content
        .find(content => content.title === activeProject);

      console.log(content);

      return(
        <ProjectModal content={content} pageNum={pageNum} handleExitButtonClick={this.handleExitButtonClick} />
      );
    }
  }

  decrementPageNum() {
    const { pageNum } = this.state;
    // wrap to the end if swiping out of bounds
    if(pageNum - 1 === -1) {
      this.setState({ pageNum: menuContent.pages.length - 1 });
    } else {
      this.setState((state) => {
        return {pageNum: state.pageNum - 1}
      });
    }
  }

  incrementPageNum() {
    const { pageNum } = this.state;
    // wrap to the start if swiping out of bounds
    if(pageNum + 1 === menuContent.pages.length) {
      this.setState({ pageNum: 0 });
    } else {
      this.setState((state) => {
        return {pageNum: state.pageNum + 1}
      });
    }
  }

  componentDidUpdate() {
    console.log(this.state.pageNum);
    console.log(this.state.contentVisible);
  }

  render() {
    const { contentVisible, pageNum, displayProjectModal } = this.state;

    return (
      <section className="menu" onTouchStart={this.handleSwipe} onTouchMove={this.handleSwipe}>
        { displayProjectModal ? this.renderProjectModal() : null }
        <TextLogo />
        <div className="content-wrapper">
          <ContentList contentVisible={contentVisible} pageNum={pageNum}
            menuContent={menuContent}
            handleArrowClick={this.handleArrowClick}
            handleContentListItemClick={this.handleContentListItemClick}
          />
        </div>
      </section>
    );
  }
}

export default Menu;

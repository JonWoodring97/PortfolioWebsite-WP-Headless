import React, {useState, useEffect} from 'react';
import NavigationModal from './NavigationModal';
import {connect} from 'react-redux';
import {updateModal} from '../reducers/websiteReducer'
import { useRouter } from 'next/router';

let NavigationPane = (props) => {
  const router = useRouter();

  return (
    <div id="nav-pane">
      <NavigationModal/> 
      <div className = 'site-header'>
          <div className = 'header-content'>
            <div className = 'resume-section navlink'> 
          </div>
      </div>
    </div>
    <div className="navigation-header">
      <a href = '/home' className = 'logo-image-link'>
          <img className = 'logo-image' src = '/logo-scalable.svg' height = '400' width = '600'/>
      </a>
    <button className ="navbutton" id = "navButton" onClick={() => {
              props.updateModal(props.showModal)    
            }} > <div className = 'hamburgerIcon'></div>
                  <div className = 'hamburgerIcon'></div>
                  <div className = 'hamburgerIcon'></div> </button>
    <div className = 'line-break'> </div> 
        <nav className = 'site-menu'> 
          <ul className = 'site-menu-inner'>
            <li className='menuitem'>
              <a onClick= {() => router.push('home')} href = '/home' className = "menuitem navlink"> Home </a> 
              <div className = 'menudivider'> / </div>
            </li>
            <li className = 'menuitem'>
              <a onClick= {(e) => router.push('about')} href =  '/about' className = "menuitem navlink"> About </a>
              <div className = 'menudivider'> / </div>
            </li>
            <li className = 'menuitem'>
              <a onClick= {(e) => router.push('services')} href = '/services' className = "menuitem navlink"> Services </a>
              <div className = 'menudivider'> / </div>
            </li>
            <li className = 'menuitem'>
              <a onClick= {(e) => router.push('work')} href = '/work' className = "menuitem navlink"> Work </a>
              <div className = 'menudivider'> / </div>
            </li>
            <li className = 'menuitem'>
              <a onClick= {(e) => { 
                router.push('blog'); 
                }
              } href = '/blog' className = "menuitem navlink"> Blog </a> 
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showModal: state.website.showModal
  }
}

NavigationPane = connect(mapStateToProps, {updateModal})(NavigationPane)

export default NavigationPane;

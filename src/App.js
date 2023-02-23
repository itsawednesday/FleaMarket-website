import React, { useState, useRef } from 'react';
import CNavBar from './components/CNavBar';
import Shop from './components/Contain';

import Banner from './components/Banner';
import Item from './components/item_sell';

import { Parallax } from 'react-parallax';
import './App.css';

const App = () => {


  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [navBgColor, setNavBgColor] = useState(false);

  const homeRef = useRef();
  const shopRef = useRef(); 
  const itemRef = useRef(); 



  const homeClick = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  }



  const shopClick = () => {
    shopRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }

  const itemClick = () => {
    itemRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsNavExpanded(false);
  }


  

    
  return (
    <div className='main-container' ref={homeRef}>
      <CNavBar 
        isNavExpanded={isNavExpanded}
        setIsNavExpanded={setIsNavExpanded}
        navBgColor={navBgColor}
        setNavBgColor={setNavBgColor}
        homeClick={homeClick}
        projectsClick={shopClick}
        skillsClick= {itemClick}
        
      />
      <Parallax
        blur={0}
        bgImage={background}
        bgImageAlt='backgroundImg'
        strength={300}
      >
      
        <div className='intro-box'>
          <Banner />
        </div>
      </Parallax>
    
      <div className='main-body-box'>


        <div className='shop-box' ref={shopsRef}>
            <Shop />
        </div>

     

        <div className='item-box' ref={itemRef}>
            <item />
        </div>
       
       

       
      </div>
    </div>
  );
}

export default App;
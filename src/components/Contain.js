import React from 'react';
import { BackgroundImg } from 'react-parallax';
import '../style All_stalls.css';
import stall from "..All_Stalls/stall";
import MapChat from "../All_Stalls/secondstall";
import { Parallax } from 'react-parallax';


const Contain = ({}) => {

  return(
      <div className='Contain-container'>
      <Parallax
          blur={0}
          bgImage={Background}
          bgImageAlt="flea-market.jpeg"
          strength={400}
      >
          <div className='Contain-header-box'>
              <h1 className='Contain-header'>Our stallholders at previous markets
</h1>
          </div>
      </Parallax>
          <div className='Contain-content-box'>
              <div className='secondstall all_stalls'>
                  <firststall />
              </div>                
              { <div className='firststall all_stalls'>
                  <stall1 />
              </div>
            }
              
          </div>
                </div>

    
  )

}

export default Contain;
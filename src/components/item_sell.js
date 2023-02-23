//import skillsPic from '../assets/img/IMG_4974.jpg';
import { Parallax } from 'react-parallax';

import '../styles/Skills.css';

/*create parallax image for the skills section*/
export const Skills = () => {

    return(
        <div className='item_sell-container'>
            <Parallax
                blur={0} bgImage={skillsPic}
               // bgImageAlt="items-pic"
                strength={400}
            >
                <div className='item_sell-header-box'>
                    <h1 className='item_sell-header'>Technical Skills</h1>
                </div>
            </Parallax>
          


           

            <div className='item_sell-content-box'>
                <div className='Items sell-box'>
                    <ul>
                        <li className='item_sell-subhead'><h3>Furniture</h3></li>
                        <li className='item_sell-item'><p>Clothes</p></li>
                        <li className='item_sell-item'><p>Baking</p></li>
                        <li className='item_sell-item'><p>Hobby</p></li>

                    </ul>
                </div>
                </div></div>
    )
}

export default Skills;
import React from 'react'
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import pillar1 from '../assets/1pillar.jpg'
import pillar2 from '../assets/2pillar.jpg'
import pillar3 from '../assets/3pillar.jpg'
import pillar4 from '../assets/4pillar.jpg'
import pillar5 from '../assets/5pillar.jpg'
import pillar6 from '../assets/6thpillar.jpg'
import bheart from '../assets/blueheart.png'
import rheart from '../assets/redheart.png'
import moon from '../assets/moon.png'
import clock from '../assets/clock.png'
import search from '../assets/search.png'
import navigate from '../assets/navigate.png'
import valid from '../assets/valid-heart.png'
import find from '../assets/find.png'
import { IoIosArrowBack } from "react-icons/io";
import heart from '../assets/heart.png'
import { IoIosArrowForward } from "react-icons/io";

import '../CssPage/Home.css'
const Home = () => {
  return (
    <article>
      <section id='Home-page'>
        <div className='Content'>
        <h2 style={{fontSize:45,fontWeight:500}}>Book an appointment with <br/>
          <span style={{color:'#1173B3'}}>lifestyle medicine</span> experts</h2>
        <br/>
        <h3 style={{fontSize:20,color:'gray',fontWeight:"normal"}}>Optimize your lifestyle and reverse chronic diseases.</h3>
        </div>
      </section>
      <section id='first-page'>
      <div className='image-left'>
        <div className='image-leftright'>
          <img src={img4} alt="img1" width={300} height={300} />
          <img src={img1} alt="img2" className="image2" width={300} height={400} />
        </div>
        <div className='form'>
          <input className='input-section'
          placeholder='Condition,procedure,Speciality...'/>
          <input className='input-section'
          placeholder='City, state, or zipcode'/>
          <input className='input-section'
          placeholder='Insurance carrier'/>
          <button type='button'>Find Now</button>
        </div>
        <div className='image-leftleft'>
          <img src={img3} alt="img3" width={320} height={300} />
          <img src={img2} alt="img4"  width={320} height={300} />
        </div>
      </div>
    </section>
    <section id='second-page'>
      <header style={{color:'black'}} className='text'>
        <div className='text1'>HOW IT WORKS</div> 
        <div className='text2'>Lifestyle as medicine : <span style={{fontStyle:'normal',fontWeight:420,color:'gray'}}>The six pillars</span>
         </div>
        </header>
        <nav className='options'>
          <ul className='listitem'>
          <li>Nutrition</li>
          <li>Physical Activity </li>
          <li>Restorative Sleep</li>
          <li>Stress Management</li>
          <li>Social Connection</li>
          <li>Substance abuse</li>
        </ul>
        </nav>
        <div className='sixpillars'>
          <div className='first-pillar'>
            <img src={pillar1} alt="1stpillar"/>
            <div className='measure'>
              <img src={heart} style={{width:24,height:21,backgroundColor:'transparent'}}/>
              <h2>121/80 </h2>
              <span style={{color:'gray',fontSize:18,marginTop:4,backgroundColor:'transparent'}}>mmHg</span>
            </div>
            <div className="first-pillar-text">
              <h2 style={{color:'black'}}>Nutrition</h2>
              <h3 style={{color:'gray'}} className='pillartext2'>Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.</h3>
            </div>
          </div>
          <div className='first-pillar'>
              <img src={pillar2} alt="1stpillar"/>
              <div className='measure'>
              <img src={heart} style={{width:24,height:21,backgroundColor:'transparent'}}/>
              <h2>Feeling</h2>
              <span style={{color:'gray',fontSize:16,marginTop:4,backgroundColor:'transparent'}}>better</span>
            </div>
            <div className="first-pillar-text">
              <h2 style={{color:'black'}}>Social Connection</h2>
              <h3 style={{color:'gray'}} className='pillartext2'>Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.</h3>
            </div>
          </div>
          <div className='first-pillar'>
            <img src={pillar3} alt="1stpillar"/>
            <div className='measure'>
              <img src={bheart} style={{width:24,height:21,backgroundColor:'transparent'}}/>
              <h2>60</h2>
              <span style={{color:'gray',fontSize:18,marginTop:4,backgroundColor:'transparent'}}>bpm</span>
            </div>
            <div className="first-pillar-text">
              <h2 style={{color:'black'}}>Stress Management</h2>
              <h3 style={{color:'gray'}} className='pillartext2'>Effective stress management techniques are crucial for mental well-being and overall health.</h3>
            </div>
          </div>
          <div className='first-pillar'>
            <img src={pillar4} alt="1stpillar"/>
            <div className='measure'>
              <img src={moon} style={{width:24,height:21,backgroundColor:'transparent'}}/>
              <h2>8 hours</h2>
            </div>
            <div className="first-pillar-text">
              <h2 style={{color:'black'}}>Restorative Sleep</h2>
              <h3 style={{color:'gray'}} className='pillartext2'>Consistent, quality sleep is essential for cognitive function and physical health.</h3>
            </div>
          </div>
          <div className='first-pillar'>
            <img src={pillar5} alt="1stpillar"/>
            <div className='measure'>
              <img src={rheart} style={{width:24,height:21,backgroundColor:'transparent'}}/>
              <h2>32 minutes</h2>
            </div>
            <div className="first-pillar-text">
              <h2 style={{color:'black'}}>Physical Activity</h2>
              <h3 style={{color:'gray'}} className='pillartext2'>Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.</h3>
            </div>
          </div>
          <div className='first-pillar'>
            <img src={pillar6} alt="1stpillar"/>
            <div className='measure'>
              <img src={clock} style={{width:24,height:21,backgroundColor:'transparent'}}/>
              <h2>62</h2>
              <span style={{color:'gray',fontSize:16,marginTop:4,backgroundColor:'transparent'}}>days</span>
            </div>
            <div className="first-pillar-text">
              <h2 style={{color:'black'}}>Substance abuse</h2>
              <h3 style={{color:'gray'}} className='pillartext2'>Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.</h3>
            </div>
          </div>

        </div>
        
    </section>
    </article>
    
    
  )
}

export default Home
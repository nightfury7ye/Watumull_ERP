import React from 'react';
import './home.css';
import ImageSlider from '../components/ImageSlider';
import AdvancedCarousel from '../components/AdvancedCarousel';
import 'react-slideshow-image/dist/styles.css';

import HeroSlider, {
  Slide,
  Nav,
  Overlay,
} from 'hero-slider';
// import { H2, H3 } from 'components/UI/Text';
// Assets
import elphinstone from '../assets/elphinstone-college.jpg';
import closeup from '../assets/closeup-uni.jpg';
import aerial from '../assets/aerial-MU.jpg';

import programmer from '../assets/articles/programmer.jpg';
import ardino from '../assets/articles/ardino.jpg';

import ensemble_poster from '../assets/articles/ensemble_poster.jpeg';
import hackathon from '../assets/articles/hackathon.jpeg';

import watu_banner from '../assets/Watu_banner2.jpeg';

import closeup_watu from '../assets/closeup_watu2.jpeg';
import big_watu from '../assets/big_watu.jpg';


const Home = () => {
  return (
        <div className='main_container'>
          <div className='hero_section'>
            <HeroSlider
              height={"65vh"}
              autoplay
              controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                // onSliding: (nextSlide) =>
                //   console.debug("onSliding(nextSlide): ", nextSlide),
                // onBeforeSliding: (previousSlide, nextSlide) =>
                //   console.debug(
                //     "onBeforeSliding(previousSlide, nextSlide): ",
                //     previousSlide,
                //     nextSlide
                //   ),
                // onAfterSliding: (nextSlide) =>
                //   console.debug("onAfterSliding(nextSlide): ", nextSlide)
              }}
            >
              {/* <Overlay
                style={{
                  display: 'flex',
                  flexFlow: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.33)',
                  textAlign: 'center',
                }}
              >
                <h2>
                  Watumull Institute
                </h2>
                <h3>
                  lorem ipsum ipsum lorem ipsumm
                </h3>
              </Overlay> */}
              <Slide
                // shouldRenderMask
                background={{
                  backgroundImageSrc: watu_banner,
                }}
              >
                <div className='slider_overlay_content'>
                  {/* <h2>
                    Watumull Institute ha
                  </h2>
                  <h3>
                    lorem ipsum ipsum lorem ipsumm
                  </h3> */}
                </div>
              </Slide>
              <Slide
                background={{
                  backgroundImageSrc: closeup_watu,
                  backgroundPosition: 'center center',
                }}
                >
                <div className='slider_overlay_content'>
                  {/* <h2>
                    Watumull Institute 2
                  </h2>
                  <h3>
                    lorem ipsum ipsum lorem ipsumm
                  </h3> */}
                </div>
              </Slide>
              
              {/* <Slide
                background={{
                  backgroundImageSrc: elphinstone,
                  backgroundPosition: 'center center',
                }}
                >
                <div className='slider_overlay_content'>
                  <h2>
                    Watumull Institute ha
                  </h2>
                  <h3>
                    lorem ipsum ipsum lorem ipsumm
                  </h3>
                </div>
              </Slide> */}
              <Nav />
            </HeroSlider>
          </div>

          <div className='section'>
            <div className='containerr'>
              <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                  <div className='icon'>
                    
                  </div>
                  <div className='content'>
                    <h2>AICTE Accredited</h2>
                  </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                  <div className='icon'>
                      
                  </div>
                  <div className='content'>
                    <h2>High Placement Ratio</h2>
                  </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                  <div className='icon'>
                      
                  </div>
                  <div className='content'>
                    <h2>Highly Qualified Faculties</h2>
                  </div>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
                  <div className='icon'>
                      
                  </div>
                  <div className='content'>
                    <h2>State of art Infrastructure</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className='princinfo_section'>
            <div className='princinfo_container'>
              <div className='PI_left'>
                <img className='princi_pic' src= {require("../assets/faculty/Extc1.png")}></img>
              </div>
              <div className='PI_right'>
                <h3>Principal's Desk</h3>
                <h1>Mrs. Sunita Sharma</h1>
                <div>
                <p>
                Department - Electronics & Tele-CommunicationEngineering.<br/>
                Date of Joining the Institution - 23rd March 1990<br/>
                Qualifications with Class/Grade - Ph.D. (SNDT Univ.), M. Tech (IIT Bombay)<br/>
                Total Experience in Years - 31Years<br/>
                Papers Published - 06
                </p>
                </div>
              </div>
            </div>
          </section>
          
          <section class="bg-03">
            <div class="container">
                <div class="row">
                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                      <div class="_lk_bg_cd">
                          <i class="fal fa-history"></i>
                        <div class="counting" data-count="967">42</div>
                        <h5>YEARS OF HISTORY</h5>
                      </div>
                  </div>

                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                      <div class="_lk_bg_cd">
                          <i class="fal fa-graduation-cap"></i>
                        <div class="counting" data-count="967">500+</div>
                        <h5>ACTIVE STUDENTS</h5>
                      </div>
                  </div>

                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                      <div class="_lk_bg_cd">
                          <i class="fal fa-globe"></i>
                        <div class="counting" data-count="967">2</div>
                        <h5>ONLINE COURSES</h5>
                      </div>
                  </div>

                  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                      <div class="_lk_bg_cd">
                          <i class="fal fa-registered"></i>
                        <div class="counting" data-count="967">50</div>
                        <h5>REGISTERED FACULTY</h5>
                      </div>
                  </div>
                </div>
            </div>
          </section>

          <section class="bg-04">
            <div class="container">
                <div class="row">
                  <div class="col-12">
                    <div class="heading">
                        <h2>Latest Events</h2>
                    </div>
                  </div> 
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <article class="article_container">
                          <div class="article_image" ></div>
                          <div class="lower_article_container">
                            <div class="article_content">
                              <h3>GIT and GITHUB workshop</h3>
                              <ol>
                                <li><span class="article_date">march 3rd, 2023</span></li>
                              </ol>
                              <p>Learn the importance of Git and GitHub and how they can revolutionize your coding projects through collaboration and version control.</p>
                            </div>
                          </div>     
                        </article>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <article class="article_container">
                          <div class="article_image" style={{ backgroundImage:`url(${ensemble_poster})` }}></div>
                          <div class="lower_article_container">
                            <div class="article_content">
                              <h3>Ensemble 2023</h3>
                              <ol>
                                <li> <span class="article_date">march 17th 18th, 2023</span></li>
                              </ol>
                              <p>
                                The wait is finally over!!!
                                We’re so excited to have you here!
                                So come along and join us for exciting games, competitions, cultural drama and of course great food.
                              </p>
                            </div>
                          </div>     
                        </article>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <article class="article_container">
                            <div class="article_image" style={{ backgroundImage:`url(${hackathon})` }}></div>
                          <div class="lower_article_container">
                            <div class="article_content">
                              <h3>Hackathon</h3>
                              <ol>
                                <li><span class="article_date">march 16th, 2023</span></li>
                              </ol>
                              <p>The Technical Club is thrilled to announce that we are organizing a hackathon inspired by the upcoming Ensemble fest at Watumull Institute.</p>
                            </div>
                          </div>     
                        </article>
                    </div>
                  </div>
            </div>
          </section>

          <section className='bg-05'>
            <div className='news_carousel_container'>
              <div className='image_carousel_contaner'>
                <div class="col-12">
                  <div class="heading">
                      <h2>Gallery</h2>
                  </div>
                </div> 
                {/* <AdvancedCarousel/> */}
                <ImageSlider/>
              </div>

              {/* <div className='news'>
                  <div className='news_container'>
                    <div className='news_nav'>
                      <div className='news_tabs'>
                        <p>All</p>
                      </div>
                      <div className='news_tabs news_tab_selected'>
                        <p>Important</p>
                      </div>
                      <div className='news_tabs'>
                        <p>Recent</p>
                      </div>
                    </div>
                    <div className='main_news_box'>
                      <div className='news_component'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                      <div className='news_component'>
                        <p>Lorem ipsum dolor sit ipsum dolor dolor lorem amet, consectetur adipiscing elit</p>
                      </div>
                      <div className='news_component'>
                        <p>Lorem ipsum dolor sit sit dolor amet, consectetur adipiscing elit</p>
                      </div>
                      <div className='news_component'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                      <div className='news_component'>
                        <p>Lorem ipsum consectetur dolor sit amet, consectetur adipiscing elit</p>
                      </div>
                    </div>
                  </div>
              </div> */}

            </div>
          </section>


        </div>
  )
}

export default Home;

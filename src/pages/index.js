import React, { useRef, useEffect, useState } from "react";
import Layout from "../components/layout";
import Services from "../components/services";
import SEO from "../components/seo";
import { Container } from 'react-grid-system';

import '../styles/app.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Reviews from "../components/reviews";
import video from "../images/Web-test-presentation-hd.mp4"

import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css'; // import css


const IndexPage = () => {

  const ref = useRef(null);
  const services = useRef();

  const [addClass, setAddClass] = useState(''); 
  const [videoState, setVideoState] = useState(null);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    setAddClass('loaded')
  }, []);

  // Scroll into next section on VideoEnd 
  const onVideoEnd = () => {
    services.current.scrollIntoView({behavior: "smooth", top: -40});
  }

  useEffect(() => {
    ref.current.subscribeToStateChange(setVideoState);
  }, [setVideoState]);

  useEffect(() => {
    if (videoState && videoState.ended && !hasEnded) {
      // Preventing onVideoEnd from being called multiple times
      setHasEnded(true);
      onVideoEnd();
    }
  }, [videoState, hasEnded, setHasEnded]);

  
  return (
    <div>
      <Layout>
        <SEO title="Angel Sanchez | Front-end Developer"/>
       
        <div className={`video-wrap ${addClass}`}>
           <Player fluid={false} preload={'auto'} playsInline={true} autoPlay muted ref={ref}> 
             <source src={video} />
             <ControlBar disableCompletely/>
           </Player>
         </div>

        <Container className={`content-container ${addClass}`}>
          <div ref={services}>
            <Services  />
          </div>
        </Container>

        <Container className={`content-container ${addClass}`}>
          <Reviews />
        </Container>


      </Layout>
    </div>  
  )

}

export default IndexPage;
 
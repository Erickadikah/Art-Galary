import React, {useState}from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, 
  HeroBg, 
  VideoBg, 
  HeroContent, 
  HeroH1,
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward, 
  ArrowRight, 
} from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover);
  }


  return (
    <div id='/home' >
    <HeroContainer>
      <HeroBg>
      <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
    <HeroContent >
        <HeroH1>Virtual Art selling Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and recieve $250 In
          credit towards your
          next payment.
        </HeroP>
        <HeroBtnWrapper>
        <Button to="signup" 
        onMouseEnter={onHover}
        onMouseLeave={onHover} 
        primary="true"
        dark='true'
        smooth={true}
        duration={500} 
          spy={true} 
          exact='true' 
          offset={-80} 
          activeClass='active'
        >
          Get started { hover ? <ArrowForward /> : <ArrowRight />}
        </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
    </div>
  )
}

export default HeroSection;

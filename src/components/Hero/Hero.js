import React, { useEffect, useState, useRef } from 'react'
import './Hero.scss'
import image from '../../assets/pope.jpg'
import thumbUp from '../../assets/thumb-up.svg'
import iconWiki from '../../assets/icon-wiki.png'


const CountDown = (props) => {
  return (
    <div className="hero__countdown">
      <div className="container">
        <div className="hero__countdown-content">
          <div className="hero__countdown-label">CLOSING IN</div>
          <div className="hero__countdown-count">
            <span>
              <strong>22</strong>&nbsp;days
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Hero = (props) => {
  const [offsetContent, setOffsetContent] = useState({ left: 0, top: 0 })
  const contentEl = useRef(null)

  useEffect(() => {
    const handleOffsetContent = () => {
      setOffsetContent({
        left: contentEl.current.offsetLeft,
        top: contentEl.current.offsetTop
      })
    }
    handleOffsetContent()

    window.addEventListener('resize', handleOffsetContent);
    return () => window.removeEventListener('resize', handleOffsetContent);
  }, [])

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="hero">
      <div className="container">
        <div className="hero__wrapper-content">
          <div className="hero__content" ref={contentEl}>
            <div style={{ 
              backgroundImage: `url(${image})`,
              left: `-${offsetContent.left}px`,
              top: `-${offsetContent.top}px` 
            }} className="hero__blurred" />
            <div className="hero__sub-headline">What’s your opinion on</div>
            <div className="hero__headline">Pope Francis?</div>
            <div className="hero__text">
              He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) 
            </div>
            <a className="hero__link" href="#wikipedia"> 
              <i className="hero__link-icon">
                <img src={iconWiki} alt="Icon Wikipedia"/>
              </i> 
              More information
            </a>
            <div className="hero__thumbs-title">What’s Your Verdict?</div>
          </div>
          <div className="hero__thumbs">
            <button className="hero__thumb hero__thumb--up">
              <img className="hero__thumb-icon" src={thumbUp} alt="Like"/>
            </button>
            <button className="hero__thumb hero__thumb--down">
              <img className="hero__thumb-icon" src={thumbUp} alt="Dislike"/>
            </button>
          </div>
        </div>
      </div>
      <CountDown />
    </div>
  );
}

export default Hero

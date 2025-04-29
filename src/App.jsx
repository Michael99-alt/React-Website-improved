import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import './App.css';
import body from './assets/body.png';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import {ArrowRightOutlined} from '@ant-design/icons';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if(window.scrollY > 50) {/*adjust to your liking*/
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-container">
      <Header isScrolled={isScrolled} />
      <main className="main-content">
        <div className="image-container">
          <img src={body} alt="Tropical Resort" className="full-screen-image" />
          <div className='social-icons'>
            <a  className='social-link facebook'>
              <FacebookOutlined style={{ fontSize: '20px', color: 'white' }} />
            </a>
            <a  className='social-link instagram'>
              <InstagramOutlined style={{ fontSize: '20px', color: 'white' }} />
            </a>
            <a  className='social-link twitter'>
              <TwitterOutlined style={{ fontSize: '20px', color: 'white' }} />
            </a>
          </div>
          <div className="text-overlay">
            <p>Retreat To a Tropical Sanctuary Turquoise Waves And Bask In The Blissful Respite Of Island Life</p>
          </div>
          <div>
          <button className="book-now-button">
          <span className="book-now-text">Book Now</span>
          <span className="arrow-icon">
            <ArrowRightOutlined style={{ fontSize: '20px' }} />
          </span>
          </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

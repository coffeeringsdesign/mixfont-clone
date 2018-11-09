import React from 'react';
import Header from './Header';
import AboutContent from './AboutContent';

function AboutUs(){

  return (
    <div className='aboutUsStyle'>
        <style jsx>{`
         .aboutUsStyle {
         }
        `}</style>
      <Header/>
      <AboutContent/>
    </div>
  );
}

export default AboutUs;

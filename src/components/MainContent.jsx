import React from 'react';
import MainTop from './MainTop';
import MainImage from './MainImage';

function MainContent(){

  return (
    <div className='mainContentStyle'>
        <style jsx>{`
         .mainContentStyle {
         }
        `}</style>
      <MainTop/>
      <MainImage/>
    </div>
  );
}

export default MainContent;

import React from 'react';
import Header from './Header';
import MainContent from './MainContent';

function Welcome(){
  return (
    <div className= 'welcomeStyle'>
      <style jsx>{`
          .welcomeStyle {
            margin: 0 40px;
          }
            `}</style>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default Welcome;

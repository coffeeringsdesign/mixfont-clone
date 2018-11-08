import React from 'react';
import MainTopButton  from './MainTopButton';

function MainTop(){
  return (
    <div className='mainTopStyle'>
      <style jsx>{`
          .mainTopStyle {
            text-align: center;
            margin-top: 110px;
          }
          .mainTitleStyle {
            font-family: 'Rubik';
            font-size: 60px;
            font-weight: 700;
          }
          .mainSubTitleStyle {
            color: grey;
            font-family: 'Roboto Mono';
            font-size: 23px;
            margin-top: 25px;
          }
            `}</style>
          <div className='mainTopStyle'>
            <h1 className='mainTitleStyle'>A modern font generator</h1>
            <h3 className='mainSubTitleStyle'>Mixfont is a fun and simple way to discover <br></br>and visualize new fonts.</h3>
            <MainTopButton/>
          </div>
    </div>
  );
}

export default MainTop;

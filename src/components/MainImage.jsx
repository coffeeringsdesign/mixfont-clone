import React from 'react';
import weirdPaperImage from '../assets/images/wall.jpg';

function MainImage(){

  return (
    <div className='mainImageStyle'>
      <style jsx>{`
          .mainImageStyle {
            text-align: center;
            margin-left: 0 0 !important;
            margin-top: 110px;
            height: 400px;
            overflow: hidden;
            display: flex;
            align-items: center;
          }
          .mainPaperImage {
            width: 100vw;

          }
            `}</style>
          <img className='mainPaperImage' src={weirdPaperImage}/>
    </div>
  );
}

export default MainImage;

import React from 'react';
import weirdPaperImage from '../assets/images/wall.jpg';

function MainImage(){

  return (
    <div className='mainImageStyle'>
      <style jsx>{`
          .mainImageStyle {
            text-align: center;
            height: 400px;
            overflow: hidden;
            display: flex;
            align-items: center;
            margin: 110px 0 0 0;
          }
          .mainPaperImage {
            width: 100%;

          }
            `}</style>
          <img className='mainPaperImage' src={weirdPaperImage}/>
    </div>
  );
}

export default MainImage;

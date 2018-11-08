import React from 'react';

function MainTopCounter(){
  return (
    <div className='mainTopCounterStyle'>
      <style jsx>{`
          .mainTopCounterStyle {
            margin-top: 66px;
            display: flex;
            justify-content: space-between;
            width: 700px;
            margin-left: auto;
            margin-right: auto;

          }
          .counterNumberStyle {
            font-family: 'Rubik';
            font-size: 30px;
            font-weight: 500;
          }
          .counterTextStyle {
            font-family: 'Roboto Mono';
            font-size: 15px;
            font-weight: 300;
            letter-spacing: -.5px;
          }
          `}</style>
        <div>
          <h2 className='counterNumberStyle'>1k+</h2>
          <h4 className='counterTextStyle'>unique fonts</h4>
        </div>
        <div>
          <h2 className='counterNumberStyle'>600k+</h2>
          <h4 className='counterTextStyle'>pairings</h4>
        </div>
        <div>
          <h2 className='counterNumberStyle'>132</h2>
          <h4 className='counterTextStyle'>languages</h4>
        </div>

      </div>
    );
  }

  export default MainTopCounter;

import React from 'react';

function MainTopButton(){
  return (
    <div className='mainTopStyle'>
      <style jsx>{`
          .mainTopButtonStyle {
            margin-top: 50px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
            background-color: black;
            color: white;
            padding: 20px;
            width: 350px;
            border-radius: 5px;
            font-family: 'Rubik';
            font-weight: 400;
            font-size: 23px;
            letter-spacing: .5px;
          }
          .textUnderButtonStyle {
            font-family: 'Roboto Mono';
            font-size: 17px;
            margin-top: 15px;
            font-weight: 400; 
          }
            `}</style>
          <div >
            <h3 className='mainTopButtonStyle'>Start the Generator!</h3>
            <p className='textUnderButtonStyle'>Or, view the top pairings</p>
          </div>
    </div>
  );
}

export default MainTopButton;

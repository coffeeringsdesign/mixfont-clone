import React from 'react';
import mixfontLogo from '../assets/images/logo.png';

function Logo(){
  return (
    <div className='logoStyle'>
      <style jsx>{`
          .logoStyle {
            display: flex;
            align-items: center;

          }
          .logoTextStyle {
            font-family: 'Jaldi', sans-serif;
            font-size: 30px;
            letter-spacing: 1px;
          }
          .logoImageStyle {
            width: 30px;
            height: 30px;
            margin-right: 20px;
          }
            `}</style>
          <img className='logoImageStyle' src={mixfontLogo}/>
          <h1 className='logoTextStyle'>MIXFONT</h1>
    </div>
  );
}

export default Logo;

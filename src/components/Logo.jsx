import React from 'react';
import mixfontLogo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

function Logo(){
  return (
    <div className='logoStyle'>
      <style jsx>{`
          .logoStyle {
            display: flex;
            align-items: center;

          }
          .logoTextStyle {
            font-family: Rubik;
            font-size: 23px;
            letter-spacing: 1px;

          }
          .logoImageStyle {
            width: 30px;
            height: 30px;
            margin-right: 20px;
          }
            `}</style>
          <img className='logoImageStyle' src={mixfontLogo}/>
          <h1 className='logoTextStyle'><Link to='/'>MIXFONT</Link></h1>
    </div>
  );
}

export default Logo;

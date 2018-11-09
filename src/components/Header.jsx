import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div className='headerStyle'>
      <style jsx>{`
          .headerStyle {
            width: 94%;
            border-bottom: 1px solid #efefef;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
            margin-left: auto;
            margin-right: auto;
            overflow: hidden;

          }
          .headerRightStyle {
            display: flex;
            justify-content: space-between;
            width: 200px;
            color: grey;
            font-family: 'Rubik';
            font-weight: 500;
          }
            `}</style>
          <Logo/>
          <div className='headerRightStyle'>
            <h3><Link to='/aboutus'>Top pairings</Link></h3>
            <h3>Sign in</h3>
          </div>
    </div>
  );
}

export default Header;

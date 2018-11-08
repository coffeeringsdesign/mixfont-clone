import React from 'react';
import Logo from './Logo';

function Header(){
  return (
    <div className='headerStyle'>
      <style jsx>{`
          .headerStyle {
            width: 100%;
            border-bottom: 1px solid lightgray;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
            margin-left: 40px;
            margin-right: 40px;
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
            <h3>Top pairings</h3>
            <h3>Sign in</h3>
          </div>
    </div>
  );
}

export default Header;

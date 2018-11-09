import React from 'react';
import PropTypes from 'prop-types';

function AboutProfile(props){
  console.log(props.img);
  return (
    <div className='aboutProfileStyle'>
        <style jsx>{`
         .aboutProfileStyle {
         }
        `}</style>
      <img src={props.img}/>
      <div>
        <h4>{props.name}</h4>
        <h6>{props.position}</h6>
      </div>
    </div>
  );
}

AboutProfile.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  img: PropTypes.string,
  key: PropTypes.number.isRequired,
}

export default AboutProfile;

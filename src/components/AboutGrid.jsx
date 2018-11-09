import React from 'react';
import AboutProfile from './AboutProfile';
import jill from '../assets/images/jill.jpg';
import josh from '../assets/images/josh.jpg';
import kruti from '../assets/images/kruti.jpg';
import linda from '../assets/images/linda.jpg';
import mike from '../assets/images/mike.jpg';
import rachel from '../assets/images/rachel.jpg';

const masterEmployeeList = [
  {
    name: 'Jill McMaster',
    position: 'CEO',
    img: jill
  },
  {
    name: 'Josh Stalish',
    position: 'Vice President',
    img: josh
  },
  {
    name: 'Kruti Iwamlan',
    position: 'Accountant',
    img: kruti
  },
  {
    name: 'Linda Kowalski',
    position: 'Director of HR',
    img: linda
  },
  {
    name: 'Mike Meyers',
    position: 'Acquisitions',
    img: mike
  },
  {
    name: 'Rachel Travelisa',
    position: 'Sales',
    img: rachel
  },
]

function AboutGrid(){
  return (
    <div className='aboutGridStyle'>
        <style jsx>{`
         .aboutGridStyle {
         }
        `}</style>
      {masterEmployeeList.map((employee, index) =>
      <AboutProfile name={employee.name}
        position={employee.position}
        img={employee.img}
        key={index}/>
      )}
      <AboutProfile/>
    </div>
  );
}

export default AboutGrid;

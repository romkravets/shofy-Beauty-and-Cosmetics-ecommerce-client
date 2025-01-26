import React, { useState } from 'react';
import Link from 'next/link';

const Accordion = ({ title, content, link }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        {title}
        <div>{isActive ? <svg 
        fill="#000000" height="20px" 
        width="10px" 
        version="1.1"
        viewBox="0 0 330 330"
        transform="rotate(-90)">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g><g id="SVGRepo_iconCarrier">
              <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg> : <svg 
        fill="#000000" height="20px" 
        width="10px" 
        version="1.1"
        viewBox="0 0 330 330"
        transform="rotate(90)">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
            </g><g id="SVGRepo_iconCarrier">
              <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
          }</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          <span>{content}</span>
          {link && <Link color={{color: '#821F40', fontWeight: 'bold'}} href={link} target='_blank'>@beautybox_nk</Link>}
        </div>
      )}
    </div>
  );
};

export default Accordion;
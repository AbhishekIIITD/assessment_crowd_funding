import React from 'react';
import Navbar from '@/components/NavBar'; // Assuming correct path to Navbar component
// import 'src/pages/about.css';
const About = () => {
  return (
    <div className="about-container" >
      <Navbar />

      <div className="about-content">
        <div className="image-container">
          <img src="/abt1.webp" alt="contactus" style={{ width: '50%' }} />
        </div>
        <div className="text-container">
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
            accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
            commodi illum quidem neque tempora nam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

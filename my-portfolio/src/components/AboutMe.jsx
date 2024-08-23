import React from 'react';
import myImage from '../assets/chromebook.jpg'; // Adjust the path as necessary

function AboutMe() {
  return (
    <section className="about-me-section">
      <img src={myImage} alt="Your Name" className="about-me-image" />
      <div>
        <h2>About Me</h2>
        <p>I am a full stack web developer and a soon to be graduate of Northwestern's Full Stack Web Development Bootcamp. With a strong foundation in both front-end and back-end technologies, I am passionate about creating dynamic and user-friendly web applications. In my free time, I enjoy exploring my hobbies, which include shouting at my old german car, drinking coffee, and diving into computer games like Destiny 2 and Minecraft.</p>
      </div>
    </section>
  );
}

export default AboutMe;
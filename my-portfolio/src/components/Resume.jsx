import React from 'react';
import resumePDF from '../assets/resume.pdf';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a href={resumePDF} download className="download-resume">Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        {/* Add more skills */}
      </ul>
    </section>
  );
}

export default Resume;
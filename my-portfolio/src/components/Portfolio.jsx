import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: 'path/to/image1.jpg', deployedLink: 'https://project1.com', githubLink: 'https://github.com/project1' },
    // Add more projects...
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
}

export default Portfolio;

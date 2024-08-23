import React from 'react';
import Project from './Project';
import myEmpGif from '../assets/employee-manager.gif';
import kanbanBoard from '../assets/kanban-board.png';
import noteTaker from '../assets/note-taker-app.gif';
import textEditor from '../assets/text-editor.gif';

function Portfolio() {
  const projects = [
    { title: 'Note Taker', image: noteTaker, deployedLink: 'https://project1.com', githubLink: 'https://github.com/project1' },
    { title: 'Kanban Board', image: kanbanBoard, deployedLink: 'https://project2.com', githubLink: 'https://github.com/ogchromebook/kanban-board' },
    { title: 'CLI Employee Manager', image: myEmpGif, deployedLink: 'https://project3.com', githubLink: 'https://github.com/project3' }, // Using GIF here
    { title: 'Text Editor', image: textEditor, deployedLink: 'https://text-editor-lrf0.onrender.com', githubLink: 'https://github.com/ogchromebook/text-editor' },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
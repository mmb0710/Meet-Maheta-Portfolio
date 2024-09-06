import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faNetworkWired, faMobileAlt, faUtensils, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'; // Remove faGithub from here
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // Correct import for GitHub icon


const Projects = () => {
  useEffect(() => {
    const srLeft = ScrollReveal({
      origin: 'left',
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    const srRight = ScrollReveal({
      origin: 'right',
      distance: '100px',
      duration: 1000,
      delay: 200,
      reset: false,
    });

    srLeft.reveal('.reveal-left-projects', { interval: 200 });
    srRight.reveal('.reveal-right-projects', { interval: 200 });
  }, []);

  return (
    <section className="project-content" id="projects">
      <div className="container">
        <div className="project-title">
          <h4>My Projects</h4>
          <p>Discover my real-world projects where I applied technical skills and problem-solving capabilities</p>
        </div>
        <div className="projects">
          {/* 1st Project */}
          <div className="project reveal-left-projects">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faCode} className="project-icon" />
            </div>
            <h4>Python-Based CSV Data Reader</h4>
            <p>
              A Python application using Pandas to read, manipulate, and visualize CSV data. Implemented features for filtering, sorting, and displaying results in an interactive manner.
            </p>
            <div className="project-links">
              <a href="https://github.com/mmb0710/Python-Based-CSV-Data-Reader.git" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
          {/* 2nd Project */}
          <div className="project reveal-right-projects">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faDatabase} className="project-icon" />
            </div>
            <h4>COBOL Employee Data Management System</h4>
            <p>
              Designed a COBOL-based program to handle employee data entry, storage, and reporting functionalities. Developed flowcharts to map system design and verified program execution with test data.
            </p>
            <div className="project-links">
              <a href="https://github.com/mmb0710/COBOL-Employee-Data-Management-System.git" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
          {/* 3rd Project */}
          <div className="project reveal-left-projects">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faNetworkWired} className="project-icon" />
            </div>
            <h4>Network Services Portal with Django</h4>
            <p>
              Created a web portal using Python's Django framework for user management and service administration. Integrated RESTful APIs for communication between the frontend and backend systems.
            </p>
          </div>
          {/* 4th Project */}
          <div className="project reveal-right-projects">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faNetworkWired} className="project-icon" />
            </div>
            <h4>Infra Portal Development (Sintex Industries)</h4>
            <p>
              Contributed to the development of an Infra Portal for asset management at Sintex Industries. Built database integration with PHP and MySQL, and implemented LAN diagrams for internal IT automation.
            </p>
            <div className="project-links">
              <a href="http://www.sintex.in/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faExternalLinkAlt} /> Website
              </a>
            </div>
          </div>
          {/* 5th Project */}
          <div className="project reveal-left-projects">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faMobileAlt} className="project-icon" />
            </div>
            <h4>Food Order Application (Android Studio)</h4>
            <p>
              Developed a food ordering mobile application using Android Studio and Java. Implemented backend APIs using Postman for data management and customer interactions, with full integration for order processing.
            </p>
            <div className="project-links">
              <a href="https://github.com/mmb0710/Food-Order-Application-Android-Studio.git" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
          {/* 6th Project */}
          <div className="project reveal-right-projects">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={faUtensils} className="project-icon" />
            </div>
            <h4>Food Wastage Reproduce Project (Java Servlet)</h4>
            <p>
              Created a Java Servlet-based project aimed at managing food wastage. Implemented a system for collecting data on leftover food and redistributed resources efficiently through web-based forms and reports.
            </p>
            <div className="project-links">
              <a href="https://github.com/mmb0710/Food-Wastage-Reproduce-Project-Java-Servlet.git" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

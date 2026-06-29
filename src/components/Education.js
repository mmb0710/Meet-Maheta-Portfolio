import React from 'react';

function Education() {
  return (
    <section className="education-content" id="education">
      <div className="container">
        <div className="row">
          <div className="education">
            <h3 className="title">Education</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">Computer Programming Diploma — 3.55 GPA</h3>
                    <h4 className="timeline-title">Algonquin College, Ottawa, Canada</h4>
                    <h4 className="timeline-title timeline-date">2023 – 2025</h4>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">Higher Secondary Certificate (HSC) — 78%</h3>
                    <h4 className="timeline-title">K.T.K.M. Higher Secondary High School</h4>
                    <h4 className="timeline-title timeline-date">2020 – 2021</h4>
                  </div>
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">Secondary School Certificate (SSC) — 78%</h3>
                    <h4 className="timeline-title">K.T.K.M. Higher Secondary High School</h4>
                    <h4 className="timeline-title timeline-date">2018 – 2020</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="internship">
            <h3 className="title">Professional Experience</h3>
            <div className="row">
              <div className="timeline-box">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-title">Web Portal Developer — IT Department</h3>
                    <h4 className="timeline-title">Sintex Industries Limited (Yarn Division)</h4>
                    <h4 className="timeline-title timeline-date">January 2021 – January 2023</h4>
                    <ul className="timeline-text">
                      <li>Designed and maintained dynamic features for the Infra Portal using HTML, CSS, JavaScript, and PHP.</li>
                      <li>Built database-driven applications for asset management and invoice processing with PHP and MySQL.</li>
                      <li>Developed real-time dashboards for IT infrastructure monitoring using Chart.js and D3.js.</li>
                      <li>Improved web application security through user authentication, input validation, and secure form handling.</li>
                      <li>Delivered data migration, system integration, and automation solutions that improved internal workflow efficiency.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

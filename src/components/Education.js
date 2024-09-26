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
                                    {/* Timeline-item 1 */}
                                    <div className="timeline-item">
                                        <div className="circle-dot"></div>
                                        <h3 className="timeline-title">SSC - 78%</h3>
                                        <h4 className="timeline-title">K.T.K.M. Higher Secondary High School</h4>
                                        <h4 className="timeline-title">
                                            <i className="fa fa-calendar"></i> 2018-2020
                                        </h4>
                                    </div>
                                    {/* Timeline-item 2 */}
                                    <div className="timeline-item">
                                        <div className="circle-dot"></div>
                                        <h3 className="timeline-title">HSC - 78%</h3>
                                        <h4 className="timeline-title">K.T.K.M. Higher Secondary High School</h4>
                                        <h4 className="timeline-title">
                                            <i className="fa fa-calendar"></i> 2020-2021
                                        </h4>
                                    </div>
                                    {/* Timeline-item 3 */}
                                    <div className="timeline-item">
                                        <div className="circle-dot"></div>
                                        <h3 className="timeline-title">
                                            Computer Programming Diploma - 3.55 CGPA
                                        </h3>
                                        <h4 className="timeline-title">Algonquin College, Ottawa, Canada</h4>
                                        <h4 className="timeline-title">
                                            <i className="fa fa-calendar"></i> 2023-2025
                                        </h4>
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
                                    {/* Internship Timeline-item */}
                                    <div className="timeline-item">
                                        <div className="circle-dot"></div>
                                        <h3 className="timeline-title">Web Portal Developer - IT Department</h3>
                                        <h4 className="timeline-title">Sintex Industries Limited (Yarn Division)</h4>
                                        <h4 className="timeline-title">
                                            <i className="fa fa-calendar"></i> January 2021 - January 2023
                                        </h4>
                                        <ul className="timeline-text">
                                            <li>Led the design, development, and maintenance of dynamic features for the Infra Portal, using HTML, CSS, JavaScript, and PHP.</li>
                                            <li>Designed and implemented database-driven web applications, including asset management and invoice processing systems, utilizing PHP and MySQL.</li>
                                            <li>Enhanced the security of web applications by implementing robust user authentication, secure form submissions, and data validation techniques.</li>
                                            <li>Developed real-time dashboards for monitoring IT infrastructure performance, utilizing JavaScript libraries such as Chart.js and D3.js.</li>
                                            <li>Conducted troubleshooting and debugging to ensure optimal performance, reducing website downtime and increasing the efficiency of system resources.</li>
                                            <li>Provided IT support and implemented solutions for data migration, system integration, and automation projects, resulting in smoother project execution and improved workflow.</li>
                                            
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

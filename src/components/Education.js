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
                        <h3 className="title">Internship</h3>
                        <div className="row">
                            <div className="timeline-box">
                                <div className="timeline">
                                    {/* Internship Timeline-item */}
                                    <div className="timeline-item">
                                        <div className="circle-dot"></div>
                                        <h3 className="timeline-title">Web Portal Developer - IT Department</h3>
                                        <h4 className="timeline-title">Sintex Industries Limited (Yarn Division)</h4>
                                        <h4 className="timeline-title">
                                            <i className="fa fa-calendar"></i> August 2022 - January 2023
                                        </h4>
                                        <li className="timeline-text">
                                            Developed and maintained web portal features for the Infra Portal using HTML, CSS, and JavaScript. 
                                            Built data entry forms for asset management and invoice data using PHP and MySQL. 
                                            Contributed to automation projects and IT support, gaining practical experience in web development and system automation.
                                        </li>
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

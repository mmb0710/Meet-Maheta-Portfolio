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
                                        <h3 className="timeline-title">SSC-78%</h3>
                                        <h4 className="timeline-title">K.T.K.M. Higher Secondary High Secondary School</h4>
                                        <h4 className="timeline-title">
                                            <i className="fa fa-calendar"></i> 2018-2020
                                        </h4>
                                    </div>
                                    {/* Timeline-item 2 */}
                                    <div className="timeline-item">
                                        <div className="circle-dot"></div>
                                        <h3 className="timeline-title">HSC-78%</h3>
                                        <h4 className="timeline-title">K.T.K.M. Higher Secondary High Secondary School</h4>
                                        <h4 className="timeline-title">
                                            <i className="fa fa-calendar"></i> 2020-2021
                                        </h4>
                                    </div>
                                    {/* Timeline-item 3 */}
                                    <div className="timeline-item">
                                        <div className="circle-dot"></div>
                                        <h3 className="timeline-title">
                                            Computer Programming Diploma 3.11 CGPA
                                        </h3>
                                        <h4 className="timeline-title">Algonquin College, Ottawa, CA</h4>
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
                                        <h3 className="timeline-title">SOFTWARE DEVELOPMENT</h3>
                                        <h4 className="timeline-title">FLARIAL TECHNOLOGY</h4>
                                        <h4 className="timeline-title">
                                            <i className="fa fa-calendar"></i> JUNE-2022
                                        </h4>
                                        <li className="timeline-text">
                                            Proficient in Android app development, with expertise in Java and building basic applications. Experienced in creating intuitive design and layout files. Completed a two-week internship, gaining practical skills and knowledge in the field.
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

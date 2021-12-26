import React, { useState } from 'react';

function Work(props) {

    const [content, setContent] = useState(false)
    
    const [skills, setSkills] = useState([
        { id: '1', name: "Angular", percent: 90 },
        { id: '2', name: "ReactJS", percent: 90 },
        { id: '3', name: "VueJS", percent: 80 },
        { id: '4', name: "NodeJS", percent: 70 },
    ])

    useState(() => {
        setTimeout(() => {
            setContent(true)
        }, 400)
    }, [])

    return (
        <div className="group-content-right scroll-height">
            {
                !content && (
                    <div className="bg-mobile"></div>
                )
            }
            {
                content &&
                <div className="pd-bottom-2rem">
                    <div>
                        <h1>Resume</h1>
                        <h2>Software Engineer</h2>
                    </div>
                    <div className="sub-titl-profile">
                        <span style={{ color: "#C175F5" }}>4 years in University</span>
                        &nbsp;&nbsp;<span style={{ color: "#e2e2e2" }}>/</span>&nbsp;&nbsp;
                        <span style={{ color: "#C175F5" }}>3 years in Coding</span>
                        &nbsp;&nbsp;<span style={{ color: "#e2e2e2" }}>/</span>&nbsp;&nbsp;
                        <span style={{ color: "#C175F5" }}>1 years Experience</span>
                    </div>
                    <div className="mr-top-2rem">
                        <div className="font-custom">Languages have been learned through C, C++, C#, PHP, HTML, CSS, Javascript.</div>
                        <div className="font-custom"> Knowledge of data structures, databases, OOP, logical analysis and building connection methods between databases and 
                            applications</div>
                        <div className="font-custom">Being a Fullstack Developer can do both Front-end and Back-end but the strength is still Front-end.</div>
                        <div className="font-custom">Learned some Frameworks: ReactJS, Angular, VueJS, NodeJS, Bootstrap, React Native, Laravel, ASP.NET.</div>
                        <div className="font-custom">Learned data query technique: RESTful API, GraphQL.</div>
                        <div className="font-custom">Database: SQL server, MongoDB, PostgreSQL.</div>
                        <div className="font-custom">Tool: Github</div>
                    </div>
                    <div className="hr-line"></div>
                    <div className="d-flex">
                        <div className="color-main"><i className="fa fa-bookmark" style={{ fontSize: "36px"}}></i></div>
                        <div className="mr-left-1rem" style={{ fontSize: "26px"}}>SKILLS</div>
                    </div>
                    {
                        skills && skills.map((e) => (
                            <div className="group-skill-percent mr-top-2rem" key={e.id}>
                                <div className="d-flex justify-content-between">
                                    <div>{e.name}</div>
                                    <div className="color-main">{e.percent}%</div>
                                </div>
                                <div className="skill-back"></div>
                                <div className="skill-front" style={{ width: `${e.percent}%` }}></div>
                            </div>
                        ))
                    }
                    <br />

                    <div className="hr-line"></div>
                    <div className="d-flex">
                        <div className="color-main"><i className="fa fa-graduation-cap" style={{ fontSize: "36px"}}></i></div>
                        <div className="mr-left-1rem" style={{ fontSize: "26px"}}>EDUCATION</div>
                    </div>
                    <h3>Ho Chi Minh City University of Foreign Languages and Information Technology</h3>
                    <div className="color-gray">Bachelor's Degree in Information Technology</div>
                    <div className="color-gray mr-top-1rem">2018 - 2022</div>

                    <div className="hr-line"></div>
                    <div className="d-flex">
                        <div className="color-main"><i className="fa fa-briefcase" style={{ fontSize: "36px"}}></i></div>
                        <div className="mr-left-1rem" style={{ fontSize: "26px"}}>EXPERIENCE</div>
                    </div>
                    <h3>TMA Solutions</h3>
                    <div className="color-gray">Fresher Front-End Developer</div>
                    <div className="color-gray mr-top-1rem">Start: 01/12/2021</div>
                </div>
            }
        </div>
    );
}

export default Work;
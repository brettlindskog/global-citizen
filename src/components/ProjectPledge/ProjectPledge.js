import React from 'react';

import './ProjectPledge.css';

const ProjectPledge = (props) => (
    <article className="ProjectPledge" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info"></div>
    </article>
);

export default ProjectPledge;
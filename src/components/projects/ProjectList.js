import React from 'react';
import ProjectSummary from './ProjectSummary'


export default function CenteredGrid(props) {
    let projects = props.projects.projects
    return (
        <div>
            {projects && projects.map(item=> {
                return (
                    <ProjectSummary project={item} key={item.id}/>
                )
            })}
        </div >
    );
}

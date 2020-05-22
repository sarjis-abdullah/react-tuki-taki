import React from 'react';
import ProjectSummary from './ProjectSummary'


export default function CenteredGrid() {
    const todo = [
        { title: 'Test Title' },
        { title: 'Test Title' },
        { title: 'Test Title' },
        { title: 'Test Title' },
    ]
    return (
        <div>
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
            <ProjectSummary/>
        </div >
    );
}

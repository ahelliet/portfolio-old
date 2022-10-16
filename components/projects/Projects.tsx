import React from "react";
import { Project } from '../../graphql';
import ProjectCard from "./ProjectCard";

interface IProjects {
    projects: Partial<Project>[]
}

const Projects: React.FC<IProjects> = ({ projects }) => {   
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Mes Projets
                </h1>
            </div>
            {/* Grid starts here */}
            <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
                    {projects.map((project: Partial<Project>, index: number) => (
                        <ProjectCard
                            project={project}
                            number={index + 1}
                            key={project.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects
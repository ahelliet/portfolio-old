import Image from "next/image";
import { Project } from "../../graphql";

interface IProject {
    project: Partial<Project>
    number: Number
}

const ProjectCard: React.FC<IProject> = ({ project, number }) => {
    //TODO: replace img with next Image 
    return (
        <a href={String(project.link)} className="w-full block shadow-2xl">
            <div className="relative overflow-hidden">
                <div className="h-72 object-cover">
                    <img
                        src={project.image?.url as string}
                        // layout="responsive"
                        width={Number(project.image?.width)}
                        height={Number(project.image?.height)}
                        alt={String(project.name)}
                        className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
                    />
                </div>
                <h1 className="absolute top-10 left-10 text-black font-bold text-xl rounded-md px-2">
                    {project.name}
                </h1>
                <h1 className="absolute bottom-10 left-10 text-orange-500 font-bold text-xl">
                    {String(number > 9 ? number : "0" + number)}
                </h1>
            </div>
        </a>
    );
};

export default ProjectCard
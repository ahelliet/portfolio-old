import React from "react";
import { Author, Skill, Social } from "../../graphql";
import SkillCard from "./SkillCard";

interface IAboutMe {
    me: Author,
    skills: Partial<Skill>[]
    socials: any
}

const AboutMe: React.FC<IAboutMe> = ({ me, skills, socials }) => {    
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left mb-12">
                    À propos de moi.
                </h1>
            </div>
            <div className="bg-[#F1F1F1] -mt-4 dark:bg-gray-900">
                <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
                        style={{ lineHeight: "3rem" }}
                    >
                        {me.intro}
                    </p>
                </div>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
                <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    {/* Social Buttons */}
                    <div className="inline-flex flex-col">
                        <div>
                            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Me Contacter
                            </h1>
                            <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                                Besoin de plus {"d'"} informations, envoyer moi un {" "}
                                <a
                                    href={`mailto:${String(socials[0].email)}`}
                                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300 hover:text-orange-500"
                                >
                                    mail
                                </a>{" "}.
                            </p>
                        </div>
                        <div className="mt-8">
                            <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Formation & emploi
                            </h1>
                            <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                                Je suis actuellement à la recherche {"d'un"} poste ou {"d'une"} alternance en tant que développeur full stack au sein de {"l'école"} MyDigitalSchool {"d'Annecy"}. Si mon profil vous intéresse, consultez mon <a
                                    href="/cv.pdf"
                                    target="__blank"
                                    download={'CV.pdf'}
                                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300 hover:text-orange-500"
                                >
                                    CV
                                </a>
                                {" "}
                                !
                            </p>
                        </div>

                        {/* Social Links */}
                        <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                            Réseaux sociaux
                        </h1>
                        <div className="mt-4 ml-4">
                            <div className="flex flex-row justify-start items-center cursor-pointer">
                                <a
                                    href={socials[0].gitlabUrl as string}
                                    className="flex flex-row items-center space-x-4 group"
                                >
                                    <div className="my-4">&rarr;</div>
                                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                        <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                                        GitLab
                                    </p>
                                </a>
                            </div>
                            <div className="flex flex-row justify-start items-center cursor-pointer">
                                <a
                                    href={socials[0].linkedinUrl as string}
                                    className="flex flex-row items-center space-x-4 group"
                                >
                                    <div className="my-4">&rarr;</div>
                                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                                        <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                                        LinkedIn
                                    </p>
                                </a>
                            </div>
                        </div>

                    </div>
                    {/* Text area */}
                    <div className="col-span-1 md:col-span-2">
                        <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 ">
                            {me.bio}
                        </p>

                        {
                            // On récupère toutes les catégories de compétences dans un tableau de valeurs uniques
                            [...new Set(skills
                                .sort((a, b) => b.skillCategory!.localeCompare(a.skillCategory!))
                                .sort((a, b) => b.skillCategory!.localeCompare(a.skillCategory!))
                                .map(({ skillCategory }) => skillCategory)
                            )].map((category: any, index: number) => {
                                // Pour chaque catégorie on retourne un titre
                                return (
                                    <div key={index} className="mt-6">
                                        <h2 className='text-center uppercase text-2xl py-8 font-semibold'>{category}</h2>
                                        <div className='flex gap-x-4 gap-y-6 justify-center flex-wrap'>
                                            {/* On filtre les compétence par leur catégorie, on les trie par "order" croissant puis on itère sur chaque compétence et on retourne un SkillComponent */}
                                            {skills
                                                .sort((a, b) => {
                                                    return a.order! - b.order!
                                                })
                                                .filter(skill => skill.skillCategory === category)
                                                .map((skill: Partial<Skill>) => {
                                                    return (
                                                        <SkillCard key={skill.id} skill={skill} />
                                                    )
                                                })}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe
import { projects } from "@/constants";
import { CardBody, CardContainer, CardItem } from "./3DCard";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";

const Projects = () => {
    return (
        <section className='relative sm:mx-6 mx-4 my-14 pt-1 flex flex-col items-center' id='projects'>
            <div className='w-fit my-14 flex flex-col items-center'>
                <p className='uppercase mb-4 text-zinc-400'>my work</p>
                <h2 className='sm:text-4xl text-2xl font-bold text-center text-[#915EFF]'>Projects</h2>
            </div>
            <p className="max-w-3xl mb-16 sm:text-2xl">
                Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
            </p>
            <div className="flex flex-wrap gap-10 w-full max-w-screen justify-center">
                {projects.map(project => (
                    <Card
                        key={project.name}
                        project={project}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects


function Card({ project }: { project: any }) {
    return (
        <CardContainer className="inter-var sm:h-auto">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-2xl font-bold text-neutral-600 dark:text-white"
                >
                    {project.name}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {project.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full max-h-60 my-8">
                    <img
                        src={project.image}
                        className="w-full  object-contain rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="mt-[4rem]"/>
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        onClick={() => window.open(project.source_code_link, "_blank")}
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        <Github />
                    </CardItem>
                    {project.deploy_link && <CardItem
                        translateZ={20}
                        as={Link}
                        onClick={() => window.open(project.deploy_link, "_blank")}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>}
                </div>
            </CardBody>
        </CardContainer>
    );
}

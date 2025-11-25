    import React from "react";
    import { projects } from "../../Data/project";
    import Project from "./Project";
import ShinyButton from "../../Components/ShinyButton";
    const ProjectsPage = () => {
        const [showMore, setShowMore] = React.useState(false);

        return (
            <div className="">
                <div className=" mx-auto">
                    {/* TITLE */}
                    <div className="flex justify-center mb-10">
                        <ShinyButton className="lg:text-xl text_pri text-1xl font-bold uppercase ">
                            Projects
                        </ShinyButton>
                    </div>
                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {(showMore ? projects : projects.slice(0, 3)).map((project) => (
                            <Project project={project} key={project.id} />
                        ))}
                    </div>

                    {/* BUTTON */}
                    <div className="flex justify-center my-10">
                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="
                px-8 py-3 rounded-xl
                border border-blue-400/40
                text-blue-200
                hover:bg-blue-500/20
                transition
                "
                        >
                            {showMore ? "Show Less" : "Show More"}
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    export default ProjectsPage;

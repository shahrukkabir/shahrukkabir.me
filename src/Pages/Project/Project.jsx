    import React from "react";
    import { FaGithub } from "react-icons/fa";

    const Project = ({ project }) => {
    if (!project) return null;

    const { id, name, cover, summary, tags, liveURL, gitHubRepo } =
        project;

    return (
        <article
        key={id}
        className="
            rounded-2xl 
            overflow-hidden 
            p-5 
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.12)]
            shadow-[0_8px_35px_rgba(0,0,0,0.35)]
            hover:shadow-[0_12px_45px_rgba(0,0,0,0.55)]
            backdrop-blur-xl 
            transition-all 
            duration-300 
            hover:-translate-y-2
            text-white
            flex flex-col  
        "
        style={{ backdropFilter: "blur(16px) saturate(180%)" }}
        >
        {/* IMAGE */}
        <div className="h-48 w-full overflow-hidden rounded-xl mb-4">
            <img
            src={cover?.srcPath}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
            />
        </div>

        {/* NAME */}
        <h3 className="text-xl font-semibold mb-2">{name}</h3>

        {/* SUMMARY */}
        <p className="text-sm text-gray-200 mb-4 leading-relaxed">
            {Array.isArray(summary) ? summary[0] : summary}
        </p>

        {/* TAGS */}
        <h4 className="font-medium mb-2 text-gray-100">Technologies</h4>

        <div className="flex flex-wrap gap-2 mb-5">
            {tags?.map((t, i) => (
            <span
                key={i}
                className="
                px-3 
                py-1 
                rounded-full 
                text-xs 
                bg-white/10 
                border border-white/20 
                backdrop-blur-sm 
                text-gray-100
                "
            >
                {t.name}
            </span>
            ))}
        </div>

        {/* FOOTER LINKS */}
        <div className="flex items-center justify-between mt-auto">

            <a
            href={gitHubRepo?.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 hover:text-white transition"
            >
            <FaGithub className="text-2xl" />
            <span className="text-sm">Source Code</span>
            </a>

            <a
            href={liveURL?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
                px-5 
                py-1.5 
                rounded-full 
                bg-blue-600/20 
                border border-blue-400/30 
                text-blue-300 
                hover:bg-blue-600/30 
                transition 
                text-sm 
                font-medium
            "
            >
            Live 🌐
            </a>
        </div>
        </article>
    );
    };

    export default Project;

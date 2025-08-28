import React from 'react';
import img1 from "../../assets/profile1.jpg"
import img2 from "../../assets/profile2.jpg"
import img3 from "../../assets/profile3.jpg"
import ParticlesComponent from '../../Components/particle-animation/ParticlesComponent';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

const tags = [
    { name: "React.JS" },
    { name: "Next.Js" },
    { name: "Node.Js" },
    { name: "Express.JS" },
    { name: "MongoDB" },
    { name: "TypeScript" },
];

const socialLinks = [
    { id: 1, name: FaLinkedin, url: "https://www.linkedin.com/in/shahrukkabir/" },
    { id: 2, name: FaGithub, url: "https://github.com/shahrukkabir/" },
    { id: 3, name: FaTwitter, url: "https://x.com/shahrukkabir03/" },
    { id: 4, name: FaFacebook, url: "https://www.facebook.com/shahrukkabir01/", },
    { id: 5, name: FaInstagram, url: "https://www.instagram.com/shahrukkabir01/", },
    { id: 6, name: FaDiscord, url: "https://discord.com/channels/1387782496355352647/1398720085622919339", }
];

const Home = () => {
    return (
        <main>
            <ParticlesComponent></ParticlesComponent>
            <div>
                <div className="flex flex-col lg:flex-row mt-8  gap-10 lg:gap-24">
                    {/* profile image */}
                    <div className="flex justify-center lg:justify-start">
                        <img className="rounded-full w-[260px] h-[260px] ring-4 shadow-2xl shadow-[#ffffff7d] lg:ring-6 ring-[#00a6fb] object-cover" src={img1} alt="Shahruk" />
                    </div>
                    {/* content section */}
                    <div>
                        {/* title */}
                        <div className="flex text-3xl lg:text-4xl text-sky-500 justify-center lg:justify-start font-bold  gap-2">
                            <h1>{"SHAHRUK KABIR"} </h1>
                        </div>
                        <h4 className="text-xl flex justify-center lg:justify-start  py-2 ">
                            <Typewriter
                                words={["Full Stack Developer", "Problem Solver", "Front-End Developer", "React Developer", "Tech Enthusiast", "Learning NextJs & TypeScript"]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h4>
                        <h4 className="text-[#d2f0f9]  text-center lg:text-start py-2">
                            {"Chattogram - Bangladesh"}
                        </h4>
                        {/* button container  */}
                        <div className=" grid grid-cols-3 lg:grid-cols-7  py-3 gap-4">
                            {tags.map((tag) => {
                                return (
                                    <button key={tag}
                                        className="lg:py-2 btn_bg py-1 px-2  text-white text-[.875rem] "> {tag.name}
                                    </button>
                                );
                            })}
                        </div>
                        {/* Social links  */}
                        <div className="flex justify-center lg:justify-start py-6 gap-2">
                            <div className="flex lg:gap-4 gap-2">
                                {socialLinks.map((social) => (
                                    <a target="_blank" key={social.id} className="hover:primary_yellow duration-300 ease-in text-red lg:text-[24px] text-[20px]" href={social.url} > <social.name /> </a>
                                ))}
                            </div>
                        </div>

                        {/* my resume  */}
                        <div className="my-2 flex justify-center lg:justify-start">
                            <a href="" download target="_blank">
                                <button className="relative cursor-pointer group rounded-lg border-2 border-[#00a6fb] lg:px-4 lg:py-1 px-4 py-2 text-xl text-[#1caff9] overflow-hidden transition-all duration-1000 shadow-[0_0_20px_rgba(0,166,251,0.4)] hover:shadow-[0_0_35px_rgba(0,166,251,0.7)]">
                                    <span className="relative z-10 transition-all duration-700 delay-200 group-hover:text-white">
                                        Resume
                                    </span>
                                    <span className="absolute inset-0 bg-[#00a6fb] w-0 left-0 transition-all duration-1000 ease-in-out group-hover:w-full"></span>
                                </button>
                            </a>
                        </div>


                    </div>
                </div>
                {/* description  */}
                <div>
                    {/*  Codeforces (Pupil – 1237), CodeChef, and other online judges. */}
                    <p className="  text-[#edfaff] text-justify lg:text-base text-[15px] mx-2 mt-8 lg:mt-20 mb-8">
                        {"Hi, I am Shahruk Ibney Kabir, a MERN Stack Developer and Competitive Programmer. I specialize in building full-stack web applications with SEO optimization in mind and can develop MERN (full-stack) based applications from scratch to deployment. Currently, I’m learning Next.js and TypeScript to enhance my frontend skills. I love to solve problems on "}
                        <a href="https://codeforces.com/profile/shahrukkabir" target="_blank" rel="noopener noreferrer" className="text-[#00a6fb] hover:underline">Codeforces</a> {"(Pupil – 1237), "}
                        <a href="https://leetcode.com/u/shahrukkabir/" target="_blank" rel="noopener noreferrer" className="text-[#00a6fb] hover:underline">LeetCode</a>
                        {" , "}
                        <a href="https://www.codechef.com/users/shahrukkabir" target="_blank" rel="noopener noreferrer" className="text-[#00a6fb] hover:underline">CodeChef</a>
                        {" etc. online judges."}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Home;
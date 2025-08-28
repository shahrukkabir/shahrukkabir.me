import React from 'react';
import img1 from "../../assets/profile1.jpg"
import img2 from "../../assets/profile2.jpg"
import img3 from "../../assets/profile3.jpg"
import ParticlesComponent from '../../Components/particle-animation/ParticlesComponent';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, } from "react-icons/fa";

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
];

const Home = () => {
    return (
        <main>
            <ParticlesComponent></ParticlesComponent>
            <div>
                <div className="flex flex-col lg:flex-row mt-8  gap-10 lg:gap-24">
                    {/* profile image box */}
                    <div className="flex justify-center lg:justify-start">
                        <img className="rounded-full w-[260px] h-[260px] ring-4 shadow-2xl shadow-[#ffffff7d] lg:ring-6 ring-[#00a6fb] object-cover" src={img1} alt="Shahruk" />
                    </div>
                    {/* content box parent */}
                    <div>
                        {/* title box */}
                        <div className="flex text-3xl lg:text-4xl text-sky-500 justify-center lg:justify-start font-bold  gap-2">
                            <h1>{"SHAHRUK KABIR"} </h1>
                        </div>
                        <h4 className="text-xl flex justify-center lg:justify-start  py-2 ">
                            {"Full Stack Developer"}
                        </h4>
                        <h4 className="text-[#d2f0f9]  text-center lg:text-start py-2">
                            {"Chattogram - Bangladesh"}
                        </h4>
                        {/* button box container  */}
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
            </div>
        </main>
    );
};

export default Home;
import srk1 from "../../assets/srk.jpg"
import { motion } from "framer-motion";
import ParticlesComponent from '../../Components/ParticlesComponent';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaDiscord } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import Cursor from "../../Components/Cursor";
import ShinyButton from "../../Components/ShinyButton";

const tags = [
    { name: "React.JS" },
    { name: "Next.Js" },
    { name: "Node.Js" },
    { name: "Express.JS" },
    { name: "MongoDB" },
    { name: "TypeScript" },
];

const socialLinks = [
    { id: 1, name: FaGithub, url: "https://github.com/shahrukkabir/" },
    { id: 2, name: FaLinkedin, url: "https://www.linkedin.com/in/shahrukkabir/" },
    { id: 3, name: FaTwitter, url: "https://x.com/shahrukkabir03/" },
    { id: 4, name: FaFacebook, url: "https://www.facebook.com/shahrukkabir01/", },
    { id: 5, name: FaInstagram, url: "https://www.instagram.com/shahrukkabir01/", },
    { id: 6, name: FaDiscord, url: "https://discord.com/channels/1387782496355352647/1398720085622919339", }
];

const baseIconVariants = {
    initial: { y: 0, scale: 1, opacity: 1 },
    animate: (i) => ({
        y: [0, -8, 0],
        scale: [1, 1.13, 1],
        opacity: 1,
        transition: {
            repeat: Infinity,
            duration: 2.8 + i * 0.2,
            ease: 'easeInOut',
            repeatType: 'loop',
            delay: 0.1 * i,
        },
    }),
    hover: {
        scale: 1.2,
        color: "var(--color-primary, #00a6fb)",
        boxShadow: "0 4px 18px 0 rgba(0,166,251,0.6)",
        transition: { type: "spring", stiffness: 400, damping: 15 },
    },
};

const Home = () => {
    return (
        <main>
            <div>
                <div className="flex flex-col lg:flex-row mt-8  gap-10 lg:gap-24">
                    {/* profile image -> left part */}
                    {/* <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="flex justify-center lg:justify-start will-change-transform"> */}
                    <div className="flex justify-center lg:justify-start">
                        <img className="rounded-full w-[270px] h-[270px] ring-4 shadow-2xl shadow-[#ffffff7d] lg:ring-6 ring-[#00a6fb] object-cover" src={srk1} alt="Shahruk" />
                    </div>
                    {/* </motion.div> */}
                    {/* content section -> right part */}
                    {/* <motion.div className="will-change-transform" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}> */}
                    <div>
                        {/* title */}
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold leading-tight text-base-content"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="flex text-3xl lg:text-4xl text-sky-500 justify-center lg:justify-start font-bold  gap-2">
                                <h1>{"SHAHRUK KABIR"} </h1>
                            </div>
                        </motion.h1>
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
                        {/* skill container  */}
                        <div className="grid grid-cols-3 lg:grid-cols-7 py-3 gap-4">
                            {tags.map((tag, index) => (
                                <motion.button
                                    key={tag.name}
                                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.2 + index * 0.1,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -3,
                                        transition: { duration: 0.2 },
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="lg:py-2 btn_bg py-1 px-2 text-white text-[.875rem]"
                                >
                                    {tag.name}
                                </motion.button>
                            ))}
                        </div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.4 }}
                        >
                            <div className="flex justify-center lg:justify-start py-8 gap-2">
                                <div className="flex lg:gap-4 gap-4">
                                    {socialLinks.map((social, i) => (
                                        <motion.a
                                            key={social.id}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="lg:text-[24px] text-[20px] text-white"
                                            initial="initial"
                                            animate="animate"
                                            whileHover="hover"
                                            custom={i}
                                            variants={baseIconVariants}
                                        >
                                            <social.name />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* my resume  */}
                        <div className="my-2 flex justify-center lg:justify-start">
                            <a href="https://drive.google.com/file/d/1NU4nZ7qblCucOZZIOjGys9RBp780PB67/view"
                                download
                                target="_blank">
                                <ShinyButton


                                    className="relative cursor-pointer group rounded-lg border-2 border-[#00a6fb]
              px-4 py-2 text-xl text-[#1caff9] overflow-hidden
             transition-all duration-700 shadow-[0_0_20px_rgba(0,166,251,0.4)]
             hover:shadow-[0_0_25px_rgba(0,166,251,0.7)]"
                                >
                                    <span className="relative z-10 transition-all duration-500 delay-150 group-hover:text-white flex items-center gap-2">
                                        Resume
                                    </span>

                                    <span
                                        className="absolute inset-0 bg-[#238bbf] w-0 left-1/2 -translate-x-1/2 
               group-hover:w-full transition-all duration-700 ease-in-out"
                                    />
                                </ShinyButton>


                            </a>
                        </div>
                    </div>
                    {/* </motion.div> */}
                </div>
                {/* description  */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }} viewport={{ once: true }}>
                    {/*  Codeforces (Pupil – 1237), CodeChef, and other online judges. */}
                    <p className="  text-[#edfaff] text-center lg:text-base text-[15px] mx-2 mt-8 lg:mt-20 mb-8">
                        {"Hi, I am Shahruk Ibney Kabir, a MERN Stack Developer and Competitive Programmer. I specialize in building full-stack web applications with SEO optimization in mind and can develop MERN (full-stack) based applications from scratch to deployment. Currently, I’m learning Next.js and TypeScript to enhance my frontend skills. I love to solve problems on "}
                        <a href="https://codeforces.com/profile/shahrukkabir01" target="_blank" rel="noopener noreferrer" className="text-[#00a6fb] hover:underline">Codeforces</a> {"(Pupil – 1237), "}
                        <a href="https://leetcode.com/u/shahrukkabir01/" target="_blank" rel="noopener noreferrer" className="text-[#00a6fb] hover:underline">LeetCode</a>
                        {" , "}
                        <a href="https://www.codechef.com/users/shahrukkabir01" target="_blank" rel="noopener noreferrer" className="text-[#00a6fb] hover:underline">CodeChef</a>
                        {" etc. online judges."}
                    </p>
                </motion.div>
            </div>
        </main>
    );
};

export default Home;
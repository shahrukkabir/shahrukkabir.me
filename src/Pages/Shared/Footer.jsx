import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const socialLinks = [
        {
            id: 1,
            name: FaLinkedin,
            url: "https://www.linkedin.com/in/shahrukkabir/",
        },
        {
            id: 2,
            name: FaGithub,
            url: "https://github.com/shahrukkabir"
        },
        {
            id: 3,
            name: FaTwitter,
            url: "https://x.com/shahrukkabir03"
        }
    ];

    return (
        <footer>
            <div className="flex lg:flex-row gap-8 mt-20 mb-12 lg:gap-0 justify-between items-center flex-col">
                <div className="flex lg:flex-1 lg:hidden justify-center gap-4 items-center">
                    {socialLinks.map((social) => {
                        const Icon = social.name;
                        return (
                            <a key={social.id} href={social.url} className="text-[24px] hover:primary_yellow duration-300 ease-in"> <Icon /> </a>
                        );
                    })}
                </div>
                <div className="flex-1 block">
                    <p className="text-center lg:text-nowrap lg:text-start text-wrap">
                        Copyright © 2025 Shahruk Ibney Kabir. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { FaHackerrank } from "react-icons/fa";
import { SiCodeforces, SiLeetcode } from "react-icons/si";

const Footer = () => {
    const socialLinks = [
        {
            id: 1,
            name: SiCodeforces,
            url: "https://codeforces.com/profile/shahrukkabir01",
        },
        {
            id: 2,
            name: SiLeetcode,
            url: "letcode.com/shahrukkabir01/"
        },
        {
            id: 3,
            name: FaHackerrank,
            url: "https://www.hackerrank.com/profile/shahrukkabir01"
        }
    ];

    return (
        <footer>
            <div className="flex lg:flex-row gap-8 lg:mt-20 mb-4 lg:gap-0 justify-between items-center flex-col">
                <div className="flex lg:flex-1 lg:hidden justify-center gap-4 items-center">
                    {socialLinks.map((social) => {
                        const Icon = social.name;
                        return (
                            <a key={social.id} href={social.url} className="text-[24px] hover:primary_yellow duration-300 ease-in"> <Icon /> </a>
                        );
                    })}
                </div>
                <div className="flex-1 block">
                    <p className="text-center lg:text-nowrap text-wrap">
                        Copyright © 2025 Shahruk Ibney Kabir. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
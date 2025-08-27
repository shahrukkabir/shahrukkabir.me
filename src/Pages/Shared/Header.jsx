import { Link } from "react-router-dom";

const navData = [
  { id: 1, name: "About", path: "/" },
  { id: 2, name: "Projects", path: "/projects" },
  { id: 3, name: "Blog", path: "/blog" },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between lg:space-x-8 space-x-4 py-6 ">
      <div>
        <Link href="/">
          <h3 className="cursor-pointer font-bold text-[18px] lg:text-[20px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 w-fit">
            SHAHRUKKABIR
          </h3>
        </Link>
      </div>
      <div className={"flex lg:space-x-4 space-x-3 lg:text-base text-[12px] "}>
        {navData.map((nav) => (
          <Link href={nav.path} key={nav.id}>
            <p className={"uppercase text-sm"}>{nav.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header; 
import { Link } from "react-router-dom";

const navData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Projects", path: "/projects" },
  { id: 3, name: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between lg:space-x-8 space-x-4 py-6 ">
      <div>
        <Link href="/">
          <h3 className="cursor-pointer font-bold text-3xl text-white">
            SRK<span className="text-green-500">.</span>
          </h3>
        </Link>
      </div>
      <div className={"flex lg:space-x-4 space-x-3 lg:text-base text-[12px] "}>
        {navData.map((nav) => (
          <Link to={nav.path} key={nav.id}>
            <p className={"uppercase text-sm"}>{nav.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header; 
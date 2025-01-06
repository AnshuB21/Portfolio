import { links } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-blue-50 fixed top-0 left-0 w-full z-10 h-20">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-xl font-bold sm:text-3xl">
          Web<span className="text-blue-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-sm tracking-wide hover:text-blue-600 duration-300 sm:text-lg  "
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import logoUpik from "../../assets/logo-upik.png";
import NavbarLink from "../Elements/NavbarLink";
import arrowDown from "../../assets/arrow-down.svg";
import Dropdown from "../Elements/Dropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-transparent md:px-16 py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={logoUpik} alt="Upik Logo" className="w-8" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/about">About Me</NavbarLink>
          <Dropdown
            buttonText="Resume"
            arrowSrc={arrowDown}
            left="-left-3"
            buttonClass="bg-primary text-secondary hover:shadow-primary-sm hover:translate-x-[-4px] hover:translate-y-[-4px] active:shadow-primary-sm active:translate-x-[-4px] active:translate-y-[-4px] transition-transform px-3 py-2"
            handleLinkClick={handleLinkClick}
          >
            <NavbarLink to="/experiences" className="block px-4 py-2">
              Experiences
            </NavbarLink>
            <NavbarLink to="/educations" className="block px-4 py-2">
              Educations
            </NavbarLink>
            <NavbarLink to="/skills" className="block px-4 py-2">
              Skills
            </NavbarLink>
          </Dropdown>
          <NavbarLink to="/projects">Projects</NavbarLink>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary bg-primary focus:outline-none p-0.5"
          >
            <svg
              className={`w-6 h-6 transition-transform transform ${isOpen ? "rotate-90" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden h-screen overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="flex flex-col items-end mt-4 space-y-2">
          <NavbarLink to="/" className='w-28 text-center' onClick={handleLinkClick}>Home</NavbarLink>
          <NavbarLink to="/about" className="w-28 text-center" onClick={handleLinkClick}>
            About Me
          </NavbarLink>
          <Dropdown
            buttonText="Resume"
            arrowSrc={arrowDown}
            left="-left-36 -top-3"
            buttonClass="w-28 text-center bg-primary text-secondary hover:shadow-primary-sm hover:translate-x-[-4px] hover:translate-y-[-4px] active:shadow-primary-sm active:translate-x-[-4px] active:translate-y-[-4px] transition-transform px-3 py-2"
            handleLinkClick={handleLinkClick}
          >
            <NavbarLink to="/experiences" className="block px-4 py-2">
              Experiences
            </NavbarLink>
            <NavbarLink to="/educations" className="block px-4 py-2">
              Educations
            </NavbarLink>
            <NavbarLink to="/skills" className="block px-4 py-2">
              Skills
            </NavbarLink>
          </Dropdown>
          <NavbarLink to="/projects" className="w-28 text-center" onClick={handleLinkClick}>
            Projects
          </NavbarLink>
          <NavbarLink to="/contact" className="w-28 text-center" onClick={handleLinkClick}>
            Contact
          </NavbarLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

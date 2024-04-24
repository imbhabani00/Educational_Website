import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-slate-500 md:bg-slate-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <div className={`md:flex flex-grow ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex space-x-6 mt-2">
            <li className="hover:text-indigo-700 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-indigo-700 hover:underline">
            <Link to="/onlineCourses">All Courses</Link>
            </li>
            <li className="hover:text-indigo-700 hover:underline">
           <Link to="/topCourses">Top Courses</Link>
            </li>
            <li className="hover:text-indigo-700 hover:underline">
            <Link to="students">Succesfull Students</Link>
            </li>
            <li className="hover:text-indigo-700 hover:underline">
            <Link to="blogs">Blogs</Link>
            </li>
            <li className="hover:text-indigo-700 hover:underline">
            <Link to="price">Price</Link>
            </li>
            <li className="hover:text-indigo-700 hover:underline">
            <Link to="contact"> Contact</Link>
            </li>
          </ul>
          <div className="ml-auto">
          <button className="bg-indigo-500 text-black hover:bg-indigo-700 hover:text-white w-32 h-10 rounded-full">Get Certificate</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

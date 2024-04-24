import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-8 md:px-24 lg:px-32 xl:px-40 hover:bg-indigo-800 transition duration-300 ease-in-out">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <h1 className="text-3xl font-bold mb-4">COLLEGE DUNIA</h1>
          <p className="text-lg font-semibold">ONLINE EDUCATION & LEARNING</p>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Explore</h1>
          <ul className="space-y-2">
            <li><a href="https://collegedunia.com/about" className="text-lg">About Us</a></li>
            <li><a href="https://collegedunia.com/about" className="text-lg">Services</a></li>
            <li><a href="https://collegedunia.com/courses" className="text-lg">Courses</a></li>
            <li><a href="https://collegedunia.com/news" className="text-lg">Blog</a></li>
            <li><a href="https://collegedunia.com/contact-us" className="text-lg">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Contact Information</h1>
          <ul className="space-y-2">
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /><span>COLLEGEDUNIA WEB PRIVATE LIMITED<br />4TH FLOOR, 418-419, AIHP SIGNATURE TOWER, UDYOG VIHAR PHASE IV<br />Gurgaon, Haryana, 122015</span></li>
            <li className="flex items-center"><FaPhoneAlt className="mr-2" /><span>+91145000000</span></li>
            <li className="flex items-center"><FaEnvelope className="mr-2" /><span>contact@collegedunia.com</span></li>
          </ul>
        </div>
      </div>
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-indigo-500 text-white py-2 px-4 rounded-full hover:bg-indigo-600 focus:outline-none">
        <FaArrowAltCircleUp className="text-lg" />
      </button>
      <div className="mt-8 text-center text-lg">
        <p className="mb-2">Designed By BhabaniShankar Mishra</p>
        <p>&copy; {new Date().getFullYear()} COLLEGE DUNIA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

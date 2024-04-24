import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import OnlineCourse from "./components/AllCourses/onlineCourses";
import LearnAnything from "./components/learnAnything/learnAnything";
import Courses from "./components/courses/courses";
import Testimonial from "./components/testimonial/testimonial";
import Blogs from "./components/blogs/blogs";
import Pricing from "./components/Pricing/pricing";
import NewSelter from "./components/newSelter/newSelter";
import Home from "./components/home/home";
const RouterPage = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        
          <Route path="/onlineCourses" element={<OnlineCourse />} />
          <Route path="/about" element={<LearnAnything />} />
          <Route path="/topCourses" element={<Courses />} />
          <Route path="/students" element={<Testimonial />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/price" element={<Pricing />} />
          <Route path="/contact" element={<NewSelter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouterPage;

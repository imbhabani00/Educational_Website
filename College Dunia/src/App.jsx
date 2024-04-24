import React from "react";
import RouterPage from "./router";
import Common from "./components/common/common";
import Home from "./components/home/home";
import LearnAnything from "./components/learnAnything/learnAnything";
import Bar from "./components/bar/bar";
import Courses from "./components/courses/courses";
import OnlineCourse from "./components/AllCourses/onlineCourses";
import Testimonial from "./components/testimonial/testimonial";
import Blogs from "./components/blogs/blogs";
import Pricing from "./components/Pricing/pricing";
import NewSelter from "./components/newSelter/newSelter";
import Footer from "./components/footer/footer";
export default function App() {
  return (
    <>
      <Common />
      <RouterPage/>
      <Home />
      <LearnAnything />
      <Bar />
      <Courses />
      <OnlineCourse />
      <Testimonial />
      <Blogs />
      <Pricing />
      <NewSelter />
      <Footer />
    </>
  );
}

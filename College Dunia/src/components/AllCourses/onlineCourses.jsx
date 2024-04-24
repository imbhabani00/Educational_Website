import React from "react";
import data from "./course.json";

const OnlineCourse = () => {
  return (
    <>
      <div className="bg-slate-300">
        <div className="container bg-slate-300 mx-auto p-4">
          <div className="text-center mt-10 mb-4">
            <div className="text-indigo-500 text-xl font-bold">ALL COURSES</div>
            <div className="heading mt-4">
              <h1 className="text-3xl font-bold">Browse Our Online Courses</h1>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {data.map((courseData, index) => (
              <div className="hover:bg-indigo-500 border border-black mt-4 p-4 flex flex-col items-center" key={index}>
                <div className="flex justify-center">
                  <img
                    src={courseData.image}
                    alt={courseData.heading}
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-lg font-semibold">
                    {courseData.heading}
                  </h2>
                  <p className="text-sm text-indigo-500">{courseData.courses}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OnlineCourse;

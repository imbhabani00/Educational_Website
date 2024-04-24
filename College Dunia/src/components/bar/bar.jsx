import React from 'react';
import success from "../../../public/images/success.png";
import tutors from "../../../public/images/tutors.png";
import courses from "../../../public/images/courses.png";
import schedules from "../../../public/images/schedules.png";

const Bar = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5 sm:gap-32 bg-slate-300 border border-white p-4 ">
      <div className="flex items-center">
        <img src={success} alt="image_icon" className="mr-2" />
        <div>
          <h1 className="text-white">3000</h1>
          <p className="text-indigo-500">SUCCESS STORIES</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={tutors} alt="image_icon" className="mr-2" />
        <div>
          <h1 className="text-white">320</h1>
          <p className="text-indigo-500">TRUSTED TUTORS</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={schedules} alt="image_icon" className="mr-2" />
        <div>
          <h1 className="text-white">1000</h1>
          <p className="text-indigo-500">SCHEDULES</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src={courses} alt="image_icon" className="mr-2" />
        <div>
          <h1 className="text-white">587</h1>
          <p className="text-indigo-500">COURSES</p>
        </div>
      </div>
    </div>
  );
}

export default Bar;

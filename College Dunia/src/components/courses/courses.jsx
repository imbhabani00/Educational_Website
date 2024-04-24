import React from "react";
import engeneering from "../../../public/images/engeneering.png";
import photoshop from "../../../public/images/photoshop.png";
import html from "../../../public/images/html.png";

const Courses = () => {
  return (
    <div className="bg-slate-300 ">
      <div className="text-center p-8">
        <div className="text-indigo-500 text-xl font-bold p-2">
          <span>COURSES</span>
        </div>
        <div className="text-xl mt-4">
          <h1>Explore Our Popular Online Course</h1>
        </div>
      </div>
      <div className="flex flex-wrap bg-slate-300 justify-center gap-6 md:gap-20">
        <div className="mb-6 md:mb-0 md:pr-4 mt-8 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="flex border border-black h-80 w-full">
            <img
              className="w-16 h-16 mt-7 mr-4 rounded-full"
              src={engeneering}
              alt="Course"
            />
            <div>
              <h1 className="text-xl mt-8 font-bold mb-2 hover:text-indigo-500 ">
                Introducing To Software Engineering
              </h1>
              <div className="flex items-center mb-2">
                <img
                  className="mt-4 w-6 h-6 mr-2 rounded-full"
                  src="https://c8.alamy.com/comp/PG55RP/portrait-of-a-successful-business-man-isolated-on-white-PG55RP.jpg"
                  alt="Instructor"
                />
                <span className="mr-2 mt-4 text-slate-900">
                  By John Smith .
                </span>
              </div>
              <div className="mt-4">
                <span className="mt-4 text-indigo-500">
                  50 Lectures (190 hrs)
                </span>
              </div>
              <div className="mt-4">
                <span className="text-indigo-500">
                  $100 All Courses $15 Per Month
                </span>
              </div>
              <div>
                <button className="flex mt-4 border border-indigo-700 text-indigo-500 w-40 justify-center hover:bg-indigo-500 hover:text-white">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course 2 */}
        <div className="mb-6 md:mb-0 md:pr-4 mt-8 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="flex border border-black h-80 w-full">
            <img
              className="w-16 h-16 mt-7 mr-4 rounded-full"
              src={photoshop}
              alt="Course"
            />
            <div>
              <h1 className="text-xl mt-8 font-bold mb-2 hover:text-indigo-500">
                Enhancing Adobe Photoshop CC 2020 Skills
              </h1>
              <div className="flex items-center mb-2">
                <img
                  className="mt-4 w-6 h-6 mr-2 rounded-full"
                  src="https://www.shutterstock.com/image-photo/young-bearded-hipster-guy-wearing-260nw-2199108191.jpg"
                  alt="Instructor"
                />
                <span className="mr-2 mt-4 text-slate-900">By Harry .</span>
              </div>
              <div className="mt-4">
                <span className="mt-4 text-indigo-500">
                  30 Lectures (50 hrs)
                </span>
              </div>
              <div className="mt-4">
                <span className="text-indigo-500">
                  $50 All Courses $5 Per Month
                </span>
              </div>
              <div>
                <button className="flex mt-4 border border-indigo-700 text-indigo-500 w-40 justify-center hover:bg-indigo-500 hover:text-white">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course 3 */}
        <div className="mb-6 md:mb-0 md:pr-4 mt-8 w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="flex border border-black h-80 w-full">
            <img
              className="w-16 h-16 mt-7 mr-4 rounded-full"
              src={html}
              alt="Course"
            />
            <div>
              <h1 className="text-xl mt-8 font-bold mb-2 hover:text-indigo-500">
                HTML, CSS, JavaScript For Web Developers
              </h1>
              <div className="flex items-center mb-2">
                <img
                  className="mt-4 w-6 h-6 mr-2 rounded-full"
                  src="https://thumbs.dreamstime.com/b/handsome-guy-being-bored-talking-stranger-random-staff-yawning-cover-opened-mouth-fist-squinting-tired-standing-fatigue-178777560.jpg"
                  alt="Instructor"
                />
                <span className="mr-2 mt-4 text-slate-900">
                  By Abdul Barik .
                </span>
              </div>
              <div className="mt-4">
                <span className="mt-4 text-indigo-500">
                  50 Lectures (167 hrs)
                </span>
              </div>
              <div className="mt-4">
                <span className="text-indigo-500">
                  $200 All Courses $25 Per Month
                </span>
              </div>
              <div>
                <button className="flex mt-4 border border-indigo-700 text-indigo-500 w-40 justify-center hover:bg-indigo-500 hover:text-white">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

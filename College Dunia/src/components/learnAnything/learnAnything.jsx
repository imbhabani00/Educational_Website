import React from "react";
import second from "../../../public/images/second.jpeg";
import book from "../../../public/images/books.png";
import certificate from "../../../public/images/certificate.png";
import people from "../../../public/images/people.png";

const LearnAnything = () => {
  return (
    <>
      <div className="bg-slate-300 p-8">
        <div className="mb-6 text-center">
          <span className="text-lg font-semibold text-indigo-500">
            LEARN ANYTHING
          </span>
          <h1 className="text-3xl font-bold text-gray-900 leading-tight mt-2 p-6">
            BENEFITS ABOUT ONLINE <br /> LEARNING EXPERTISE ...
          </h1>
        </div>

        <div className=" ml-5 mr-5 lg:ml-10 lg:mr-10 flex flex-col lg:flex-row">
          <div className="lg:w-1/2 lg:h-auto">
            <img src={second} alt="image" className="w-full h-full" />
          </div>
          <div className="lg:w-2/3 lg:pl-8 bg-slate-300">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="data flex items-center border border-black rounded-lg bg-white hover:bg-indigo-700 transition-colors duration-300 p-4 h-auto">
                <img
                  src={book}
                  alt=""
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    Online Course...
                  </h1>
                  <p className="text-gray-700">
                    Welcome to our educational website! Explore our diverse
                    range of offerings designed to enhance your learning
                    journey.
                  </p>
                </div>
              </div>
              <div className="data flex items-center border border-black rounded-lg bg-white hover:bg-indigo-700 transition-colors duration-300 p-4 mt-4 lg:mt-0 h-auto">
                <img
                  src={certificate}
                  alt=""
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    Earn A Certificate...
                  </h1>
                  <p className="text-gray-700">
                    Looking to validate your skills and knowledge? Check out our
                    "Earn a Certificate" Program.
                  </p>
                </div>
              </div>
              <div className="data flex items-center border border-black rounded-lg bg-white hover:bg-indigo-700 transition-colors duration-300 p-4 mt-4 lg:mt-0 h-auto">
                <img
                  src={people}
                  alt=""
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">
                    Learn With Experts...
                  </h1>
                  <p className="text-gray-700">
                    For those who prefer a more personalized approach, our
                    "Learn with Experts" feature connects you with experienced
                    and industry professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnAnything;

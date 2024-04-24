import React from "react";
import { IoMdContacts } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaCommentDots } from "react-icons/fa";

const Blogs = () => {
  return (
    <>
      <div className="bg-slate-300 -mt-28 w-full">
        <div className="text-center">
          <span className="text-indigo-700 text-xl font-bold inline-block mt-24">
            OUR BLOGS
          </span>
        </div>
        <div>
          <h1 className="text-2xl text-center mb-8">Recent From Blogs</h1>
        </div>
        <section className="text-gray-600 body-font -mt-16">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full mb-6 p-4">
                <div className="h-full text-center border border-black hover:bg-indigo-500">
                  <img
                    alt="testimonial"
                    className="w-200 h-200 mb-8 object-cover object-center inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/D5622AQHfqE_dR_HdAg/feedshare-shrink_2048_1536/0/1713529222218?e=1716422400&v=beta&t=L8IQpBJ7sfCd9kF9J5pOrs5uXqPWXxUwzUdKc8ojhi4"
                  />
                  <div className="flex justify-center items-center">
                    <IoMdContacts className="text-indigo-700 mr-1" />
                    <span className="font-bold mr-4 hover:text-white">
                      Admin
                    </span>
                    <SlCalender className="text-indigo-700 mr-1" />
                    <span className="font-bold mr-4 hover:text-white">
                      20.04.2024
                    </span>
                    <FaCommentDots className="text-indigo-700 mr-1" />
                    <span className="text-indigo-700 font-bold">
                      3 Comments
                    </span>
                  </div>
                  <div className="text-center">
                    <h1 className="text-xl text-black font-bold mt-4">
                      Team Building
                    </h1>
                    <p className="text-gray-900 mt-2 hover:text-white">
                      At Collegedunia, we seized a valuable opportunity to
                      foster team connections, cultivate a dynamic and
                      innovative work atmosphere, and bring our team closer
                      together.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full mb-6 p-4">
                <div className="h-full text-center border border-black hover:bg-indigo-500">
                  <img
                    alt="testimonial"
                    className="w-200 h-200 mb-8 object-cover object-center inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/D5622AQFkwU4XwMKyow/feedshare-shrink_800/0/1713631008800?e=1716422400&v=beta&t=sWvkwoH3l41IHqiurN-FdcMyHSW4XRbbk1zIujIL_r0"
                  />
                  <div className="flex justify-center items-center">
                    <IoMdContacts className="text-indigo-700 mr-1" />
                    <span className="font-bold mr-4 hover:text-white">
                      Admin
                    </span>
                    <SlCalender className="text-indigo-700 mr-1" />
                    <span className="font-bold mr-4 hover:text-white">
                      20.04.2024
                    </span>
                    <FaCommentDots className="text-indigo-700 mr-1" />
                    <span className="text-indigo-700 font-bold">
                      3 Comments
                    </span>
                  </div>
                  <div className="text-center">
                    <h1 className="text-xl text-black font-bold mt-4">
                      College Dunia
                    </h1>
                    <p className="text-gray-900 mt-2 hover:text-white">
                      Students participated in Quizzes, Treasure Hunt, Speaker
                      sessions, Speaches and fruitful discussions with
                      university representatives ⚡️ University representatives
                      ensured participations that led to instant student
                      admissions. 👩‍🎓🧑‍🎓
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full mb-6 p-4">
                <div className="h-full text-center border border-black hover:bg-indigo-500">
                  <img
                    alt="testimonial"
                    className="w-200 h-200 mb-8 object-cover object-center inline-block border-2 border-gray-200 bg-gray-100"
                    src="https://media.licdn.com/dms/image/D5622AQHocIhRidlWyQ/feedshare-shrink_2048_1536/0/1713529223417?e=1716422400&v=beta&t=JQQKKG7KrZdss2ZRn-bqKzr-N6c8ClsNYZfC7Xwbu7o"
                  />
                  <div className="flex justify-center items-center">
                    <IoMdContacts className="text-indigo-700 mr-1" />
                    <span className="font-bold mr-4 hover:text-white">
                      Admin
                    </span>
                    <SlCalender className="text-indigo-700 mr-1" />
                    <span className="font-bold mr-4 hover:text-white">
                      21.04.2024
                    </span>
                    <FaCommentDots className="text-indigo-700 mr-1" />
                    <span className="text-indigo-700 font-bold">
                      3 Comments
                    </span>
                  </div>
                  <div className="text-center">
                    <h1 className="text-xl text-black font-bold mt-4">Fun</h1>
                    <p className="text-gray-900 mt-2 hover:text-white">
                      At Collegedunia, we seized a valuable opportunity to
                      foster team connections, cultivate a dynamic and
                      innovative work atmosphere, and bring our team closer
                      together.
                    </p>
                  </div>
                </div>
              </div>
              {/* Repeat similar structure for other blog entries */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Blogs;

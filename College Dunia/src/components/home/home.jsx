import React from "react";
import bgimg from "../../../public/images/bg.jpeg";

const Home = () => {
  return (
    <div className="bg-slate-300 flex flex-col md:flex-row items-center justify-center">
      <div className="ml-10 mr-10 flex-1 p-4 md:h-auto md:max-w-xl flex flex-col items-center">
        <p className="text-white font-bold mb-4">WELCOME TO COLLEGE DUNIA ...</p>
        <h1 className="text-white font-bold text-3xl mb-4">
          BEST ONLINE EDUCATION EXPERTIES
        </h1>
        <p className="text-white text-center mb-4">
          Welcome to College Dunia, your premier destination for comprehensive
          educational resources and guidance.
        </p>
        <div className="flex">
          <button className="bg-indigo-500 font-bold w-40 h-10 text-white hover:bg-indigo-700 hover:text-white mr-4">
            GET STARTED NOW
          </button>
          <button className="bg-white font-bold text-indigo-700 w-40 hover:bg-indigo-700 hover:text-white h-10">
            VIEW COURSE
          </button>
        </div>
      </div>
      <div className="flex-1 bg-slate-300 md:mt-0 flex justify-center">
        <img
          src={bgimg}
          alt="Background"
          className="object-cover h-50 md:h-auto"
        />
      </div>
    </div>
  );
};

export default Home;

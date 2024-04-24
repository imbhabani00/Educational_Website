import React from "react";

const NewSelter = () => {
  return (
    <div className="bg-indigo-700 text-white py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          NEWSELTER - Stay tuned and get the latest updates ...!
        </h1>
        <form className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="bg-white text-indigo-700 border border-white rounded-md py-2 px-4 mb-4 md:mb-0 lg:w-1/2 md:w-auto"
          />
          <button className="bg-white text-indigo-700 hover:text-red-500 py-2 px-4 rounded-md w-40">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSelter;

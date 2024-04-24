import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { ImYoutube2 } from "react-icons/im";
const Common = () => {
  return (
    <>
      <div className="bg-slate-300 h-auto">
        <section className="bg-slate-300 text-white py-6">
          <div className="container mx-auto ">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-2xl md:text-4xl font-bold">
                  College Dunia
                </h1>
                <span className="text-indigo-700">
                  ONLINE EDUCATION & LEARNING
                </span>
              </div>
              <div className="flex justify-center md:justify-end mt-4 md:mt-0">
                <div className="icon-container border bg-indigo-500 rounded-full p-1 mr-2 md:mr-4">
                  <a href="https://www.facebook.com/collegedunia?mibextid=JRoKGi">
                    <CiFacebook className="icon hover:text-red-500 rounded-full text-2xl md:text-3xl" />
                  </a>
                </div>
                <div className="icon-container border bg-indigo-500 rounded-full p-1 mr-2 md:mr-4">
                  <a href="https://www.instagram.com/collegedunia/">
                    {" "}
                    <AiOutlineInstagram className="icon hover:text-red-500 rounded-full text-2xl md:text-3xl" />
                  </a>
                </div>
                <div className="icon-container border bg-indigo-500 rounded-full p-1 mr-2 md:mr-4">
                  <a href="https://twitter.com/college_dunia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                    <RiTwitterFill className="icon hover:text-red-500 rounded-full text-2xl md:text-3xl" />
                  </a>
                </div>
                <div className="icon-container border bg-indigo-500 rounded-full p-1">
                  <a href="https://www.youtube.com/@collegeduniamba">
                    <ImYoutube2 className="icon hover:text-red-500 rounded-full text-2xl md:text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Common;

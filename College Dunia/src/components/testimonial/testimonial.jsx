import React from 'react'
const Testimonial = () => {
  return (
    <>
      <div className='bg-slate-300'>
        <div className="text-center">
          <span className='text-indigo-500 text-xl font-bold inline-block mt-8 mb-4'>TESTIMONIAL</span>
        </div>
        <div>
          <h1 className='text-2xl text-center'>Our Successful Students</h1>
        </div>
        <section className="text-gray-600 body-font -mt-10">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center border border-black hover:bg-indigo-500">
                  <img alt="testimonial" className="w-20 h-20 mb-8 mt-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg"/>
                  <p className="leading-relaxed hover:text-white">I have been working with College Dunia Web Solutions for over a year now, and I must say it has been an amazing experience. The team is highly skilled and professional. They delivered our projects on time and exceeded our expectations. I highly recommend their services to anyone looking for top-notch web development solutions.</p>
                  <br/>
                  <h2 className="text-indigo-500 font-medium title-font tracking-wider text-sm">BhabaniShankar</h2>
                  <p className="text-gray-500">FrontEnd Devloper</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                <div className="h-full text-center border border-black hover:bg-indigo-500">
                  <img alt="testimonial" className="w-20 h-20 mb-8 mt-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg"/>
                  <p className="leading-relaxed hover:text-white">I've been using this educational website for a while now, and I must say it's been a game-changer for me. The courses are well-structured, the instructors are knowledgeable, and the platform is user-friendly. I've learned so much and improved my web development skills significantly. Highly recommended!</p>
                  <br></br>
                  <h2 className="text-indigo-500 font-medium title-font tracking-wider text-sm">ShaktiSankar</h2>
                  <p className="text-gray-500">Data Analyst</p>
                </div>
              </div>
              <div className="lg:w-1/3 lg:mb-0 p-4">
                <div className="h-full text-center border border-black hover:bg-indigo-500">
                  <img alt="testimonial" className="w-20 h-20 mb-8 mt-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"/>
                  <p className="leading-relaxed hover:text-white">I have greatly benefited from the courses offered on this website. The content is well-structured and comprehensive, covering all the essential topics in web development. The instructors are highly knowledgeable and engaging, making the learning experience enjoyable. I would highly recommend this platform to anyone looking to enhance their web development skills.</p>
                  <br></br>
                  <h2 className="text-indigo-500 font-medium title-font tracking-wider text-sm">Rajesh</h2>
                  <p className="text-gray-500">Junior Hr</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Testimonial

import React from "react";

function AboutUs() {
  return (
    <div className="sm:flex items-center max-w-screen-xl" style={{marginTop:"6rem"}}>
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-indigo-600">Our Company</span>
          </h2>
          <p className="text-gray-700">
          Welcome to E-Com, your one-stop destination for high-quality and affordable products. We are dedicated to providing an exceptional shopping experience by offering a diverse range of items to meet your every need. Our mission is to blend convenience, quality, and customer satisfaction into every interaction. Thank you for choosing us—we’re here to make your shopping journey seamless and enjoyable!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

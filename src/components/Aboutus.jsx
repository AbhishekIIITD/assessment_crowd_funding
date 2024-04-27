import React from "react";
import { Typography } from "@mui/material";
const Abt = () => {
  return (
    <div className=" mt-12 flex-col flex justify-center align-middle items-center" id="about">
      <div className="text-center">
        <Typography
          variant="h1"
          color="#6c63fe"
          className="text-3xl font-semibold mb-4"
        >
          ABOUT US
        </Typography>
      </div>

      <div className="flex flex-col md:flex-row mt-12 mb-12 items-center justify-center md:justify-start md:space-x-6  w-4/5">
        {" "}
        {/* Changed mt-4 to mt-2 */}
        <div className="w-full">
          <iframe
            className=" rounded-lg"
            width="1200"
            height="650"
            src="https://www.youtube.com/embed/5s26Irj9DqM?si=w02gKjoE5YoW_tPR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="flex flex-row md:flex-row items-center justify-around translate-x-32 mb-12 md:space-x-6 mt-2">
        {" "}
        {/* Changed mt-4 to mt-2 */}
        <div className="md:w-2/5 ">
          <img
            className="number4img   mx-12 "
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"
            alt="Number 5"
          />
          {/* <img src="/abt1.webp" alt="contactus" className="w-full" /> */}
        </div>
        <div className="md:w-1/2">
          <Typography
            variant="h1"
            color="#4793AF"
            className="text-3xl font-semibold mb-4"
          >
            {" "}
            Meet Our Creative Team
          </Typography>
          <Typography variant="h3" className="text-3xl font-semibold mb-4 mt-4">
            {" "}
            1.Aayush's Project:
          </Typography>
          <h2>
            Website Link: <a>https://lime-different-giraffe.cyclic.app/</a>
          </h2>
          <h2>
            Github: <a>https://github.com/Aayushch1212/ipsite</a>
          </h2>
          
          <Typography variant="h3" className="text-3xl font-semibold mb-4 mt-4">
            {" "}
            2.Abhishek's Project:
          </Typography>
          <h2>
            {" "}
            Website Link:<a>https://recipe-a-day.vercel.app/</a>
          </h2>
          <h2>
            Github:<a>https://github.com/AbhishekIIITD/RecipeADay.git</a>
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default Abt;

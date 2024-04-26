import React from "react";
import { Typography } from "@mui/material";
const Abt = () => {
  return (
    <div className="about-container mt-12" id="about">
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
    </div>
  );
};

export default Abt;

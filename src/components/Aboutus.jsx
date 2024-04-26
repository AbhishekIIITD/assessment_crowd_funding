import React from 'react';
import { Typography } from '@mui/material';
const Abt = () => {
  return (
   
 
    
        <div className="about-container">
         <Typography variant="h1" color="#4793AF"className="text-3xl font-semibold mb-4"> 
        <h5 className="font-nunito text-center mt-2"> ABOUT US
            </h5> </Typography>                                            
    
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:space-x-6 mt-2"> {/* Changed mt-4 to mt-2 */}
            <div className="md:w-1/2">
              <img src="/abt1.webp" alt="contactus" className="w-full" />
            </div>
            <div className="md:w-1/2">
              <p className="font-nunito text-justify mt-2"> {/* Adjusted mt-2 */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                officiis obcaecati esse tempore unde ratione, eveniet mollitia,
                perferendis eius temporibus dicta blanditiis doloremque explicabo
                quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
                accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
                commodi illum quidem neque tempora nam.
              </p>
              <p className="font-nunito text-justify mt-2"> {/* Adjusted mt-2 */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                officiis obcaecati esse tempore unde ratione, eveniet mollitia,
                perferendis eius temporibus dicta blanditiis doloremque explicabo
                quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
                accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
                commodi illum quidem neque tempora nam.
              </p>
            </div>
          </div>
        
    
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:space-x-6 mt-2"> {/* Changed mt-4 to mt-2 */}
          <div className="md:w-1/2">
          <Typography variant="h1" color="#41B06E"className="text-3xl font-semibold mb-4"> Title: Frontend/Backend Development Assessment - Dummy Landing Page Demo</Typography>

<h1>Description:</h1>
<p>This video demonstrates a dummy landing page created as part of a frontend/backend development assessment. The landing page includes a header with navigation links (Home, About Us, Login, Register User), a footer with Home and About Us buttons mapped to the home page, and a form titled 'User Data' with various input fields.
            </p></div>
            <div className="md:w-1/2">
            <iframe className=" mx-2 my-2" width="700" height="400" src="https://www.youtube.com/embed/j6Ule7GXaRs?si=feEiD1nTEFvCEzSv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             
            </div>
           
          </div>
 
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:space-x-6 mt-2"> {/* Changed mt-4 to mt-2 */}
            <div className="md:w-1/2">
            <img
            className="number4img h-1/3  mx-2 my-2"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"
            alt="Number 5"
          />
              {/* <img src="/abt1.webp" alt="contactus" className="w-full" /> */}
            </div>
            <div className="md:w-1/2">
            <p className="text-blk heading" style={{ fontFamily: "'Jersey 25', sans-serif" }}>
        <Typography variant="h1" color="#4793AF"className="text-3xl font-semibold mb-4"> Meet Our Creative Team</Typography>
        </p>
        <p className="text-blk subHeading">
        <Typography variant="h3" className="text-3xl font-semibold mb-4"> 1.Aayush's Project:</Typography>
<h2>Website Link: <a>https://lime-different-giraffe.cyclic.app/</a></h2>
<h2>Github: <a>https://github.com/Aayushch1212/ipsite</a></h2>

<h3>Details:</h3>
Developed mern -stack web application “Hardware Chacha’’ using
MongoDB,Express,React and Node.js .
<Typography variant="h3" className="text-3xl font-semibold mb-4"> <h1>2.Abhishek's Project:</h1></Typography>

<h2> Website Link:<a>https://recipe-a-day.vercel.app/</a></h2>
 <h2>Github:<a>https://github.com/AbhishekIIITD/RecipeADay.git</a></h2>
<h3>Details:</h3>
A recipe website leveraging a vast database to provide daily recipe recommendations tailored to user preferences via a REST API , Nextjs  and all basic tools.

        </p>
            </div>
          </div>

        <div className="responsive-container-block bigContainer mx-2 my-2">
        <div className="responsive-container-block Container flex">
        <div className="leftSide flex flex-col justify-center" style={{ backgroundImage: "/bg.jpg", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      </div>
    
          <div className="responsive-container-block rightSide flex flex-wrap justify-center">
          {/* <iframe className=" mx-2 my-2" width="800" height="400" src="https://www.youtube.com/embed/j6Ule7GXaRs?si=feEiD1nTEFvCEzSv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          
             <div className="image-container flex flex-col items-right">
            
          
            </div>
             
       
        </div>
      
          </div>
        </div>
      </div>

    
  );
};

 export default Abt;

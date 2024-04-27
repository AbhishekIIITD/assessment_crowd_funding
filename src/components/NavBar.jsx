import Link from 'next/link';
import { useEffect, useState } from 'react';
import {  Home as HomeIcon, AccountCircle as AccountCircleIcon, Info as InfoIcon, PersonAdd as PersonAddIcon,Login as LoginIcon  } from '@mui/icons-material';
import axios from 'axios';
import { useRouter } from 'next/router';
import Fuse from 'fuse.js';

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/getUser`);
        setUser(res.data.user[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);

      }
    };

    fetchData()
  }, []);

  return (
    <nav className="rounded-full w-4/5 mx-auto my-8 bg-slate-500" style={{
      background: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(5px)',
      WebkitBackdropFilter: 'blur(5px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    }}>
      <ul className="flex p-4 justify-evenly">
        
        <li className="mx-2">
          <Link href="/">
            <div className="flex items-center text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-full">
              <HomeIcon />
              <span className="ml-2">Home</span>
            </div>
          </Link>
        </li>

        {
          (!user)&&(
            <li className="mx-2">
          <Link href="#Register">
            <div className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
              <PersonAddIcon />
              <span className="ml-2">Register</span>
            </div>
          </Link>
        </li>
          )
        }

        <li className="mx-2">
        {user ? (
            <Link href={"/profile/"+user.username}>
              <div className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
                <AccountCircleIcon />
                <span className="ml-2">Profile</span>
              </div>
            </Link>
          ) : (
            <Link href="/signin">
              <div className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
                <LoginIcon /> 
                <span className="ml-2">Sign In</span>
              </div>
            </Link>
          )}
        </li>


        <li className="mx-2">
          <Link href="#about">
            <div className="flex items-center text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-full">
              <InfoIcon />
              <span className="ml-2">About Us</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

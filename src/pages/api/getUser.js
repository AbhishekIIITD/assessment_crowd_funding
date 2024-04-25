import { executeQuery } from "@/lib/db";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req, res) {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.token;
    if(!token){
      return res.status(404).json({ message: 'User not found' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const username = decodedToken.username;

    const user = await executeQuery(`SELECT * FROM users WHERE username='${username}'`);

    // Checking if the user exists
    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Returning the user data if its valid
    res.status(200).json({ user });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

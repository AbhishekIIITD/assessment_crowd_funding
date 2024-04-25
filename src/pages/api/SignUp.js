import { executeQuery } from "@/lib/db";

export default async function handler(req, res) {
  try {
    const { username, password, gender,skills } = req.body;
 
    //setting newCustomerId to be the lstMax+1
    const maxCustomerIdResult = await executeQuery('SELECT MAX(user_id) AS maxId FROM Users');
    const maxCustomerId = maxCustomerIdResult[0].maxId || 0;
    
    // Increment the maximum Customer_id by one to generate the new Customer_id
    const newCustomerId = maxCustomerId + 1;

    // Checking if the user already exists
    const existingUser = await executeQuery(`SELECT * FROM Users WHERE username='${username}'`);

    if (existingUser.length === 0) {
      // If the user doesn't exist, inserting the user into the database
      await executeQuery(`
      INSERT INTO users (username,Password, gender, skills)
        VALUES ('${username}','${password}', '${gender}', '${skills}')
      `);
      res.status(201).json({ message: 'User created successfully' });
    } else {
      // If the user already exists, return an error
      res.status(400).json({ message: 'User already exists' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

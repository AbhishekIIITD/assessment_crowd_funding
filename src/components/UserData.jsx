import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";

const UserData = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [skills, setSkills] = useState([]);

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted:", { username, password, gender, skills });
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setGender("Male");
    setSkills([]);
  };

  return (
    <Container maxWidth="false" className=" h-3/6 flex flex-col">
      <Grid container spacing={0} className="flex-grow">

        <Grid item xs={6} className="h-full overflow-hidden relative">
          <Paper elevation={3} className="p-4 h-full">
            
            <img src="/male_avatar.png" alt="User Data" className="mx-auto my-auto h-full" />
            
          </Paper>
        </Grid>

        {/* Form Section */}
        <Grid item xs={6} className="h-full overflow-y-auto">
          <Paper elevation={3} className="p-4 h-full">
            <h2 className="text-xl font-semibold mb-4">User Form</h2>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                inputProps={{ minLength: 4, maxLength: 32 }}
                className="mb-4"
              />

              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                inputProps={{
                  pattern:
                    "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$",
                }}
                className="mb-4"
              />

              <RadioGroup
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mb-4"
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>

              <Select
                label="Skills"
                variant="outlined"
                fullWidth
                multiple
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="mb-4"
              >
                <MenuItem value="JS">JS</MenuItem>
                <MenuItem value="React">React</MenuItem>
                <MenuItem value="API">API</MenuItem>
                <MenuItem value="Backend">Backend</MenuItem>
              </Select>

              <div className="flex justify-between">
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
                <Button
                  type="reset"
                  variant="outlined"
                  color="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserData;
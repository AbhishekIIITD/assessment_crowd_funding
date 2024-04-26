import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { toast } from "react-hot-toast";

import {
  Container,
  Typography,
  Grid,
  Avatar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import Navbar from "@/components/NavBar";

const UserDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  

  const logout = async () => {
    try {
      await axios.get("/api/Logout");
      toast.success("Logout successful");
      router.push("/");
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/getUser?id=${id}`);
        
        // Check if user exists 
        if (res.data.user.length > 0 ) {
          setUser(res.data.user[0]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "80vh" }}
        >
          <CircularProgress />
        </Grid>
      </Container>
    );
  }

  if (!user) {
    return (
      <Container>
        <Typography variant="h4">User not found</Typography>
      </Container>
    );
  }

  return (
    <div className=" w-full justify-center">
      <Navbar />
      {
        user&&<Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6} sx={{ textAlign: "center", my: 4 }}>
          <Avatar
            sx={{ width: 120, height: 120, mx: "auto" }}
            src={user.avatar}
            alt={user.username}
          />
          <Typography variant="h4" mt={2}>
            {user.username}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {user.gender}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {"Skills : "+user.skills}
          </Typography>
          {/* <IconButton color="primary" aria-label="edit profile">
            <EditIcon onClick={() => setOpenEditDialog(!openEditDialog)} />
          </IconButton>
          {openEditDialog && <EditProfileForm user={user} setUser={setUser} />} */}

          <Button
            variant="contained"
            color="primary"
            onClick={logout}
            className="mt-4 block translate-x-80"
          >
            Logout
          </Button>
        </Grid>
        {/* Add more user details here */}
      </Grid>
      
      }
    </div>
  );
};

export default UserDetailsPage;

import "./Home.scss";
import { Stack, Box, Button, Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";

import img from "../../learning.jpg";

import Course from "../../components/Course";
import SearchBar from "../../components/SearchBar";

function Home() {
  return (
    <>
      <Stack direction="column">
        <Box>
          <Stack direction="row">
            <SearchBar />
            <Button
              variant="contained"
              sx={{
                margin: "30px 170px",
                width: "100px",
                background: "#9095a1",
              }}
            >
              Sắp xếp
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            margin: "20px 100px",
            bgcolor: "background.paper",
            borderColor: "text.primary",
            border: 1,
            width: "200px",
            height: "40px",
            borderRadius: "8px",
            textAlign:"center"
          }}
        >
          <Typography sx={{margin:"8px"}}>Khóa học mới nhất</Typography>
        </Box>
        <Box sx={{ margin: "20px 80px", width: "600px" }}>
          <Course />
        </Box>
      </Stack>
    </>
  );
}

export default Home;

import { Button, Stack, Box, Text } from "@chakra-ui/react";
import React from "react";
import { SearchBar } from "components/Navbars/SearchBar/SearchBar";
import { Course } from "components/Course/Course";

function Dashboard() {
  return (
    <>
      <Stack direction={["column"]} spacing={5} sx={{ marginTop: "100px", marginLeft: "100px" }}>
        <Box>
          <Stack direction={["row"]} spacing={100}>
            <SearchBar />
            <Button
              variant="contained"
              sx={{
                width: "120px",
                background: "#9095a1",
                color: "#ffffff",
                fontFamily: "Plus Jakarta Display"
              }}
            >
              Sắp xếp
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            margin: "30px 100px",
            width: "200px",
            height: "40px",
            textAlign: "center",
            color: "#ffffff"
          }}
        >
          <Text sx={{ margin: "8px" }}>Khóa học mới nhất</Text>
        </Box>
        <Box sx={{ margin: "20px 80px", width: "100%" }}>
          <Course />
        </Box>
      </Stack>
    </>
  );
}

export default Dashboard;

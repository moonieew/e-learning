import { Box, Typography } from "@mui/material";
import React from "react";
import img from "../../learning.jpg";

function Course() {
  return (
    <>
      <Box sx={{ width: "256px", height: "170px" }}>
        <img alt="" style={{ width: "100%", height: "84px" }} src={img} />
        <Box sx={{marginTop:"10px"}}>
          <Typography>Tiêu đề</Typography>
          <Typography>Mô tả ngắn gọn</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Course;

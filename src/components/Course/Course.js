import { Box, Text } from "@chakra-ui/react";
import React from "react";
import img from "assets/img/ProjectImage3.png";

export function Course({props}) {
  return (
    <>
      <Box sx={{ width: "256px", height: "170px", background:"#ffff" }}>
        <img alt="" style={{ width: "100%", height: "84px" }} src={img} />
        <Box sx={{marginTop:"10px"}}>
          <Text>Tiêu đề</Text>
          <Text>Mô tả ngắn gọn</Text>
        </Box>
      </Box>
    </>
  );
}


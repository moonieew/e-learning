import "./Header.scss";
import {
  Stack,
  Box,
  Button,
  Typography,
  MenuItem,
  Select,
  FormControl,
  Avatar,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import img from "../../learning.jpg";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useState } from "react";

function Header() {
  const [MenuClass, setMenuClass] = useState(1);

  const handleChange = (event) => {
    setMenuClass(event.target.value);
  };

  return (
    <>
      <div style={{ borderBottom: "1px solid #ececec" }}>
        <Box sx={{ margin: "10px 40px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Link className="header__logo" to={"/"}>
              <img
                alt=""
                style={{ width: "120px", height: "60px" }}
                src={img}
              />
            </Link>

            <Box sx={{ minWidth: 120 }}>
              <Stack direction="row">
                <FormControl sx={{ width: "200px", marginRight: "50px" }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={MenuClass}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Lớp học</MenuItem>
                    <MenuItem value={2}>Tạo lớp học</MenuItem>
                    <MenuItem value={3}>Quản lý lớp học</MenuItem>
                  </Select>
                </FormControl>

                <Button
                  sx={{ padding: "6px 0", marginRight: "40px" }}
                  endIcon={<KeyboardArrowDownIcon sx={{ color: "#333" }} />}
                  className="header__menu"
                >
                  <Typography
                    className="text-overflow-1-lines"
                    sx={{ fontSize: "13px", textAlign: "start", color: "#333" }}
                  >
                    Quản lý giảng viên
                  </Typography>
                  <Box className="header__dropdown">
                    <Link to={"/"}>Giảng viên</Link>
                    <Link to={"/"}>Giảng viên</Link>
                    <Link to={"/"}>Giảng viên</Link>
                    <Link to={"/"}>Giảng viên</Link>
                  </Box>
                </Button>

                <Button
                  sx={{ padding: "6px 0" }}
                  endIcon={<KeyboardArrowDownIcon sx={{ color: "#333" }} />}
                  className="header__menu"
                >
                  <Typography
                    className="text-overflow-1-lines"
                    sx={{
                      fontSize: "13px",
                      textAlign: "start",
                      color: "#333",
                    }}
                  >
                    Quản lý sinh viên
                  </Typography>
                  <Box className="header__dropdown">
                    <Link to={"/"}>Sinh viên</Link>
                    <Link to={"/"}>Sinh viên</Link>
                    <Link to={"/"}>Sinh viên</Link>
                    <Link to={"/"}>Sinh viên</Link>
                  </Box>
                </Button>
              </Stack>
            </Box>

            <Box>
              <Stack direction="row">
                <Button>
                  <NotificationsNoneOutlinedIcon sx={{color:"#9095a1"}} />
                </Button>
                {/* <Button
                  sx={{ padding: "6px 0" }}
                  startIcon={<Avatar src={img} />}
                  className="header__menu"
                > */}
                <IconButton
                  sx={{alignItems:"center"}}
                  className="header__menu"
                >
                  <Avatar src={img} />

                  <Box className="header__dropdown">
                    <Link to={"/"}>Thông tin cá nhân</Link>
                    <Link to={"/"}>Đăng xuất</Link>
                  </Box>
                </IconButton>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </div>
    </>
  );
}

export default Header;

import "./Header.scss";
import {
  Stack,
  Box,
  Button,
  Text,
  MenuItem,
  Select,
  FormControl,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Flex
} from "@chakra-ui/react";

import { BellIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import img from "assets/img/ProjectImage3.png";
import { ItemContent } from "components/Menu/ItemContent";

// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";

import { ChevronDownIcon } from "@chakra-ui/icons";

import { useState } from "react";

function Header() {
  const [MenuClass, setMenuClass] = useState(1);

  let navbarIcon = "white";

  const handleChange = (event) => {
    setMenuClass(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div style={{ borderBottom: "1px solid #ececec", width: "100%" }}>
        <Box sx={{ margin: "10px 40px" }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <Box sx={{ minWidth: 120 }}>
              <Stack direction="row">
                <FormControl sx={{ width: "200px", marginRight: "50px" }}>
                  {/* <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={MenuClass}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>Lớp học</MenuItem>
                    <MenuItem value={2}>Tạo lớp học</MenuItem>
                    <MenuItem value={3}>Quản lý lớp học</MenuItem>
                  </Select> */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={MenuClass}
                    onChange={handleChange}
                  >
                    <option value={1}>Lớp học</option>
                    <option value={2}>Tạo lớp học</option>
                    <option value={3}>Quản lý lớp học</option>
                  </Select>
                </FormControl>

                <Button
                  sx={{ padding: "6px 0", marginRight: "40px",width: "200px", background: "inherit" }}
                  rightIcon={<ChevronDownIcon sx={{ color: "#333" }} />}
                  className="header__menu"
                >
                  <Text className="text-overflow-1-lines" sx={{ fontSize: "13px", textAlign: "start", color: "#333" }}>
                    Quản lý giảng viên
                  </Text>
                  <Box className="header__dropdown">
                    <Link to={"/"}>Giảng viên</Link>
                    <Link to={"/"}>Giảng viên</Link>
                    <Link to={"/"}>Giảng viên</Link>
                    <Link to={"/"}>Giảng viên</Link>
                  </Box>
                </Button>

                <Button
                  sx={{ padding: "6px 0", width: "200px", background: "inherit" }}
                  rightIcon={<ChevronDownIcon sx={{ color: "#333" }} />}
                  className="header__menu"
                >
                  <Text
                    className="text-overflow-1-lines"
                    sx={{
                      fontSize: "13px",
                      textAlign: "start",
                      color: "#333"
                    }}
                  >
                    Quản lý sinh viên
                  </Text>
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
                <Menu>
                  <MenuButton align="center" sx={{ mr: "20px" }}>
                    <BellIcon color={navbarIcon} mt="-4px" w="18px" h="18px" />
                  </MenuButton>

                  <MenuList
                    border="transparent"
                    backdropFilter="blur(63px)"
                    bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)"
                    borderRadius="20px"
                  >
                    <Flex flexDirection="column">
                      <MenuItem
                        borderRadius="8px"
                        _hover={{
                          bg: "transparent"
                        }}
                        _active={{
                          bg: "transparent"
                        }}
                        _focus={{
                          bg: "transparent"
                        }}
                        mb="10px"
                      >
                        <ItemContent
                          time="13 minutes ago"
                          info="from Alicia"
                          boldInfo="New Message"
                          aName="Alicia"
                          aSrc={avatar1}
                        />
                      </MenuItem>
                      <MenuItem
                        borderRadius="8px"
                        _hover={{
                          bg: "transparent"
                        }}
                        _active={{
                          bg: "transparent"
                        }}
                        _focus={{
                          bg: "transparent"
                        }}
                        _hover={{ bg: "transparent" }}
                        mb="10px"
                      >
                        <ItemContent
                          time="2 days ago"
                          info="by Josh Henry"
                          boldInfo="New Album"
                          aName="Josh Henry"
                          aSrc={avatar2}
                        />
                      </MenuItem>
                      <MenuItem
                        borderRadius="8px"
                        _hover={{
                          bg: "transparent"
                        }}
                        _active={{
                          bg: "transparent"
                        }}
                        _focus={{
                          bg: "transparent"
                        }}
                      >
                        <ItemContent
                          time="3 days ago"
                          info="Payment succesfully completed!"
                          boldInfo=""
                          aName="Kara"
                          aSrc={avatar3}
                        />
                      </MenuItem>
                    </Flex>
                  </MenuList>
                </Menu>

                <IconButton sx={{ alignItems: "center" }} className="header__menu">
                  {/* <Avatar src={img} /> */}

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

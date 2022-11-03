// Chakra imports
import { Avatar, AvatarBadge, Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import avatar11 from "assets/img/avatars/avatar11.png";
// Images
// Custom components
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import { Separator } from "components/Separator/Separator";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
// Icons
// Data

function Profile() {
  return (
    <Flex direction="column" mt={{ sm: "25px", md: "0px" }}>
      <Box
        mb={{ sm: "24px", md: "50px", xl: "20px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        {/* Header */}
        <Card
          direction={{ sm: "column", md: "row" }}
          mx="auto"
          maxH="330px"
          w={{ sm: "90%", xl: "100%" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          align="center"
          p="24px"
          borderRadius="20px"
          mt="100px"
        >
          <Flex align="center" direction={{ sm: "column", md: "row" }}>
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar me={{ md: "22px" }} src={avatar11} w="80px" h="80px" borderRadius="15px">
                <AvatarBadge
                  cursor="pointer"
                  borderRadius="8px"
                  border="transparent"
                  bg="linear-gradient(138.78deg, rgba(6, 11, 40, 0.94) 17.44%, rgba(10, 14, 35, 0.49) 93.55%, rgba(10, 14, 35, 0.69) 93.55%)"
                  boxSize="26px"
                  backdropFilter="blur(120px)"
                >
                  <Icon h="12px" w="12px" color="#fff" as={FaPencilAlt} />
                </AvatarBadge>
              </Avatar>
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                <Text fontSize={{ sm: "lg", lg: "xl" }} color="#fff" fontWeight="bold" ms={{ sm: "8px", md: "0px" }}>
                  Mark Johnson
                </Text>
                <Text fontSize={{ sm: "sm", md: "md" }} color="gray.400">
                  mark@simmmple.com
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Box>
      <Grid>
        {/* Profile Information */}
        <Card
          p="16px"
          // maxH={{ md: "410px" }}
          // maxW={{ sm: "325px", md: "725px", lg: "980px" }}
          gridArea={{ xl: "1 / 2 / 2 / 3", "2xl": "auto" }}
        >
          <CardHeader p="12px 5px" mb="12px">
            <Text fontSize="lg" color="#fff" fontWeight="bold">
              Profile Information
            </Text>
          </CardHeader>
          <CardBody px="5px">
            <Flex direction="column">
              <Text fontSize="sm" color={"gray.400"} fontWeight="400" mb="15px">
                Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths,
                choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
              </Text>
              <Separator mb="30px" />
              <Flex align="center" mb="18px">
                <Text fontSize="sm" color={"gray.400"} me="10px">
                  Full Name:{" "}
                </Text>
                <Text fontSize="sm" color="#fff" fontWeight="400">
                  Mark Johnson
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="sm" color={"gray.400"} me="10px">
                  Mobile:{" "}
                </Text>
                <Text fontSize="sm" color="#fff" fontWeight="400">
                  (44) 123 1234 123
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="sm" color={"gray.400"} me="10px">
                  Email:{" "}
                </Text>
                <Text fontSize="sm" color="#fff" fontWeight="400">
                  mark@simmmple.com
                </Text>
              </Flex>
              <Flex align="center" mb="18px">
                <Text fontSize="sm" color={"gray.400"} me="10px">
                  Location:{" "}
                </Text>
                <Text fontSize="sm" color="#fff" fontWeight="400">
                  United States
                </Text>
              </Flex>
            </Flex>
          </CardBody>
        </Card>
      </Grid>
    </Flex>
  );
}

export default Profile;

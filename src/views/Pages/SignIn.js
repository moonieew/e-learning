import React from "react";
// Chakra imports
import { Box, Flex, Button, FormControl, FormLabel, Heading, Input, Switch, Text, DarkMode } from "@chakra-ui/react";

// Assets
import signInImage from "assets/img/signInImage.png";

// Custom Components
import GradientBorder from "components/GradientBorder/GradientBorder";

function SignIn() {
  const titleColor = "white";
  const textColor = "gray.400";

  return (
    <Flex position="relative">
      <Flex
        minH="100vh"
        h={{ base: "120vh", lg: "fit-content" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        pt={{ sm: "100px", md: "0px" }}
        flexDirection="column"
        me={{ base: "auto", lg: "50px", xl: "auto" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px="50px"
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
            mb={{ base: "60px", lg: "95px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Nice to see you!
            </Heading>
            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
              Enter your email and password to sign in
            </Text>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
                Email
              </FormLabel>
              <GradientBorder mb="24px" w={{ base: "100%", lg: "fit-content" }} borderRadius="20px">
                <Input
                  color="white"
                  bg="rgb(19,21,54)"
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  placeholder="Your email adress"
                />
              </GradientBorder>
            </FormControl>
            <FormControl>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal" color="white">
                Password
              </FormLabel>
              <GradientBorder mb="24px" w={{ base: "100%", lg: "fit-content" }} borderRadius="20px">
                <Input
                  color="white"
                  bg="rgb(19,21,54)"
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  type="password"
                  placeholder="Your password"
                />
              </GradientBorder>
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <DarkMode>
                <Switch id="remember-login" colorScheme="brand" me="10px" />
              </DarkMode>
              <FormLabel htmlFor="remember-login" mb="0" ms="1" fontWeight="normal" color="white">
                Remember me
              </FormLabel>
            </FormControl>
            <Button variant="brand" fontSize="10px" type="submit" w="100%" maxW="350px" h="45" mb="20px" mt="20px">
              SIGN IN
            </Button>
            <Button variant="brand" fontSize="10px" type="submit" w="100%" maxW="350px" h="45" mb="20px" mt="20px">
              SIGN IN WITH GOOGLE
            </Button>
          </Flex>
        </Flex>

        <Box
          display={{ base: "none", lg: "block" }}
          overflowX="hidden"
          h="100%"
          maxW={{ md: "50vw", lg: "50vw" }}
          minH="100vh"
          w="960px"
          position="absolute"
          left="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="absolute"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;

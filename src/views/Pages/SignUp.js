import React from "react";

// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
  DarkMode,
  Radio,
  RadioGroup
} from "@chakra-ui/react";

// Icons
// Custom Components
import GradientBorder from "components/GradientBorder/GradientBorder";

// Assets

function SignUp() {
  const titleColor = "white";
  const textColor = "gray.400";
  const [value, setValue] = React.useState("1");
  return (
    <Flex position="relative" overflow={{ lg: "hidden" }}>
      <Flex>
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          flexDirection="column"
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb="50px"
          w={{ base: "100%", md: "50%", lg: "42%" }}
        >
          <Flex
            direction="column"
            textAlign="center"
            justifyContent="center"
            align="center"
            mt={{ base: "60px", md: "140px", lg: "200px" }}
            mb="50px"
          >
            <Text fontSize="4xl" lineHeight="39px" color="white" fontWeight="bold">
              Register
            </Text>
          </Flex>
          <GradientBorder p="2px" me={{ base: "none", lg: "30px", xl: "none" }}>
            <Flex
              background="transparent"
              borderRadius="30px"
              direction="column"
              p="40px"
              minW={{ base: "unset", md: "430px", xl: "450px" }}
              w="100%"
              mx={{ base: "0px" }}
              bg={{
                base: "rgb(19,21,56)"
              }}
            >
              <FormControl>
                <RadioGroup
                  onChange={setValue}
                  value={value}
                  color={titleColor}
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                >
                  <Radio value="1">Admin</Radio>
                  <Radio value="2">Student</Radio>
                  <Radio value="3">Teacher</Radio>
                </RadioGroup>
                <FormLabel color={titleColor} ms="4px" fontSize="sm" fontWeight="normal">
                  Name
                </FormLabel>
                <GradientBorder mb="24px" h="50px" w={{ base: "100%", lg: "fit-content" }} borderRadius="20px">
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)"
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="text"
                    placeholder="Your name"
                  />
                </GradientBorder>
                <FormLabel color={titleColor} ms="4px" fontSize="sm" fontWeight="normal">
                  Birthday
                </FormLabel>
                <GradientBorder mb="24px" h="50px" w={{ base: "100%", lg: "fit-content" }} borderRadius="20px">
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)"
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="text"
                    placeholder="Your birthday"
                  />
                </GradientBorder>
                <FormLabel color={titleColor} ms="4px" fontSize="sm" fontWeight="normal">
                  Phone
                </FormLabel>
                <GradientBorder mb="24px" h="50px" w={{ base: "100%", lg: "fit-content" }} borderRadius="20px">
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)"
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="text"
                    placeholder="+84"
                  />
                </GradientBorder>
                <FormLabel color={titleColor} ms="4px" fontSize="sm" fontWeight="normal">
                  Email
                </FormLabel>
                <GradientBorder mb="24px" h="50px" w={{ base: "100%", lg: "fit-content" }} borderRadius="20px">
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)"
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="email"
                    placeholder="Your email address"
                  />
                </GradientBorder>
                <FormLabel color={titleColor} ms="4px" fontSize="sm" fontWeight="normal">
                  Password
                </FormLabel>
                <GradientBorder mb="24px" h="50px" w={{ base: "100%", lg: "fit-content" }} borderRadius="20px">
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)"
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="password"
                    placeholder="Your password"
                  />
                </GradientBorder>
                <FormControl display="flex" alignItems="center" mb="24px">
                  <DarkMode>
                    <Switch id="remember-login" colorScheme="brand" me="10px" />
                  </DarkMode>

                  <FormLabel color={titleColor} htmlFor="remember-login" mb="0" fontWeight="normal">
                    Remember me
                  </FormLabel>
                </FormControl>
                <Button variant="brand" fontSize="10px" type="submit" w="100%" maxW="350px" h="45" mb="20px" mt="20px">
                  SIGN UP
                </Button>
              </FormControl>
            </Flex>
          </GradientBorder>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;

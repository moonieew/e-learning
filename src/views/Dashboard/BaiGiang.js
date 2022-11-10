import {
  FormControl,
  FormLabel,
  Button,
  Stack,
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon, AttachmentIcon } from "@chakra-ui/icons";
import { AiFillPicture } from "react-icons/ai";

function BaiGiang() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Stack direction={["row"]} sx={{ marginTop: "100px", marginLeft: "100px" }}>
        <Box sx={{ marginRight: "100px" }}>
          <Stack
            spacing={0}
            direction="row"
            alignItems="center"
            sx={{ padding: "0", width: "500px", height: "40px", flex: 1, position: "relative" }}
          >
            <InputGroup size="md">
              <Input
                style={{ flex: 1, background: "#ffffff" }}
                id="input-search"
                placeholder="Search..."
                // onFocus={() => setFocusSearch(true)}
                // value={searchText}
                // onChange={onChangeSearch}
                // debounceTimeout={500}
              />
              <InputRightElement width="1.5rem">
                <Button
                  sx={{
                    height: "100%",
                    width: "8rem",
                    backgroundColor: "#00bdd6",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0"
                  }}
                  variant="contained"
                  leftIcon={<SearchIcon />}
                />
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Box>

        <Button sx={{ backgroundColor: "#00bdd6" }} onClick={onOpen}>
          Thêm bài giảng
        </Button>
      </Stack>

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm bài giảng</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tên Bài Giảng</FormLabel>
              <Input ref={initialRef} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Nội dung</FormLabel>
              <Input placeholder="Nhập nội dung" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link bài giảng</FormLabel>
              <Input placeholder="Nhập link bài giảng" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Banner</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<AiFillPicture color="gray.300" />} />
                <Input type={"file"} />
              </InputGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>File bài giảng</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<AttachmentIcon color="gray.300" />} />
                <Input type={"file"} />
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Tạo
            </Button>
            <Button onClick={onClose}>Hủy</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BaiGiang;

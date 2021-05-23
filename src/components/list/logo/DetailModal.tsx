import React, { FC } from "react";
import {
  Button,
  Code,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Modal,
  Box,
  Flex,
} from "@chakra-ui/react";
import Preview from "src/components/list/logo/Preview";
import { ManufacturerLogo } from "src/types/Logos";

type Props = {
  isOpen: boolean;
  onClose(): void;
  logo: ManufacturerLogo;
};

const DetailModal: FC<Props> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.logo.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Preview logo={props.logo} compact />
          <Box overflowX="scroll" mt={4}>
            <Code as="pre">{JSON.stringify(props.logo, null, 2)}</Code>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button colorScheme="blue">Copy to Clipboard</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;

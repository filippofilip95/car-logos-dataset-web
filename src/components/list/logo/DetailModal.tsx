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
  useToast,
  Text,
} from "@chakra-ui/react";
import Preview from "src/components/list/logo/Preview";
import { ManufacturerLogo } from "src/types/Logos";
import { copyTextToClipboard } from "../../../utils/clipboard";

type Props = {
  isOpen: boolean;
  onClose(): void;
  logo: ManufacturerLogo;
};

const DetailModal: FC<Props> = (props) => {
  const toast = useToast({ position: "top" });
  const json = JSON.stringify(props.logo, null, 2);

  async function onCopyToClipboard() {
    try {
      await copyTextToClipboard(json);
      toast({ title: "JSON copied to clipboard." });
    } catch (e) {
      toast({ title: "Unable to copy." });
    }
  }

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} size="4xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.logo.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Preview logo={props.logo} compact />
          <Text>JSON:</Text>
          <Box overflowX="scroll" mt={4}>
            <Code as="pre">{json}</Code>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button colorScheme="blue" onClick={onCopyToClipboard}>
            Copy to Clipboard
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailModal;

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Form from "../Pages/Contact/Form";
import Cta from "./Cta";

const ContactModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Cta type="let's talk" onClick={onOpen} />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={window.innerWidth >= 1535 ? "xl" : "lg"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Hire Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Form onClose={onClose} />
          </ModalBody>
          <ModalFooter justifyContent="end">
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;

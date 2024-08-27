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
import ContactIcon from "./ContactIcon";
import mySocials from "../utils/socials";
import emailIcon from "../assets/SocialMediaIcons/email.svg";
import phoneIcon from "../assets/SocialMediaIcons/phone.svg";

const ContactModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <button
        onClick={onOpen}
        className="cursor-pointer rounded-xl border-2 border-secondary-300 px-6 py-2 text-center text-base font-bold leading-loose tracking-wider text-primary-900 transition-colors duration-300 ease-out hover:border-primary-600 hover:bg-white hover:text-primary-700 tablet:text-lg desktop:text-xl"
      >
        Let's Talk!
      </button>

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
          <ModalFooter justifyContent="space-between">
            <div className="flex flex-row gap-4 ">
              {mySocials.map((mySocial, idx) => {
                return (
                  <ContactIcon
                    type="socialMedia"
                    socialLink={mySocial.link}
                    key={idx}
                    imageSrc={mySocial.src}
                    altText={mySocial.alt}
                  />
                );
              })}
              <ContactIcon
                contactLink="mailto:kulievdev@gmail.com"
                type="contactInfo"
                imageSrc={emailIcon}
                altText="My Email Icon"
              />
              <ContactIcon
                type="contactInfo"
                contactLink="tel:6466636636"
                imageSrc={phoneIcon}
                altText="My Email Icon"
              />
            </div>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;

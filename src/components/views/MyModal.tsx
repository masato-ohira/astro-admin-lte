import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'

export const MyModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const Lorem = () => {
  return (
    <>
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
      deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse
      quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit
      magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor
      eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
      Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
      consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
      deserunt nostrud ad veniam.
    </>
  )
}

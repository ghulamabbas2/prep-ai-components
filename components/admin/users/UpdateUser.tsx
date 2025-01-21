"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Tooltip,
  CheckboxGroup,
  Form,
} from "@heroui/react";
import { Icon } from "@iconify/react";

export default function UpdateUser() {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Tooltip color="secondary" content="Edit user">
        <span className="text-lg text-secondary-400 cursor-pointer active:opacity-50">
          <Icon icon={"tabler:user-edit"} fontSize={22} onClick={onOpen} />
        </span>
      </Tooltip>
      <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
        <Form>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Update User
                </ModalHeader>
                <ModalBody>
                  <Input
                    label="Name"
                    placeholder="Enter name"
                    variant="bordered"
                    isRequired
                  />
                  <Input
                    label="Email"
                    placeholder="Enter email"
                    variant="bordered"
                    type="email"
                    isDisabled
                  />

                  <div className="flex flex-col gap-3 mt-3">
                    <CheckboxGroup color="default" label="Select User Roles">
                      <Checkbox value={"role"}>{"role"}</Checkbox>
                    </CheckboxGroup>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" type="submit">
                    Update User
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Form>
      </Modal>
    </>
  );
}

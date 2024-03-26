import React from "react";
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
import { ChemicalElement } from "../data/elements";
import { PeriodicTable } from "@diamondlightsource/periodic-table/table";
import { ElementType } from "@diamondlightsource/periodic-table/elements";

export type ChangeElementModalProps = {
    callback: (e: ChemicalElement) => void
}

export function ChangeElementModal({ callback }: ChangeElementModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>Change the element</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change the element in this modal</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p>body</p>
                        {/* <PeriodicTable callback={(element: ElementType) {
                            const e: ChemicalElement = {
                                number: parseInt(element.Number),
                                isotopes: [],
                                symbol: element.Symbol,
                                mass: parseFloat(element["Atomic Weight"]),
                                name: element.Name
                            };
                            callback(e)
                        }} /> */}
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

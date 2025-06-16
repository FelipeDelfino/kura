'use client'
import { useState } from "react";
import {
    Box,
    Grid,
    Image,
    useDisclosure,
} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
} from "@chakra-ui/modal";


import { motion, AnimatePresence } from "framer-motion";

const MotionImage = motion(Image);
const MotionBox = motion(Box);

const images = [
    "https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft1-ovkrVsZ5Z976QCafILK2L4BdIjNFy3.png",
    "https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft3-A04DM8byXIBzqSLkEFtNWgtUYdgJkB.png",
    "https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft2-v2S0l37TOgRpae8lBySPMblLA5Pe2B.png",
    "https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft1-ovkrVsZ5Z976QCafILK2L4BdIjNFy3.png",
    "https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft3-A04DM8byXIBzqSLkEFtNWgtUYdgJkB.png",
    "https://gkfykfburbyl7hji.public.blob.vercel-storage.com/ft2-v2S0l37TOgRpae8lBySPMblLA5Pe2B.png",

];

export default function LightboxGallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { open, onOpen, onClose } = useDisclosure();

    const openImage = (src: string) => {
        setSelectedImage(src);
        onOpen();
    };

    const closeImage = () => {
        onClose();
        setTimeout(() => setSelectedImage(null), 200); // espera o fade-out
    };

    return (
        <>
            <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
                {images.map((src) => (
                    <MotionImage
                        key={src}
                        src={src}
                        alt="Imagem"
                        layoutId={src}
                        borderRadius="md"
                        cursor="pointer"
                        onClick={() => openImage(src)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </Grid>

            <AnimatePresence>
                {open && selectedImage && (
                    <Modal isOpen={open} onClose={closeImage} size="full" motionPreset='scale' isCentered>
                        <ModalOverlay
                            as={MotionBox}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            bg="blackAlpha.800"
                            onClick={closeImage}
                        />
                        <ModalContent
                            bg="transparent"
                            boxShadow="none"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            onClick={closeImage}
                        >
                            <MotionImage
                                src={selectedImage}
                                layoutId={selectedImage}
                                maxW="90vw"
                                maxH="90vh"
                                borderRadius="lg"
                                shadow="2xl"
                                onClick={closeImage}
                            />
                        </ModalContent>
                    </Modal>
                )}
            </AnimatePresence>
        </>

    );
}

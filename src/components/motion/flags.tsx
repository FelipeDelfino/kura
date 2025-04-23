"use client";

import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";

export default function StepFlags() {
    const steps = ["1", "2", "3"];

    return (
        <Flex align="center" bg="" p={4} gap={12} direction='row'>
            {steps.map((step, index) => (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    key={index}
                >
                    <Flex  position="relative" align="center" direction='row'>
                        <Flex
                            position="relative"
                            align="center"
                            bg="#f29f1e"
                            px={40}
                            py={0}
                            color="black"
                            fontWeight="bold"
                            fontSize="lg"
                            border="40px solid"
                            borderColor="#f29f1e #f29f1e #f29f1e #09090B"
                        >
                            {/* {step} */}
                        </Flex>
                        <Flex
                            position="relative"
                            align="center"
                            bg=""
                            px={0}
                            py={0}
                            color="black"
                            fontWeight="bold"
                            fontSize="lg"
                            border="40px solid"
                            borderColor="#09090B #09090B #09090B #f29f1e"
                        ></Flex>
                        {/* {index !== steps.length - 1 && (
                        <Box
                        position="absolute"
                        right={-4}
                        top={0}
                        bottom={0}
                        width={0}
                        height={0}
                        borderTop="20px solid transparent"
                        borderLeft="20px solidrgb(255, 0, 0)"
                        borderBottom="20px solid transparent"
                        />
                        )} */}
                    </Flex>
                </motion.div>
            ))}
        </Flex>
    );
}
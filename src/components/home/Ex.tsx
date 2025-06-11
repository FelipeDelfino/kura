"use-client"
import { Box, Container, Flex, Text, Button, Icon, Stack, Card } from "@chakra-ui/react";

export default function Ex() {
    return (
        <Box maxH="100%" minH="75vh" display="flex" alignItems="center" py=''>
            <Container maxW="8xl" centerContent>
                <Stack gap={12} textAlign="center" w="full">
                    <Box>
                        <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="black" letterSpacing={3} color="#f29f1e">
                            OQUE É SER CRIATIVO
                        </Text>
                        <Text fontSize={['sm', 'md', 'lg']} fontWeight="bold" color="#D3D3D3" mt={2}>
                            Soluções completas para sua presença digital
                        </Text>
                    </Box>

                    <Flex direction="row" gap={8} wrap="wrap" justify="center">
                        klasdjalksdjaskldjaslkj
                    </Flex>
                </Stack>
            </Container>
        </Box>
    )
}
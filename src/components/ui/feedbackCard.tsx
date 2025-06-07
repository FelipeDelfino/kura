import {
    Box,
    Text,
    Avatar,
    Flex,
    VStack,
    HStack,
} from '@chakra-ui/react';

interface FeedbackCardProps {
    name: string;
    role: string;
    company: string;
    // image: string;
    testimony: string;
}

export const FeedbackCard = ({
    name,
    role,
    company,
    // image,
    testimony,
}: FeedbackCardProps) => {
    return (
        <Box
            bg="gray.800"
            color="white"
            borderRadius="md"
            p={6}
            shadow="md"
            maxH='28vh'
            // minH='28vh'
            maxW="500px"
            h='28vh'
            w="full"
        >
            <VStack justify='end' align='start' bg='green' w='' h='full'>
                <Text fontStyle="italic" mb={4} fontWeight='light'>
                    "{testimony}"
                </Text>
                <Flex align='' bg='red'>
                    <HStack gap={4} mt={4}>
                        <Avatar.Root variant='solid' outlineWidth='2px' outlineOffset="1.5px" outlineStyle="solid" outlineColor='yellow'>
                            <Avatar.Fallback name={name} />
                        </Avatar.Root>
                        <VStack align="start" gap={0}>
                            <Text fontWeight="bold">{name}</Text>
                            <Text fontSize="sm" color="gray.400">
                                {role}, {company}
                            </Text>
                        </VStack>
                    </HStack>
                </Flex>
            </VStack>
        </Box >
    );
};

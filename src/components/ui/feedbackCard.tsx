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
    testimony: string;
}

export const FeedbackCard = ({
    name,
    role,
    company,
    testimony,
}: FeedbackCardProps) => {

    const avatarColors = [
        'blue',
        // 'green',
        // 'yellow',
        'purple',
        // 'red',
        'pink',
        'cyan',
        // 'orange',        
    ];
    const randomColor = avatarColors[Math.floor(Math.random() * avatarColors.length)];
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
            <Flex direction='column' justifyContent='space-between' bg='' w='' h='full'>
                <Box>
                    <Text fontStyle="italic" mb={4} fontWeight='light'>
                        "{testimony}"
                    </Text>
                </Box>
                <Flex align='' bg=''>
                    <HStack gap={4} mt={4}>
                        <Avatar.Root
                            // key={index}
                            colorPalette={randomColor}
                            variant='solid'
                            // outlineWidth='2px'
                            // outlineOffset="1.5px"
                            // outlineStyle="solid"
                            // outlineColor={randomColor}
                            // colorPalette={color}
                        >
                            <Avatar.Fallback
                                name={name}
                            />
                        </Avatar.Root>
                        <VStack align="start" gap={0}>
                            <Text fontWeight="bold">{name}</Text>
                            <Text fontSize="sm" color="gray.400">
                                {role}, {company}
                            </Text>
                        </VStack>
                    </HStack>
                </Flex>
            </Flex>
        </Box >
    );
};

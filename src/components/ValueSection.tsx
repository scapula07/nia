import { Box, Flex, Text, VStack, Image } from '@chakra-ui/react';

const ValueSection: React.FC = () => {
  return (
    <Box py={16} px={4}>
      {/* Title and Subtitle */}
      <VStack spacing={4} align="center" mb={12}>
        <Text fontSize="3xl" fontWeight="bold" color="black">
          What Nia Does For You
        </Text>
        <Text fontSize="lg" color="gray.600">
          Bringing Food Closer
        </Text>
      </VStack>

      {/* Three Value Boxes */}
      <Flex direction="row" justify="space-between" align="flex-start">
        {/* Fresh Produce Box */}
        <Box 
          bg="white" 
          border="1px solid" 
          borderColor="gray.300" 
          borderRadius="8px" 
          p={6} 
          width="30%"
          textAlign="left"
        >
          <Flex direction="column" align="start" justify="start" spacing={4}>
            <Image 
              src="/sparkle_icon.png" // Path to your icon
              alt="Fresh Produce"
              boxSize="50px"
              objectFit="contain"
              mb={4} // Adjusts the space between the icon and the text
            />
            <Text fontSize="xl" fontWeight="bold" color="black">
              Fresh Produce
            </Text>
            <Text color="gray.500" mt={4}>
              Explore a variety of fresh fruits and vegetables sourced from local farms.
            </Text>
          </Flex>
        </Box>

        {/* Healthy Staples Box */}
        <Box 
          bg="white" 
          border="1px solid" 
          borderColor="gray.300" 
          borderRadius="8px" 
          p={6} 
          width="30%"
          textAlign="left"
        >
          <Flex direction="column" align="start" justify="start" spacing={4}>
            <Image 
              src="/strong_icon.png" // Path to your icon
              alt="Healthy Staples"
              boxSize="50px"
              objectFit="contain"
              mb={4} // Adjusts the space between the icon and the text
            />
            <Text fontSize="xl" fontWeight="bold" color="black">
              Healthy Staples
            </Text>
            <Text color="gray.500" mt={4}>
              Find essential pantry items that are nutritious and affordable for everyone.
            </Text>
          </Flex>
        </Box>

        {/* Partnerships Box */}
        <Box 
          bg="white" 
          border="1px solid" 
          borderColor="gray.300" 
          borderRadius="8px" 
          p={6} 
          width="30%"
          textAlign="left"
        >
          <Flex direction="column" align="start" justify="start" spacing={4}>
            <Image 
              src="/handshake_icon.png" // Path to your icon
              alt="Partnerships"
              boxSize="50px"
              objectFit="contain"
              mb={4} // Adjusts the space between the icon and the text
            />
            <Text fontSize="xl" fontWeight="bold" color="black">
              Partnerships
            </Text>
            <Text color="gray.500" mt={4}>
              Collaborating with local organizations to ensure everyone has access to nutritious food options.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ValueSection;

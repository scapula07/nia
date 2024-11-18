import { Box, Container, Flex, Grid, Text, Heading, Image, Button } from "@chakra-ui/react";

const FeatureSection = () => {
  return (
    <Box bg="white" py={16} color="black">
      <Container maxW="container.xl">
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={8}>
          {/* Left Image Section */}
          <Box flex="1">
            <Image
              src="./feature_image.jpg"
              alt="Feature Image"
              objectFit="cover"
              borderRadius="8px"
              w="100%"
              h="auto"
            />
          </Box>

          {/* Right Feature Boxes Section */}
          <Box flex="1">
            <Heading fontSize="56px" fontWeight="700" lineHeight="67.2px" color="black">
                Here’s How Ordering on <Text as="span" color="#D41A1F" >Nia </Text> Works
            </Heading>
            <Text fontSize="25.4px" lineHeight="30.48px" fontWeight="400">
                Get started on how it works
            </Text>
            
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {/* Feature Box 1 */}
              <Box
                border="1px solid #E2E8F0"
                borderRadius="8px"
                p={6}
                bg="gray.100"
                
              >
                <Heading as="h3" size="md" mb={2}>Feature 1</Heading>
                <Text fontSize="lg" color="gray.600">Description of feature 1. Highlight key points and benefits of this feature.</Text>
              </Box>

              {/* Feature Box 2 */}
              <Box
                border="1px solid #E2E8F0"
                borderRadius="8px"
                p={6}
                bg="gray.100"
                
              >
                <Heading as="h3" size="md" mb={2}>Feature 2</Heading>
                <Text fontSize="lg" color="gray.600">Description of feature 2. Explain how it solves a problem or adds value.</Text>
              </Box>

              {/* Feature Box 3 */}
              <Box
                border="1px solid #E2E8F0"
                borderRadius="8px"
                p={6}
                bg="gray.100"
                
              >
                <Heading as="h3" size="md" mb={2}>Feature 3</Heading>
                <Text fontSize="lg" color="gray.600">Description of feature 3. Provide insight into how it benefits the user.</Text>
              </Box>

              {/* Feature Box 4 */}
              <Box
                border="1px solid #E2E8F0"
                borderRadius="8px"
                p={6}
                bg="gray.100"
                
              >
                <Heading as="h3" size="md" mb={2}>Feature 4</Heading>
                <Text fontSize="lg" color="gray.600">Description of feature 4. A clear explanation of what this feature offers.</Text>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FeatureSection;

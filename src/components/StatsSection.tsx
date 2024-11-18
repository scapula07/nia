import { Box, Container, Text, Flex, Stack } from "@chakra-ui/react";

const StatsSection = () => {
  return (
    <Box bg="white" py={16}>
      <Container maxW="container.xl">
        {/* Section Title and Subtitle */}
        <Stack spacing={4} textAlign="center" mb={12}>
          <Text fontSize="3xl" fontWeight="bold" color="black">
            Bridging the Gap to Nutritious Meals
          </Text>
          <Text fontSize="lg" color="gray.600">
            Healthy Food For All
          </Text>
        </Stack>

        {/* Stats Box (horizontal layout using Flex) */}
        <Box
            bg="white"
            p={6}
            borderRadius="12px"
            border="1px solid"
            borderColor="gray.300"
        >
          <Flex
            direction="row" // Align horizontally
            justify="space-between" // Space out the stats evenly
            align="center"
            gap={8}
          >
            {/* Stat 1 */}
            <Box
              p={6}
              borderRadius="12px"
              width={{ base: "100%", md: "22%" }}
            >
              <Text fontSize="3xl" fontWeight="bold" color="black">
                15K+
              </Text>
              <Text fontSize="md" color="gray.600">
                Over 50 million people in the U.S. lack access to fresh produce.
              </Text>
            </Box>

            {/* Stat 2 */}
            <Box
              p={6}
              borderRadius="12px"
              width={{ base: "100%", md: "22%" }}
            >
              <Text fontSize="3xl" fontWeight="bold" color="black">
                20K+
              </Text>
              <Text fontSize="md" color="gray.600">
                Our mission is to provide quality food options to 10,000 underserved families.
              </Text>
            </Box>

            {/* Stat 3 */}
            <Box
              p={6}
              borderRadius="12px"
              width={{ base: "100%", md: "22%" }}
            >
              <Text fontSize="3xl" fontWeight="bold" color="black">
                99%
              </Text>
              <Text fontSize="md" color="gray.600">
                95% of our customers report improved health and happiness.
              </Text>
            </Box>

            {/* Stat 4 */}
            <Box
              p={6}
              borderRadius="12px"
              width={{ base: "100%", md: "22%" }}
            >
              <Text fontSize="3xl" fontWeight="bold" color="black">
                100M
              </Text>
              <Text fontSize="md" color="gray.600">
                We aim to distribute 1 million meals annually to food deserts.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;

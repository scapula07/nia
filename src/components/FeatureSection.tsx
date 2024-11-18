import { Box, Container, Flex, Grid, Text, Heading, Image } from "@chakra-ui/react";

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
              Here’s How Ordering on <Text as="span" color="#D41A1F">Nia</Text> Works
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
                <Flex align="center" gap={4}>
                  <Box w="50px" h="50px" display="flex" justifyContent="center" alignItems="center">
                    <Image
                      src="./store_icon.png" // Path to your icon
                    />
                  </Box>
                  <Box>
                    <Heading as="h3" size="md" mb={2}>Shop</Heading>
                    <Text fontSize="14px" color="#5B5B5B">
                      Choose from a wide selection of tasty and nutritious food and buy together with friends and family.
                    </Text>
                  </Box>
                </Flex>
              </Box>

              {/* Feature Box 2 */}
              <Box
                border="1px solid #E2E8F0"
                borderRadius="8px"
                p={6}
                bg="gray.100"
              >
                <Flex align="center" gap={4}>
                  <Box w="50px" h="50px" display="flex" justifyContent="center" alignItems="center">
                    <Image
                      src="./icons/feature2_icon.png" // Path to your icon
                      alt="Feature 2 Icon"
                      width="24px"
                      height="24px"
                    />
                  </Box>
                  <Box>
                    <Heading as="h3" size="md" mb={2}>Schedule</Heading>
                    <Text fontSize="lg" color="gray.600">
                      Schedule a convenient time for you to pick up your groceries, where you live, work, or play.
                    </Text>
                  </Box>
                </Flex>
              </Box>

              {/* Feature Box 3 */}
              <Box
                border="1px solid #E2E8F0"
                borderRadius="8px"
                p={6}
                bg="gray.100"
              >
                <Flex align="center" gap={4}>
                  <Box w="50px" h="50px" display="flex" justifyContent="center" alignItems="center">
                    <Image
                      src="./icons/feature3_icon.png" // Path to your icon
                      alt="Feature 3 Icon"
                      width="24px"
                      height="24px"
                    />
                  </Box>
                  <Box>
                    <Heading as="h3" size="md" mb={2}>Pay</Heading>
                    <Text fontSize="lg" color="gray.600">
                      Pay with SNAP/EBT, Stripe, Credit, and Debit Cards.
                    </Text>
                  </Box>
                </Flex>
              </Box>

              {/* Feature Box 4 */}
              <Box
                border="1px solid #E2E8F0"
                borderRadius="8px"
                p={6}
                bg="gray.100"
              >
                <Flex align="center" gap={4}>
                  <Box w="50px" h="50px" display="flex" justifyContent="center" alignItems="center">
                    <Image
                      src="./icons/feature4_icon.png" // Path to your icon
                      alt="Feature 4 Icon"
                      width="24px"
                      height="24px"
                    />
                  </Box>
                  <Box>
                    <Heading as="h3" size="md" mb={2}>Pick-up</Heading>
                    <Text fontSize="lg" color="gray.600">
                      At your scheduled pick-up time, your groceries will be bagged and ready for you to receive.
                    </Text>
                  </Box>
                </Flex>
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FeatureSection;

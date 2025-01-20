"use client";

import { Box, Flex, Heading, Stack, Text, Input, Button } from "@chakra-ui/react";
import DashboardLayout from "@/components/Layout/DashboardLayout";

const Offers = () => {
  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Title */}
        <Flex align="center" mb={6}>
          <Heading size="lg" color="black">
            Offers
          </Heading>
        </Flex>

        {/* Centered Card */}
        <Flex justify="center" align="center" height="full">
          <Box
            maxW="md"
            borderWidth={1}
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p={6}
            bg="white"
            width="100%"
          >
            {/* Creating a New Offer Section */}
            <Stack spacing={5}>
              <Text fontSize="xl" fontWeight="bold">Create New Offer</Text>

              {/* Deals of the Day Section */}
              <Stack spacing={2}>
                <Text fontSize="sm" color="gray.600">Deals of the Day</Text>
                <Input placeholder="Enter deal details" />
              </Stack>

              {/* Price Section */}
              <Stack spacing={2}>
                <Text fontSize="sm" color="gray.600">Price</Text>
                <Input type="number" placeholder="Enter price" />
              </Stack>

              {/* Quantity Section */}
              <Stack spacing={2}>
                <Text fontSize="sm" color="gray.600">Quantity</Text>
                <Input type="number" placeholder="Enter quantity" />
              </Stack>

              {/* Submit Button */}
              <Button colorScheme="teal" width="full">Create Offer</Button>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </DashboardLayout>
  );
};

export default Offers;

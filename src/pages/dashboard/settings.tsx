"use client";

import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import DashboardLayout from "@/components/Layout/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <Box p={6}>
        {/* Title */}
        <Flex align="center" mb={6}>
          <Heading size="lg" color="black">
            Settings
          </Heading>
        </Flex>

        {/* Centered Profile Card */}
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
            {/* Profile Image */}
            <Flex mb={4}>
              <Avatar name="Admin" src="https://via.placeholder.com/150" size="lg" />
              <Stack ml={4} spacing={1}>
                {/* Personal Information */}
                <Text fontSize="xl" fontWeight="bold">
                  Admin Name
                </Text>
                <Text fontSize="sm" color="gray.500">
                  admin@example.com
                </Text>
              </Stack>
            </Flex>

            {/* Additional Info Section */}
            <Stack spacing={3}>
              <Text fontWeight="bold">Personal Information</Text>
              <Flex justify="space-between">
                <Text>Admin Name</Text>
                <Text color="gray.600">John Doe</Text>
              </Flex>
              <Flex justify="space-between">
                <Text>Email</Text>
                <Text color="gray.600">admin@example.com</Text>
              </Flex>
              {/* You can add more personal information fields as necessary */}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </DashboardLayout>
  );
};

export default Settings;

"use client";

import { Box, Flex, Heading, HStack, Stack, Text, Input, Separator } from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
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
                        p={6}
                        bg="white"
                        width = "703px"
                    >
                        {/* Profile Image */}
                        <Flex mb={4}>
                            <Avatar name="Admin" src="https://via.placeholder.com/150" size="lg" />

                            <Stack ml={4} spacing={1}>
                                {/* Personal Information */}
                            </Stack>
                        </Flex>

                        {/* Additional Info Section */}
                        <Stack spacing={3}>
                            <Text fontWeight="bold">Personal Information</Text>
                            <HStack gap="10" width="full">
                                <Field label="Admin Name">
                                    <Input placeholder="First Name, Last Name"  bg="#EEEFF1"/>
                                </Field>
                                <Field label="Admin Email">
                                    <Input placeholder="me@example.com" bg="#EEEFF1" />
                                </Field>
                            </HStack>

                            {/* You can add more personal information fields as necessary */}
                        </Stack>

                        <Separator size="lg" color="black" borderWidth="1px" p="6px" />
 
                        {/* Additional Info Section */}
                        <Stack spacing={3}>
                            <Text fontWeight="bold">Password and Security</Text>
                                <Field label="Current Password">
                                    <Input placeholder="me@example.com" variant="outline" />
                                </Field>
                                <Field label="New Password">
                                    <Input placeholder="me@example.com" variant="outline" />
                                </Field>
                                <Field label="Confirm New Password">
                                    <Input placeholder="me@example.com" variant="outline" />
                                </Field>

                            {/* You can add more personal information fields as necessary */}
                        </Stack>

                    </Box>
                </Flex>
            </Box>
        </DashboardLayout>
    );
};

export default Settings;

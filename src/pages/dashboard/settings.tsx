"use client";

import { Box, Flex, Heading, HStack, Text, Input } from "@chakra-ui/react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import {
    Button,
    Image,
} from "@chakra-ui/react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc, DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

const Settings = () => {
    const handleProfilePictureChange = () => {
        // Handle profile picture change
    };

    const [user, setUser] = useState<DocumentData | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const auth = getAuth();
          const currentUser = auth.currentUser;
          console.log(currentUser)
          const email = currentUser?.email
  
          if (currentUser) {
            setUser(currentUser)
            
  

          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchUserData();
    }, []);
    
    return (
        <DashboardLayout>
            <Box
                bg="gray.50"
                p={6}
                borderRadius="xl"
                w={{ base: "100%", md: "703px" }}
                mx="auto"
            >
                {/* Profile Section */}
                <Flex direction={{ base: "column", md: "row" }} gap={5} mb={6}>
                    <Flex direction="column" w={{ base: "100%", md: "50%" }} align="start">
                        <Image
                            src="/blank_upload.png"
                            alt="Profile picture"
                            boxSize="100px"
                            borderRadius="full"
                            objectFit="cover"
                        />
                        <Button
                            mt={2}
                            size="sm"
                            colorScheme="red"
                            variant="link"
                            onClick={handleProfilePictureChange}
                        >
                            Change display picture
                        </Button>
                        <Heading as="h2" size="md" mt={6}>
                            Personal Information
                        </Heading>
                        <HStack>
                            <Box bg="gray.100" p={3} width="324px" borderRadius="md" mt={3}>
                                <Text fontSize="sm" color="gray.600">
                                    Admin Name
                                </Text>
                                <Text mt={1} fontWeight="bold" color="black">
                                   {user?.name} 
                                </Text>
                            </Box>
                            <Box bg="gray.100" p={3} width="324px" borderRadius="md" mt={3}>
                                <Text fontSize="sm" color="gray.600">
                                    Admin Email
                                </Text>
                                <Text mt={1} fontWeight="bold" color="black">
                                    {user?.email}
                                </Text>
                            </Box>
                        </HStack>

                    </Flex>
                </Flex>


                {/* Password and Security */}
                <Heading as="h3" size="md" mb={4}>
                    Password and Security
                </Heading>
                <Text fontSize="sm" color="gray.600" mb={4}>
                    Change Password
                </Text>

                <Box mb={4}>
                    <Text fontSize="sm" color="gray.600" mb={2}>
                        Current Password
                    </Text>
                    <Input
                        type="password"
                        placeholder="Enter current password"
                        bg="gray.100"
                        border="none"
                        borderRadius="md"
                        h="46px"
                        pl={4}
                    />
                </Box>

                <Box mb={4}>
                    <Text fontSize="sm" color="gray.600" mb={2}>
                        New Password
                    </Text>
                    <Input
                        type="password"
                        placeholder="Enter new password"
                        bg="gray.100"
                        border="none"
                        borderRadius="md"
                        h="46px"
                        pl={4}
                    />
                </Box>

                <Box mb={4}>
                    <Text fontSize="sm" color="gray.600" mb={2}>
                        Confirm New Password
                    </Text>
                    <Input
                        type="password"
                        placeholder="Confirm new password"
                        bg="gray.100"
                        border="none"
                        borderRadius="md"
                        h="46px"
                        pl={4}
                    />
                </Box>

                <Button colorScheme="red" w="100%" mt={4}>
                    Save Changes
                </Button>
            </Box>
        </DashboardLayout>
    );
};

export default Settings;

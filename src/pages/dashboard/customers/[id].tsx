"use client";

import { useRouter } from "next/router";
import { Box, Heading, Text, Stack, Button, Input, Link, Flex, Badge, Avatar, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";


const CustomerDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [customer, setCustomer] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!id) return;

        const fetchCustomer = async () => {
            try {
                setLoading(true);
                const customerDoc = await getDoc(doc(db, "customers", id as string));

                if (customerDoc.exists()) {
                    setCustomer(customerDoc.data());
                } else {
                    setCustomer(null); // Customer not found
                }
            } catch (error) {
                console.error("Error fetching customer:", error);
                setCustomer(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCustomer();
    }, [id]);

    const handleDelete = () => {
        // Function to handle deleting the customer (Add your Firebase delete logic here)
        console.log("Delete customer:", customer?.id);
    };

    if (loading) {
        return (
            <DashboardLayout>
                <Box textAlign="center" mt={10}>
                    <Spinner size="xl" />
                    <Text mt={4}>Loading Customer Details...</Text>
                </Box>
            </DashboardLayout>
        );
    }

    if (!customer) {
        return (
            <DashboardLayout>
                <Heading>Customer Not Found</Heading>
                <Button mt={4} onClick={() => router.push("/dashboard/customers")}>
                    Back to Customers
                </Button>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <Link
                href="/dashboard/customers"
                variant="underline"
            >
                Back
            </Link>
            <Box textAlign="right">
                <Button bg="#D41A1F" color="white" mr={4} width="105px" height="46px">
                    Save
                </Button>
            </Box>
            <Heading mb={4} fontSize="32px" fontWeight="700">Customer Information</Heading>
            <Box
                className="overflow-hidden"
                px={5}
                py={6}
                mx="auto"
                my={0}
                rounded="lg"
                bg="gray.50"
                maxW="1127px"
                sm={{ p: 4 }}
            >
                <Flex gap={5} direction={{ base: "column", md: "row" }}>
                    <Box flex="1" maxW={{ base: "100%", md: "50%" }}>
                        <Box>
                            <Flex gap={5} direction={{ base: "column", md: "row" }}>
                                <Box flex="1">
                                    {/* User Details Section */}
                                    <Box p={5} >
                                        <Heading size="md" mb={2} fontWeight="700">
                                            {customer.name}
                                        </Heading>
                                        <Text color="gray.500" mb={2} fontWeight="600">
                                            Location: San Antonio, Texas
                                        </Text>
                                        <Text color="gray.500" mb={2} fontWeight="600">
                                            Orders: 14
                                        </Text>
                                        <Text color="gray.500" fontWeight="600">Joined: July 2024</Text>
                                    </Box>
                                </Box>
                                <Box ml={5} flex="1">
                                    {/* Address Section */}
                                    <Box p={5} >
                                        <Heading size="sm" mb={2} fontWeight="700">
                                            Address
                                        </Heading>
                                        <Text color="gray.600">{customer.address}</Text>
                                    </Box>
                                </Box>
                            </Flex>

                            <Box mt={8} maxW="495px">
                                <Flex gap={5} direction={{ base: "column", md: "row" }}>
                                    <Box w={{ base: "full", md: "73%" }}>
                                        {/* Notes Section */}
                                        <Box p={5}>
                                            <Heading size="sm" mb={2} fontWeight="700">
                                                Notes
                                            </Heading>
                                            <Input pl="2" placeholder="" size="md" min-height="90px" borderWidth={1} borderRadius="md" bg="white" />
                                        </Box>
                                    </Box>
                                    <Box ml={5} w={{ base: "full", md: "27%" }}>
                                        {/* Last Order Section */}
                                        <Box p={5} >
                                            <Heading size="sm" mb={2} fontWeight="700">
                                                Last Order
                                            </Heading>
                                            <Text color="gray.600">September 29, 2024</Text>
                                        </Box>
                                    </Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>

                    <Box ml={5} flex="1" maxW={{ base: "100%", md: "50%" }}>
                        <Flex direction="column" w="full" mt={{ base: 10, md: 0 }} align="flex-start">
                            <Flex gap={5} justify="space-between" w="full" direction={{ base: "column", sm: "row" }}>
                                {/* Contact Info Section */}
                                <Box p={5} w="full">
                                    <Heading size="sm" mb={2} fontWeight="700">
                                        Email
                                    </Heading>
                                    <Text color="gray.600">{customer.email}</Text>
                                </Box>
                                <Box p={5} w="full">
                                    <Heading size="sm" mb={2} fontWeight="700">
                                        Phone
                                    </Heading>
                                    <Text color="gray.600">+1(123) 232 3634</Text>
                                </Box>
                            </Flex>
                            {/* User Status Section */}
                            <Box p={5}mt={5}>
                                <Heading size="sm" mb={2} fontWeight="700">
                                    Status
                                </Heading>
                                <Badge colorScheme="green" variant="solid">
                                    Active
                                </Badge>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </DashboardLayout>
    );
};

export default CustomerDetails;

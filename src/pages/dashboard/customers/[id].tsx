"use client";

import { useRouter } from "next/router";
import { Box, Heading, Text, Stack, Button, Input, Link, Flex, IconButton, Avatar, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { FiTrash } from "react-icons/fi";

const CustomerDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [customer, setCustomer] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [notes, setNotes] = useState<string>("");

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
            <Box width="100%" p={4} border="1px" bg="#F6F8FF" borderColor="gray.200" borderRadius="lg">
                {/* Profile Information Section */}
                <Flex mb={6} align="center" justify="space-between">
                    <Flex align="center">

                        <Stack spacing={1}>
                            <Text fontSize="lg" fontWeight="bold">{customer.name}</Text>
                            <Text color="gray.500">Order #: {customer.orders}</Text>
                        </Stack>
                    </Flex>

                    <Stack spacing={1} align="flex-end">
                        <Text><strong>Address:</strong> {customer.address}</Text>
                        <Text><strong>Email:</strong> {customer.email}</Text>
                        <Text><strong>Phone:</strong> {customer.phone}</Text>
                    </Stack>
                </Flex>

                {/* Notes Section */}
                <Box mb={6}>
                    <Heading size="sm" mb={2}>Notes</Heading>
                    <Input
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Add notes here..."
                        size="md"
                        mb={4}
                    />
                </Box>

                {/* Last Order Section */}
                <Box mb={6}>
                    <Heading size="sm" mb={2}>Last Order</Heading>
                    <Text>{customer.lastOrder || "No recent orders."}</Text>
                </Box>

                {/* Status Section */}
                <Box mb={6}>
                    <Heading size="sm" mb={2}>Status</Heading>
                    <Text>{customer.status || "No status available."}</Text>
                </Box>

                {/* Delete Customer Link */}
                <Flex justify="flex-end">
                    <Link
                        href="#"
                        onClick={handleDelete}
                        color="red.500"
                        fontWeight="bold"
                        display="flex"
                        alignItems="center"
                    >
                        <IconButton
                            icon={<FiTrash />}
                            variant="link"
                            color="red.500"
                            aria-label="Delete Customer"
                            mr={2}
                        />
                        Delete Customer
                    </Link>
                </Flex>
            </Box>
        </DashboardLayout>
    );
};

export default CustomerDetails;

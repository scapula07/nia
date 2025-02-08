"use client";

import { useRouter } from "next/router";
import { Box, Heading, Text, Stack, Button, Input, Link, Flex, Badge, Avatar, Spinner, Field, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";


const OrderDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    const [order, setOrder] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchOrder = async () => {
            try {
                const orderDoc = await getDoc(doc(db, "orders", id as string));

                if (orderDoc.exists()) {
                    setOrder(orderDoc.data());
                } else {
                    setOrder(null);
                }
            } catch (error) {
                console.error("Error fetching order:", error);
                setOrder(null);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [id]);

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleString();
    };

    if (loading) {
        return (
            <DashboardLayout>
                <Flex justify="center" align="center" height="80vh">
                    <Spinner size="xl" />
                </Flex>
            </DashboardLayout>
        );
    }


    return (
        <DashboardLayout>
            <Link
                href="/dashboard/orders"
                variant="underline"
            >
                Back
            </Link>
            <Box textAlign="right">
                <Button bg="#D41A1F" color="white" mr={4} width="105px" height="46px">
                    Save
                </Button>
            </Box>
            <Heading mb={4} fontSize="32px" fontWeight="700">Order Details</Heading>
            <Text mb={4} fontSize="24px" fontWeight="700">Order ID: {order.orderID}</Text>
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
                                <Box ml={5} mr="262px" flex="1">
                                    <Box >
                                        <Heading fontSize="18px" pt="24px" fontWeight="700" lineHeight="21.6px">
                                            Members
                                        </Heading>
                                        <Text color="gray.600">{order.Customer}</Text>
                                    </Box>

                                </Box>
                                <Box ml={5} flex="1" mr="262px">
                                    <Box>
                                        <Heading fontSize="18px" pt="24px" fontWeight="700" lineHeight="21.6px">
                                            Order Info
                                        </Heading>
                                        <Text color="gray.600">Shipping:</Text>
                                        <Text color="gray.600">Payment method</Text>
                                        <Text color="gray.600">Status: </Text>
                                    </Box>

                                </Box>
                                <Box ml={5} flex="1">
                                    <Box >
                                        <Heading fontSize="18px" pt="24px" fontWeight="700" lineHeight="21.6px">
                                            Deliver to
                                        </Heading>
                                        <Text color="gray.600">{order.Customer}</Text>
                                    </Box>

                                </Box>
                            </Flex>

                            <Box mt={8} maxW="495px">
                                <Flex gap={5} direction={{ base: "column", md: "row" }}>
                                    <Box w={{ base: "full", md: "73%" }}>
                                        {/* Notes Section */}
                                        <Box p={5}>
                                            <Heading size="sm" pb="16px" fontWeight="700">
                                                Notes
                                            </Heading>

                                            <Textarea
                                                id="productDescription"
                                                placeholder="Product Description"
                                                mb={4}
                                                bg="gray.100"
                                                pt="10px"
                                                pl="16px"
                                                height="91px"
                                                borderRadius="12px"
                                            />

                                        </Box>
                                    </Box>

                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </DashboardLayout>
    );
};

export default OrderDetails;

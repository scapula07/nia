"use client";

import { useEffect, useState } from "react";
import { Heading, Input, Flex, Spacer, Table, Badge, Progress } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";


import {
    PaginationItems,
    PaginationNextTrigger,
    PaginationPrevTrigger,
    PaginationRoot,
} from "@/components/ui/pagination";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config"; // Import Firebase

type Product = {
    id: string;
    img: string;
    price: string;
    qty: number;
    title: string;
};

type Order = {
    id: string;
    product: Product;
    customer: string;
    quantity: number;
    status: string;
    total: number;
    time: number;
};

const Orders = () => {
    const [orders, setOrders] = useState<Order[]>([]);


    useEffect(() => {
        // Fetch orders data from Firestore
        const fetchOrders = async () => {
            const ordersCollection = collection(db, "orders"); // "orders" is your Firestore collection name
            const ordersSnapshot = await getDocs(ordersCollection);
            const ordersList: Order[] = ordersSnapshot.docs.map((doc) => ({
                id: doc.id, // Use Firestore's document ID as the unique ID
                ...(doc.data() as Omit<Order, "id">), // Spread the rest of the document data
            }));
            setOrders(ordersList);
        };

        fetchOrders();
    }, []);

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleString(); // Converts to a human-readable date string
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "active":
                return <Badge colorPalette="green" width="122px" height="25px" justifyContent="center" textAlign="center" bg="#CC7914" color="#FAFAFA" borderRadius="lg">Order Confirmed</Badge>;
            case "shipped":
                return <Badge colorScheme="green">Shipped</Badge>;
            case "delivered":
                return <Badge colorScheme="blue">Delivered</Badge>;
            case "canceled":
                return <Badge colorScheme="red">Canceled</Badge>;
            default:
                return <Badge colorScheme="gray">Unknown</Badge>;
        }
    };

    return (
        <DashboardLayout>
            <Flex mb={4} align="center">
                <Heading fontSize="40px" fontWeight="700" color="black">
                    Orders
                </Heading>
                <Spacer />

                <InputGroup width="282" height="46px" startElement={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 17.5L13.1692 13.1691M13.1692 13.1691C14.3413 11.997 14.9998 10.4072 14.9998 8.74956C14.9998 7.0919 14.3413 5.50213 13.1692 4.32998C11.997 3.15783 10.4073 2.49933 8.74959 2.49933C7.09193 2.49933 5.50216 3.15783 4.33001 4.32998C3.15786 5.50213 2.49936 7.0919 2.49936 8.74956C2.49936 10.4072 3.15786 11.997 4.33001 13.1691C5.50216 14.3413 7.09193 14.9998 8.74959 14.9998C10.4073 14.9998 11.997 14.3413 13.1692 13.1691Z" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" stroke-linejoin="round" />
                </svg>}>

                    <Input
                        placeholder="Search"
                        width="100%"
                        mr={4}
                        bg="white"
                        border="1px"
                        borderColor="gray.300"
                        borderRadius="md"
                        p={2}
                        pl={10}  // Adjust padding for space for the icon
                    />
                </InputGroup>
            </Flex>

            <Table.Root key="line" variant="line" size="md" borderRadius="lg" overflow="hidden">
                <Table.Header>
                    <Table.Row bg="white">
                        <Table.Cell fontSize="18px" fontWeight="700">
                            Product
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700">
                            Customers
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Status
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Target Limit
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Progress
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Date & Time
                        </Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {orders.map((order) => (
                        <Table.Row key={order.id} bg="white" borderWidth="1px">
                            <Table.Cell>

                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <img
                                        src={order.product.img}
                                        alt={order.product.title}
                                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
                                    />
                                    <span>{order.product.title}</span>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                {order.customer.email}
                            </Table.Cell>
                            <Table.Cell textAlign="center">{getStatusBadge(order.status)}</Table.Cell>
                            <Table.Cell textAlign="center">${order.total}</Table.Cell>
                            <Table.Cell textAlign="center">
                                <Progress.Root maxW="150px" colorPalette="green">
                                    <Progress.Track>
                                        <Progress.Range />
                                    </Progress.Track>
                                </Progress.Root>
                            </Table.Cell>
                            <Table.Cell textAlign="center">{formatDate(order.time)}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            <PaginationRoot count={orders.length * 5} pageSize={5} page={1}>
                <Flex justify="space-between" align="center">
                    <PaginationPrevTrigger />
                    <PaginationItems />
                    <PaginationNextTrigger />
                </Flex>
            </PaginationRoot>
        </DashboardLayout>
    );
};

export default Orders;

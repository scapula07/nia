"use client";

import { useEffect, useState } from "react";
import { Heading, Input, Flex, Spacer, Table, HStack } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";

import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
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

  return (
    <DashboardLayout>
      <Flex mb={4} align="center">
        <Heading fontSize="40px" fontWeight="700" color="black">
          Orders
        </Heading>
        <Spacer />

        <InputGroup width="282" height="46px" startElement={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M17.5 17.5L13.1692 13.1691M13.1692 13.1691C14.3413 11.997 14.9998 10.4072 14.9998 8.74956C14.9998 7.0919 14.3413 5.50213 13.1692 4.32998C11.997 3.15783 10.4073 2.49933 8.74959 2.49933C7.09193 2.49933 5.50216 3.15783 4.33001 4.32998C3.15786 5.50213 2.49936 7.0919 2.49936 8.74956C2.49936 10.4072 3.15786 11.997 4.33001 13.1691C5.50216 14.3413 7.09193 14.9998 8.74959 14.9998C10.4073 14.9998 11.997 14.3413 13.1692 13.1691Z" stroke="#5B5B5B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
            <Table.Cell fontSize="18px" color="#888888">
              Product
            </Table.Cell>
            <Table.Cell fontSize="18px" color="#888888">
              Customer Name
            </Table.Cell>
            <Table.Cell fontSize="18px" color="#888888">
              Quantity
            </Table.Cell>
            <Table.Cell fontSize="18px" color="#888888">
              Status
            </Table.Cell>
            <Table.Cell fontSize="18px" color="#888888">
              Amount
            </Table.Cell>
            <Table.Cell fontSize="18px" color="#888888">
              Date & Time
            </Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order.id} bg="white" borderWidth="1px">
              <Table.Cell>{order.product.title}</Table.Cell>
              <Table.Cell>{order.customer}</Table.Cell>
              <Table.Cell>{order.product.qty}</Table.Cell>
              <Table.Cell>{order.status}</Table.Cell>
              <Table.Cell>${order.total}</Table.Cell>
              <Table.Cell>{formatDate(order.time)}</Table.Cell>
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

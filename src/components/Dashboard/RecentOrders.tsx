import React from "react";
import { Box, Flex, Heading, HStack, Spacer, Table } from "@chakra-ui/react";

// Define the type for an order
type Order = {
  id: number;
  product: string;
  customer: string;
  quantity: number;
  status: string;
  total: string;
  dateTime: string;
};

// Define props for the RecentOrders component
type RecentOrdersProps = {
  orders: Order[];
  pageSize?: number;
};

const orders = [
    {
        id: 1,
        product: "Laptop",
        customer: "John Doe",
        quantity: 1,
        status: "Completed",
        total: "$1000",
        dateTime: "2025-01-20 10:00 AM",
    },
    {
        id: 2,
        product: "Headphones",
        customer: "Jane Smith",
        quantity: 2,
        status: "Pending",
        total: "$150",
        dateTime: "2025-01-21 12:30 PM",
    },
    {
        id: 3,
        product: "Smartphone",
        customer: "Alice Johnson",
        quantity: 1,
        status: "Shipped",
        total: "$500",
        dateTime: "2025-01-22 03:00 PM",
    },
    {
        id: 1,
        product: "Laptop",
        customer: "John Doe",
        quantity: 1,
        status: "Completed",
        total: "$1000",
        dateTime: "2025-01-20 10:00 AM",
    },
]

const RecentOrders: React.FC<RecentOrdersProps> = ({ orders, pageSize = 5 }) => {
  return (
      <Table.Root size="md" borderRadius="lg" overflow="hidden">
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
              <Table.Cell>{order.product}</Table.Cell>
              <Table.Cell>{order.customer}</Table.Cell>
              <Table.Cell>{order.quantity}</Table.Cell>
              <Table.Cell>{order.status}</Table.Cell>
              <Table.Cell>{order.total}</Table.Cell>
              <Table.Cell>{order.dateTime}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
  );
};

export default RecentOrders;

import React from "react";
import { Box, HStack, Heading, Stack, Table } from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";

// Define the type for an order
type Order = {
  id: number;
  customer: string;
  status: string;
  total: string;
};

// Define props for the RecentOrders component
type RecentOrdersProps = {
  orders: Order[];
  pageSize?: number;
};

const RecentOrders: React.FC<RecentOrdersProps> = ({ orders, pageSize = 5 }) => {
  return (
    <Box bg="white">
    <Stack width="full" gap="5">
      <Heading size="xl" color="black">Recent Orders</Heading>
      <Table.Root size="sm" variant="" bg="white" borderRadius="lg" borderColor="white">  
        <Table.Header bg="white">
          <Table.Row>
            <Table.ColumnHeader color="black">Product</Table.ColumnHeader>
            <Table.ColumnHeader color="black">Customer Name</Table.ColumnHeader>
            <Table.ColumnHeader color="black">Quantity</Table.ColumnHeader>
            <Table.ColumnHeader color="black">Status</Table.ColumnHeader>
            <Table.ColumnHeader color="black">Amount</Table.ColumnHeader>
            <Table.ColumnHeader color="black">Date & Time</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {orders.map((order) => (
            <Table.Row key={order.id}>
              <Table.Cell>{order.id}</Table.Cell>
              <Table.Cell>{order.customer}</Table.Cell>
              <Table.Cell>{order.status}</Table.Cell>
              <Table.Cell textAlign="end">{order.total}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <PaginationRoot count={orders.length} pageSize={pageSize} page={1}>
        <HStack wrap="wrap">
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Stack>
    </Box>
  );
};

export default RecentOrders;

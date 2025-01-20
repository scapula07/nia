"use client";

import { Box, Heading, Input, Flex, Spacer, Stack, Table } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import DashboardLayout from "@/components/Layout/DashboardLayout";

// Sample order data
const customers = [
  { id: 101, customer: "Alice Johnson", status: "Completed", total: "$150.00" },
  { id: 102, customer: "Bob Smith", status: "Pending", total: "$300.00" },
  { id: 103, customer: "Charlie Brown", status: "Shipped", total: "$200.00" },
  { id: 104, customer: "Diana Prince", status: "Completed", total: "$400.00" },
  { id: 105, customer: "Eve Adams", status: "Cancelled", total: "$0.00" },
];

// Filter options for status
const statusOptions = [
  { label: "All", value: "all" },
  { label: "Completed", value: "Completed" },
  { label: "Pending", value: "Pending" },
  { label: "Shipped", value: "Shipped" },
  { label: "Cancelled", value: "Cancelled" },
];

const Customers = () => {
  return (
    <DashboardLayout>
      <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
        <Flex mb={4} align="center">
          <Heading size="lg" color="black">
            Customers
          </Heading>
          <Spacer />
          <Input
            placeholder="Search by customer name"
            width="250px"
            mr={4}
          />
          <Stack gap="5" width="200px">
            <SelectRoot size="md">
              <SelectLabel>Filter by status</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem
                    key={status.value}
                    item={{ value: status.value, label: status.label }}
                  >
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Stack>
        </Flex>
        <Table.Root variant="" size="md">
          <Table.Header>
            <Table.Row>
              <Table.Cell>Order ID</Table.Cell>
              <Table.Cell>Customer Name</Table.Cell>
              <Table.Cell>Status</Table.Cell>
              <Table.Cell>Total</Table.Cell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {customers.map((customer) => (
              <Table.Row key={customer.id}>
                <Table.Cell>{customer.id}</Table.Cell>
                <Table.Cell>{customer.customer}</Table.Cell>
                <Table.Cell>{customer.status}</Table.Cell>
                <Table.Cell>{customer.total}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    </DashboardLayout>
  );
};

export default Customers;

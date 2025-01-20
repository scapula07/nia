"use client";

import { Box, Heading, Input, Flex, Spacer, Stack, Table } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group"
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
  ];
  

// Filter options for status
const statusOptions = [
    { label: "All", value: "all" },
    { label: "Completed", value: "Completed" },
    { label: "Pending", value: "Pending" },
    { label: "Shipped", value: "Shipped" },
    { label: "Cancelled", value: "Cancelled" },
];

const Orders = () => {
    return (
        <DashboardLayout>
            <Flex mb={4} align="center">
                <Heading fontSize="40px" fontWeight="700" color="black">
                    Orders
                </Heading>
                <Spacer />

                <SelectRoot width="91px" height="41px" mr="10px" bg="white" borderRadius="md" textAlign="center"> 
                    <SelectTrigger>
                        <SelectValueText fontSize="14px" fontWeight="600" color="#9F9F9F" placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent bg="white">
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

        </DashboardLayout>
    );
};

export default Orders;

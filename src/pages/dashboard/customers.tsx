"use client";

import { Box, Heading, Input, Flex, Spacer, Stack, Table } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { InputGroup } from "@/components/ui/input-group";

// Sample customer data with Name, Address, Orders, Amount Spent
const customers = [
    { id: 101, name: "Alice Johnson", address: "123 Oak Street", orders: 5, amountSpent: "$150.00" },
    { id: 102, name: "Bob Smith", address: "456 Elm Avenue", orders: 8, amountSpent: "$300.00" },
    { id: 103, name: "Charlie Brown", address: "789 Pine Road", orders: 3, amountSpent: "$200.00" },
    { id: 104, name: "Diana Prince", address: "101 Maple Boulevard", orders: 10, amountSpent: "$400.00" },
    { id: 105, name: "Eve Adams", address: "202 Birch Street", orders: 1, amountSpent: "$0.00" },
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
            <Flex mb={4} align="center">
                <Heading fontSize="40px" fontWeight="700" color="black">
                    Customers
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
                            <Checkbox borderWidth="1px" />
                        </Table.Cell>
                        <Table.Cell fontSize="18px" color="#888888">
                            Name
                        </Table.Cell>

                        <Table.Cell fontSize="18px" color="#888888">
                            Address
                        </Table.Cell>
                        <Table.Cell fontSize="18px" color="#888888">
                            Orders
                        </Table.Cell>
                        <Table.Cell fontSize="18px" color="#888888">
                            Amount Spent
                        </Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {customers.map((customer) => (
                        <Table.Row key={customer.id} bg="white" borderWidth="1px">
                            <Table.Cell>
                                <Checkbox borderWidth="1px" />
                            </Table.Cell>
                            <Table.Cell>{customer.name}</Table.Cell>
                            <Table.Cell>{customer.address}</Table.Cell>
                            <Table.Cell>{customer.orders}</Table.Cell>
                            <Table.Cell>{customer.amountSpent}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

        </DashboardLayout>
    );
};

export default Customers;

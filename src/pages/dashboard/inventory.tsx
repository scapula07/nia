"use client";

import { Box, Heading, Input, Flex, Spacer, Table, Button } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { useState } from "react";
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select";

// Sample inventory data (expanded for demonstration)
const inventory = [
    { id: 101, product: "Product A", customer: "Alice Johnson", quantity: 5, price: "$10", stock: 100 },
    { id: 102, product: "Product B", customer: "Bob Smith", quantity: 8, price: "$15", stock: 200 },
    { id: 103, product: "Product C", customer: "Charlie Brown", quantity: 3, price: "$20", stock: 300 },
    { id: 104, product: "Product D", customer: "Diana Prince", quantity: 10, price: "$25", stock: 400 },
    { id: 105, product: "Product E", customer: "Eve Adams", quantity: 1, price: "$30", stock: 500 },
    { id: 106, product: "Product F", customer: "Frank Miller", quantity: 7, price: "$12", stock: 150 },
    { id: 107, product: "Product G", customer: "Grace Lee", quantity: 6, price: "$18", stock: 250 },
    { id: 108, product: "Product H", customer: "Henry Wilson", quantity: 4, price: "$22", stock: 350 },
    { id: 109, product: "Product I", customer: "Ivy Turner", quantity: 9, price: "$27", stock: 450 },
    { id: 110, product: "Product J", customer: "Jack Clark", quantity: 2, price: "$35", stock: 550 },
];

// Pagination settings
const pageSize = 5;

const Inventory = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * pageSize;
    const currentInventory = inventory.slice(startIndex, startIndex + pageSize);

    const totalPages = Math.ceil(inventory.length / pageSize);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <DashboardLayout>
            <Flex mb={4} align="center">
                <Heading fontSize="40px" fontWeight="700" color="black">
                    Inventory
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
                <SelectRoot width="156px"height="46px" mr="10px" bg="#D41A1F" borderRadius="md">
                    <SelectTrigger>
                        <SelectValueText fontSize="14px" fontWeight="600" color="#FAFAFA" placeholder="Add Product" />
                    </SelectTrigger>
                    <SelectContent bg="white">
                    </SelectContent>
                </SelectRoot>
            </Flex>

            <Table.Root key="line" variant="line" size="md" borderRadius="lg" overflow="hidden">
                <Table.Header>
                    <Table.Row bg="white">
                        <Table.Cell fontSize="18px" color="#888888">
                            Product Name
                        </Table.Cell>
                        <Table.Cell fontSize="18px" color="#888888">
                            Customer
                        </Table.Cell>
                        <Table.Cell fontSize="18px" color="#888888">
                            Quantity
                        </Table.Cell>
                        <Table.Cell fontSize="18px" color="#888888">
                            Price
                        </Table.Cell>
                        <Table.Cell fontSize="18px" color="#888888">
                            Stock
                        </Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {currentInventory.map((item) => (
                        <Table.Row key={item.id} bg="white" borderWidth="1px">
                            <Table.Cell>{item.product}</Table.Cell>
                            <Table.Cell>{item.customer}</Table.Cell>
                            <Table.Cell>{item.quantity}</Table.Cell>
                            <Table.Cell>{item.price}</Table.Cell>
                            <Table.Cell>{item.stock}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            <Flex justify="center" mt={4}>
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    isDisabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Box mx={2}>
                    Page {currentPage} of {totalPages}
                </Box>
                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    isDisabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </Flex>
        </DashboardLayout>
    );
};

export default Inventory;

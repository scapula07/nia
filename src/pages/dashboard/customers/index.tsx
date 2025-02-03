"use client";

import { Box, Heading, Input, Flex, Spacer, Stack, Table } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { Checkbox } from "@/components/ui/checkbox";
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
import Link from "next/link";

type Customer = {
    id: string;
    name: string;
    address: string;
    orders: number;
    amountSpent: string;
};

const Customers = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "customers"));
                const customersData: Customer[] = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...(doc.data() as Omit<Customer, "id">),
                }));
                setCustomers(customersData);
                setFilteredCustomers(customersData);
            } catch (error) {
                console.error("Error fetching customers:", error);
            }
        };

        fetchCustomers();
    }, []);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const lowerCaseQuery = query.toLowerCase();
        const filtered = customers.filter(
            (customer) =>
                customer.name.toLowerCase().includes(lowerCaseQuery) ||
                customer.address.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredCustomers(filtered);
    };

    return (
        <DashboardLayout>
            <Flex mb={4} align="center">
                <Heading fontSize="40px" fontWeight="700" color="black">
                    Customers
                </Heading>
                <Spacer />
                <InputGroup width="282" height="46px" startElement={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 17.5L13.1692 13.1691M13.1692 13.1691C14.3413 11.997 14.9998 10.4072 14.9998 8.74956C14.9998 7.0919 14.3413 5.50213 13.1692 4.32998C11.997 3.15783 10.4073 2.49933 8.74959 2.49933C7.09193 2.49933 5.50216 3.15783 4.33001 4.32998C3.15786 5.50213 2.49936 7.0919 2.49936 8.74956C2.49936 10.4072 3.15786 11.997 4.33001 13.1691C5.50216 14.3413 7.09193 14.9998 8.74959 14.9998C10.4073 14.9998 11.997 14.3413 13.1692 13.1691Z" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
                        pl={10}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </InputGroup>
            </Flex>

            <Table.Root key="line" variant="line" size="md" borderRadius="lg" overflow="hidden">
                <Table.Header>
                    <Table.Row bg="white">
                        <Table.Cell fontSize="18px">
                            <Checkbox borderWidth="1px" />
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="left">
                            Name
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700"  textAlign="center">
                            Address
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Orders
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Amount Spent
                        </Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {filteredCustomers.map((customer) => (
                        <Table.Row key={customer.id} bg="white" borderWidth="1px">
                            <Table.Cell>
                                <Checkbox borderWidth="1px" />
                            </Table.Cell>
                            <Table.Cell>
                                <Link href={`/dashboard/customers/${customer.id}`}>
                                    {customer.name}
                                </Link>
                            </Table.Cell>
                            <Table.Cell textAlign="center">{customer.address}</Table.Cell>
                            <Table.Cell textAlign="center">{customer.orders}</Table.Cell>
                            <Table.Cell textAlign="center">{customer.amountSpent}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </DashboardLayout>
    );
};

export default Customers;

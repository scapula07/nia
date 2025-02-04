"use client";

import { Heading, Input, Flex, Spacer, Table, Button } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { InputGroup } from "@/components/ui/input-group";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { useEffect, useState } from "react";
import { db } from "@/firebase/config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
;

const Inventory = () => {
    const [inventory, setInventory] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null);

    useEffect(() => {
        // Fetch inventory data from Firestore on component mount
        const fetchInventory = async () => {
            const inventoryCollection = collection(db, "products");
            const inventorySnapshot = await getDocs(inventoryCollection);
            const inventoryList = inventorySnapshot.docs.map((doc) => ({
                id: doc.id, // Firebase document ID
                ...doc.data() // The document data
            }));
            setInventory(inventoryList);
        };

        fetchInventory();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const confirmDelete = async () => {
        if (deleteItemId) {
            try {
                await deleteDoc(doc(db, "inventory", deleteItemId));
                setInventory((prev) => prev.filter((item) => item.id !== deleteItemId));
                setDeleteItemId(null); // Close the confirmation popup
            } catch (error) {
                console.error("Error deleting item:", error);
            }
        }
    };

    const filteredInventory = inventory.filter((item) =>
        item.productName?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <DashboardLayout>
            <Flex mb={4} align="center">
                <Heading fontSize="40px" fontWeight="700" color="black">
                    Inventory
                </Heading>
                <Spacer />
                <InputGroup
                    width="282px"
                    height="46px"
                    startElement={
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M17.5 17.5L13.1692 13.1691M13.1692 13.1691C14.3413 11.997 14.9998 10.4072 14.9998 8.74956C14.9998 7.0919 14.3413 5.50213 13.1692 4.32998C11.997 3.15783 10.4073 2.49933 8.74959 2.49933C7.09193 2.49933 5.50216 3.15783 4.33001 4.32998C3.15786 5.50213 2.49936 7.0919 2.49936 8.74956C2.49936 10.4072 3.15786 11.997 4.33001 13.1691C5.50216 14.3413 7.09193 14.9998 8.74959 14.9998C10.4073 14.9998 11.997 14.3413 13.1692 13.1691Z" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }
                >
                    <Input
                        placeholder="Search Product..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        width="100%"
                        mr={4}
                        bg="white"
                        border="1px"
                        borderColor="gray.300"
                        borderRadius="md"
                        p={2}
                        pl={10} // Adjust padding for space for the icon
                    />
                </InputGroup>

                <Button width="156px" bg="#D41A1F" mr={4} color="white" asChild>
                    <a href="/dashboard/inventory/upload-csv">Upload CSV File</a>
                </Button>

                <Button width="156px" bg="#D41A1F" color="white" asChild>
                    <a href="/dashboard/inventory/manual-upload">Manual Upload</a>
                </Button>
            </Flex>

            <Table.Root key="line" variant="line" size="md" borderRadius="lg" overflow="hidden">
                <Table.Header>
                    <Table.Row bg="white">
                        <Table.Cell fontSize="18px" fontWeight="700" >
                            Product Name
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Category
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Price
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Stock
                        </Table.Cell>
                        <Table.Cell fontSize="18px" fontWeight="700" textAlign="center">
                            Action
                        </Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {inventory.map((item) => (
                        <Table.Row key={item.id} bg="white" borderWidth="1px">
                            <Table.Cell>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                    <img
                                        src={item.image}
                                        alt={item.productName}
                                        style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
                                    />
                                    <span>{item.productName}</span>
                                </div>
                            </Table.Cell>
                            <Table.Cell textAlign="center">{item.categories}</Table.Cell>
                            <Table.Cell textAlign="center">{item.price}</Table.Cell>
                            <Table.Cell textAlign="center">{item.quantity}</Table.Cell>
                            <Table.Cell textAlign="center">
                                <Button
                                    colorScheme="red"
                                    size="sm"
                                    onClick={() => setDeleteItemId(item.id)}
                                >
                                    {<IoMdClose></IoMdClose>}
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>

            {deleteItemId && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Are you sure you want to delete this item?</p>
                        <Flex>
                            <Button onClick={confirmDelete} colorScheme="red" mr={3}>
                                Yes, Delete
                            </Button>
                            <Button onClick={() => setDeleteItemId(null)} colorScheme="gray">
                                Cancel
                            </Button>
                        </Flex>
                    </div>
                </div>
            )}
        </DashboardLayout>
    );
};

export default Inventory;

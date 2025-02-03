"use client";

import { useState, useRef } from "react";
import { Heading, Table, Flex, Link, VStack, Text, Box, Button } from "@chakra-ui/react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import Image from "next/image";

const UploadCSV = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            console.log("File selected:", file.name);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file) {
            setSelectedFile(file);
            console.log("File dropped:", file.name);
        }
    };

    const handleBrowseClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <DashboardLayout>
            <Flex direction="column" mb={8}>
                <Flex justifyContent="space-between" alignItems="center" pb="24px">
                    {/* Back Link and Heading */}
                    <Flex flexDirection="column">
                        <Link href="/dashboard/inventory" variant="underline" pb={4}>
                            Back
                        </Link>
                        <Heading mb={4} fontSize="32px" fontWeight="700">
                            Add Product
                        </Heading>
                    </Flex>

                    {/* Save and Cancel Buttons */}
                    <Flex>
                        <Button
                            width="105px"
                            height="46px"
                            bg="#FBDCDD"
                            mr={4}
                            color="#D41A1F"

                        >
                            Cancel
                        </Button>
                        <Button
                            width="105px"
                            height="46px"
                            bg="#D41A1F"
                            color="white"
                        >
                            Save
                        </Button>
                    </Flex>
                </Flex>


                {/* Drop Area */}
                <Box
                    role="button"
                    tabIndex={0}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    px={{ base: 10, sm: 20 }}
                    py={{ base: 3, sm: 4 }}
                    mt={4}
                    textAlign="center"
                    cursor="pointer"
                    _hover={{ borderColor: "gray.400" }}
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={handleBrowseClick}
                >
                    <Image src="/upload-folder.png" width={180} height={180} alt="upload folder" />
                    <VStack spacing={3} textAlign="center">
                        <Text fontSize="24px" fontWeight="700">Upload your files</Text>
                        <Text fontSize="18px" fontWeight="400">Drop your images here or <Button variant="link" onClick={handleBrowseClick}>browse</Button></Text>
                    </VStack>
                    <input type="file" accept=".csv" ref={fileInputRef} style={{ display: "none" }} onChange={handleFileUpload} />
                </Box>

                {/* Image Preview */}
                {selectedFile && (
                    <Box mt={4}>
                        <Text fontSize="18px" fontWeight="600">Selected File:</Text>
                        <Text fontSize="16px">{selectedFile.name}</Text>
                    </Box>
                )}

                <VStack align="left">
                    <Heading pt={137} mb={4} fontSize="24px" fontWeight="700">All documents</Heading>
                    <Text fontSize="18px">Overview of every file or document you have uploaded</Text>
                </VStack>

                {/* Table Placeholder */}
                <Box pt={6}>
                    <Table.Root size="md" borderRadius="lg" overflow="hidden">
                        <Table.Header>
                            <Table.Row bg="white">
                                <Table.Cell fontSize="18px" color="#888888">Product</Table.Cell>
                                <Table.Cell fontSize="18px" color="#888888">Customer Name</Table.Cell>
                                <Table.Cell fontSize="18px" color="#888888">Quantity</Table.Cell>
                                <Table.Cell fontSize="18px" color="#888888">Status</Table.Cell>
                                <Table.Cell fontSize="18px" color="#888888">Amount</Table.Cell>
                                <Table.Cell fontSize="18px" color="#888888">Date & Time</Table.Cell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body></Table.Body>
                    </Table.Root>
                </Box>
            </Flex>
        </DashboardLayout>
    );
};

export default UploadCSV;

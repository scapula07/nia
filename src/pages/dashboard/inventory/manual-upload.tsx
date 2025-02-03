"use client";
import router from 'next/router';
import { Heading, Input, Button, Flex, Text, Stack, Box, Link, HStack, VStack, Image, Textarea } from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
import DashboardLayout from "@/components/Layout/DashboardLayout";
import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/config"

const categories1 = [
    "Fresh Produce",
    "Dairy & Eggs",
    "Meats & Seafoods",
    "Pantry Staples",
    "Frozen Foods",
    "Beverages"
];

const categories2 = [
    "Baby & Kids",
    "Snacks & Treats",
    "Breads & Bakery",
    "Health & Wellness",
    "Special Dietary Needs"
];

const defaultImage = "/Users/andrewondara/Desktop/nia/public/blank_upload.png";

const ManualUpload = () => {
    const [files, setFiles] = React.useState<File[]>([]);
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [productName, setProductName] = React.useState('');
    const [productDescription, setProductDescription] = React.useState('');
    const [productPrice, setProductPrice] = React.useState('');
    const [discountPrice, setDiscountPrice] = React.useState('');
    const [stockQuantity, setStockQuantity] = React.useState('');
    const [previews, setPreviews] = React.useState<string[]>([]);


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const uploadedFiles = Array.from(event.target.files);
            setFiles([...files, ...uploadedFiles]);
            setPreviews([...previews, ...uploadedFiles.map(file => URL.createObjectURL(file))]);
        }
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prevState =>
            prevState.includes(category)
                ? prevState.filter(c => c !== category)
                : [...prevState, category]
        );
    };

    const handleSave = async () => {
        // Create a new product object with form data
        const newProduct = {
            productName: productName,
            productDescription: productDescription,
            price: productPrice,
            discountPrice: discountPrice,
            categories: selectedCategories,
            quantity: stockQuantity,
            image: previews,
            createdAt: new Date()
        };

        try {
            // Add the new product to Firestore inventory collection
            const docRef = await addDoc(collection(db, "products"), newProduct);
            console.log("Document written with ID: ", docRef.id);
            router.push('/dashboard/inventory');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <DashboardLayout>
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
                        onClick={handleSave}
                    >
                        Save
                    </Button>
                </Flex>
            </Flex>
            <HStack alignItems="flex-start" spacing={25}>
                {/* Product Information */}
                <Box p={6} width="703px" bg="gray.50" borderRadius="xl">
                    <Heading color="black" fontSize="18px" fontWeight="700" pb="24px">Information</Heading>
                    <Field label="Product Name">
                        <Input
                            id="Title"
                            placeholder="Title"
                            mb={4}
                            pl="16px"
                            bg="gray.100"
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </Field>
                    <Field label="Product Description">
                        <Textarea
                            id="productDescription"
                            placeholder="Product Description"
                            mb={4}
                            bg="gray.100"
                            pt="10px"
                            pl="16px"
                            height="91px"
                            onChange={(e) => setProductDescription(e.target.value)}
                        />
                    </Field>

                    {/* Price Information */}
                    <Heading color="black" fontSize="18px" fontWeight="700">Price</Heading>
                    <HStack gap={6} mt={6}>
                        <Field label="Product Price">
                            <Input
                                id="productPrice"
                                placeholder="Product Price"
                                mb={4}
                                pl="16px"
                                bg="gray.100"
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </Field>
                        <Field label="Discount Price">
                            <Input
                                id="discountPrice"
                                placeholder="Discount Price"
                                mb={4}
                                pl="16px"
                                bg="gray.100"
                                onChange={(e) => setDiscountPrice(e.target.value)}
                            />
                        </Field>
                    </HStack>

                    {/* Categories Selection */}
                    <Heading color="black" mt={6} fontSize="18px" fontWeight="700">
                        Categories
                    </Heading>
                    <Flex flexWrap="wrap" gap={4} mt={6} fontSize="sm" fontWeight="semibold">
                        {/* First Column of Categories */}
                        <Stack direction="column">
                            {categories1.map((category, index) => (
                                <label key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                        style={{
                                            backgroundColor: "white"
                                        }}
                                    />
                                    {category}
                                </label>
                            ))}
                        </Stack>

                        {/* Second Column of Categories */}
                        <Stack direction="column">
                            {categories2.map((category, index) => (
                                <label key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <input
                                        type="checkbox"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                        style={{
                                            backgroundColor: "white"
                                        }}
                                    />
                                    {category}
                                </label>
                            ))}
                        </Stack>
                    </Flex>

                    {/* Stock Quantity */}
                    <Heading color="black" mt={6} fontSize="18px" fontWeight="700" pb="24px">Stock Quantity</Heading>
                    <Field label="Enter Stock">
                        <Input
                            id="stockQuantity"
                            placeholder="Number of Items"
                            mb={4}
                            pl="16px"
                            bg="gray.100"
                            onChange={(e) => setStockQuantity(e.target.value)}
                        />
                    </Field>
                </Box>
                {/* Image Upload Component */}
                <Box pl={25} p={6} width="400px" bg="gray.50" borderRadius="xl">
                    {previews.map((src, index) => (
                        <Image key={index} src={src} alt={`Preview ${index}`} width="100%" height="200px" objectFit="cover" borderRadius="md" />
                    ))}
                    <Heading color="black" fontSize="18px" fontWeight="700" pb="24px">Photo Gallery</Heading>
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
                        borderWidth="2px"
                        borderStyle="dashed"
                        borderColor="gray.300"
                        borderRadius="xl"
                        cursor="pointer"
                        _hover={{ borderColor: "gray.400" }}
                    >

                        <VStack spacing={3}>
                            <Text fontSize="md">
                                Drop your images here or{" "}
                                <Input type="file" accept="image/*" multiple onChange={handleFileChange} />
                            </Text>
                            <Text fontSize="sm" color="gray.500">
                                Maximum upload file size: 5MB
                            </Text>
                        </VStack>
                    </Box>
                </Box>

            </HStack>

        </DashboardLayout>
    );
};

export default ManualUpload;

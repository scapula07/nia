import React, { useState } from "react";
import {
    Box,
    Text,
    Input,
    VStack,
    HStack,
    Button,
    Image,
    Heading,
} from "@chakra-ui/react";
import DashboardLayout from "@/components/Layout/DashboardLayout";

const DealsOfTheDay: React.FC = () => {
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [stock, setStock] = useState("");

    const handleUpload = (file: File) => {
        console.log("File uploaded:", file);
    };

    const handleDeleteUpload = () => {
        console.log("Delete upload");
    };

    return (
        <DashboardLayout>
            <Heading fontSize="40px" fontWeight="700" color="black" pb={6}>
                Offers
            </Heading>
            <Box
                bg="gray.50"
                p={6}
                rounded="xl"
                maxW="700px"
                mx="auto"
            >
                <Text fontSize="lg" fontWeight="bold" color="black">
                    Deals of the Day
                </Text>

                <VStack align="start" spacing={6} mt={4}>
                    <Box>
                        <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={2}>
                            Product Name
                        </Text>
                        <Input
                            placeholder="Title"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            bg="gray.100"
                            rounded="lg"
                            p={3}
                            color="gray.600"
                            width="100%"
                        />
                    </Box>

                    <Text fontSize="lg" fontWeight="bold" color="black">
                        Price
                    </Text>

                    <HStack spacing={6} w="full">
                        <Box flex="1">
                            <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={2}>
                                Product Price
                            </Text>
                            <Input
                                placeholder="Enter price"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                bg="gray.100"
                                rounded="lg"
                                p={3}
                                color="gray.600"
                            />
                        </Box>

                        <Box flex="1">
                            <Text fontSize="sm" fontWeight="medium" color="gray.600" mb={2}>
                                Discount Price
                            </Text>
                            <Input
                                placeholder="Price at discount"
                                value={discountPrice}
                                onChange={(e) => setDiscountPrice(e.target.value)}
                                bg="gray.100"
                                rounded="lg"
                                p={3}
                                color="gray.600"
                            />
                        </Box>
                    </HStack>

                    <Box>
                        <Text fontSize="lg" fontWeight="bold" color="black" mb={2}>
                            Stock Quantity
                        </Text>
                        <Input
                            placeholder="Number of items"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            bg="gray.100"
                            rounded="lg"
                            p={3}
                            color="gray.600"
                        />
                    </Box>

                    <Box>
                        <Text fontSize="lg" fontWeight="bold" color="black" mb={4}>
                            Deal Thumbnail
                        </Text>
                        <Box
                            bg="gray.100"
                            p={6}
                            rounded="lg"
                            border="2px dashed"
                            borderColor="gray.300"
                            textAlign="center"
                        >
                            <VStack spacing={3}>
                                <Image
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d6c76022e50bdccc1cef9d8e5240999e05ac154ed98be055934eb169821353f"
                                    alt="Upload Icon"
                                    boxSize="40px"
                                />
                                <Text fontSize="sm" color="gray.500">
                                    Drop your images here or{" "}
                                    <Text as="span" color="red.600">
                                        browse
                                    </Text>
                                </Text>
                                <Text fontSize="xs" color="gray.400">
                                    Maximum upload file size: 120MB
                                </Text>
                            </VStack>
                        </Box>
                    </Box>

                    <HStack spacing={4} align="center" w="full">

                    </HStack>

                    <Button
                        mt={4}
                        colorScheme="red"
                        onClick={() => console.log("Create New Deal")}
                    >
                        + Create New
                    </Button>

                </VStack>
            </Box>
        </DashboardLayout>
    );
};

export default DealsOfTheDay;

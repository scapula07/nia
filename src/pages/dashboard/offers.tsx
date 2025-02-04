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
    Flex,
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
            <Flex justifyContent="space-between" alignItems="center" pb="24px">
                {/* Back Link and Heading */}
                <Flex flexDirection="column">
                    <Heading mb={4} fontSize="32px" fontWeight="700">
                        Offers
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
                        width="full"
                    />


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

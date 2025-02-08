import React, { useState } from "react";
import {
    Box,
    Text,
    Input,
    VStack,
    HStack,
    Button,
    Heading,
    Flex,
} from "@chakra-ui/react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { InputGroup } from "@/components/ui/input-group";

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
                    <InputGroup width="full" startElement={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 17.5L13.1692 13.1691M13.1692 13.1691C14.3413 11.997 14.9998 10.4072 14.9998 8.74956C14.9998 7.0919 14.3413 5.50213 13.1692 4.32998C11.997 3.15783 10.4073 2.49933 8.74959 2.49933C7.09193 2.49933 5.50216 3.15783 4.33001 4.32998C3.15786 5.50213 2.49936 7.0919 2.49936 8.74956C2.49936 10.4072 3.15786 11.997 4.33001 13.1691C5.50216 14.3413 7.09193 14.9998 8.74959 14.9998C10.4073 14.9998 11.997 14.3413 13.1692 13.1691Z" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}>
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
                    </InputGroup>


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
                        color="#D41A1F"
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

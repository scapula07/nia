import React, { useState, useEffect } from "react";
import {
    Box,
    Text,
    Input,
    VStack,
    HStack,
    Button,
    Heading,
    Flex,
    Table,
    Textarea,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field"
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { InputGroup } from "@/components/ui/input-group";
import { addOffer, getProductByID } from "@/lib/api/offers.api";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const DealsOfTheDay: React.FC = () => {
    const [productID, setProductID] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [description, setDescription] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [stock, setStock] = useState("");
    const [loading, setLoading] = useState(false);
    const [offers, setOffers] = useState<{ productName: string; Image: string; id: string }[]>([]);

    useEffect(() => {
        fetchOffers();
    }, []);

    const fetchOffers = async () => {
        try {
            const offersCollection = await getDocs(collection(db, "offers"));

            const offerData = await Promise.all(
                offersCollection.docs.map(async (doc) => {
                    const offer = doc.data();

                    // Fetch product details using the getProductByID function
                    const product = await getProductByID(offer.productID);
                    console.log(product?.Image)
                    return {
                        id: doc.id,
                        ...offer,
                        productName: product?.productName || "Unknown Product",
                        Image: product?.Image || "",
                    };
                })
            );

            setOffers(offerData);
        } catch (error) {
            console.error("Error fetching offers:", error);
        }
    };

    const handleSaveOffer = async () => {
        if (!productID || !productPrice || !discountPrice || !stock) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            setLoading(true);
            await addOffer(productID, productPrice, discountPrice, stock, description);
            alert("Offer added successfully!");
            setProductID("");
            setProductPrice("");
            setDiscountPrice("");
            setStock("");
            fetchOffers();
        } catch (error) {
            alert("Failed to add offer.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardLayout>
            <Flex justifyContent="space-between" alignItems="center" pb="24px">
                <Heading fontSize="32px" fontWeight="700">Offers</Heading>
            </Flex>

            <Box bg="gray.50" p={6} rounded="xl" maxW="700px" mx="auto">
                <Text fontSize="lg" fontWeight="bold" color="black">Deals of the Day</Text>
                <VStack align="start" spacing={6} mt={4}>
                    <InputGroup width="full">
                        <Field label="Product ID">
                            <Input placeholder="Enter Product's ID" value={productID} onChange={(e) => setProductID(e.target.value)} bg="gray.100" rounded="lg" p={3} />
                        </Field>
                    </InputGroup>
                    <HStack spacing={6} w="full">
                        <Field label="Stock">
                            <Input placeholder="Enter price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} bg="gray.100" rounded="lg" p={3} />
                        </Field>
                        <Field label="Discount Price">
                            <Input placeholder="Price at discount" value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} bg="gray.100" rounded="lg" p={3} />
                        </Field>
                    </HStack>
                    <Field label="Quantity">
                        <Input placeholder="Number of items" value={stock} onChange={(e) => setStock(e.target.value)} bg="gray.100" rounded="lg" p={3} />
                    </Field>
                    <Field label="Offer Description">
                        <Textarea
                            id="offerDescription"
                            placeholder="Describe the offer"
                            mb={4}
                            bg="gray.100"
                            pt="10px"
                            pl="16px"
                            height="91px"
                        />
                    </Field>
                    <Button mt={4} color="#D41A1F" onClick={handleSaveOffer} isLoading={loading}>+ Create New</Button>
                </VStack>
            </Box>

            <Box pt={6}>
                <Table.Root size="md" borderRadius="lg" overflow="hidden">
                    <Table.Header>
                        <Table.Row bg="white">
                            <Table.Cell fontWeight="700">Product</Table.Cell>
                            <Table.Cell fontWeight="700">Price</Table.Cell>
                            <Table.Cell fontWeight="700">Discount Price</Table.Cell>
                            <Table.Cell fontWeight="700">Target Goal</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {offers.map((offer) => (
                            <Table.Row key={offer.id}>
                                <Table.Cell>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                                        <img
                                            src={offer.Image}
                                            alt={offer.productName}
                                            style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
                                        />
                                        <span>{offer.productName}</span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell>${offer.productPrice}</Table.Cell>
                                <Table.Cell>${offer.discountPrice}</Table.Cell>
                                <Table.Cell>{offer.totalUnits}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>

                </Table.Root>
            </Box>
        </DashboardLayout>
    );
};

export default DealsOfTheDay;

import {
    AccordionRoot,
    AccordionItem,
    AccordionItemTrigger,
    AccordionItemContent,
} from "@/components/ui/accordion";
import { Box, Container, Stack, Text, Button } from "@chakra-ui/react";

const FAQSection = () => {
    return (
        <Box p={16} color="black">
            <Container maxW="container.xl">
                {/* Tagline and Subtitle */}
                <Stack spacing={4} textAlign="center" mb={12}>
                    <Text fontSize="48px" fontWeight="bold" color="black">
                        Your Questions Answered
                    </Text>
                    <Text fontSize="lg" color="gray.600">
                        Discover Our Commitment
                    </Text>
                </Stack>

                {/* Accordion */}
                <AccordionRoot collapsible defaultValue={["b"]}>
                    {/* FAQ Item 1 */}
                    <Box
                        border="1px solid #E2E8F0" // Light gray border
                        borderRadius="8px"
                        p={4} // Add padding inside the border
                        mb={4} // Add spacing between items
                    >
                        <AccordionItem value="item1">
                            <AccordionItemTrigger color="black">
                                What Food & Beverages products can I buy on Nia at wholesale prices for my store?
                            </AccordionItemTrigger>
                            <AccordionItemContent>
                                On Nia, there's a variety of products in Food & Beverages available for purchase at wholesale prices for your store. Some of the top-selling Food & Beverages products on Nia include: Dairy, Meats, Produce, Grains, and more. Start shopping today.
                            </AccordionItemContent>
                        </AccordionItem>
                    </Box>



                    {/* FAQ Item 2 */}
                    <Box
                        border="1px solid #E2E8F0"
                        borderRadius="8px"
                        p={4}
                        mb={4}
                    >
                        <AccordionItem value="item6">
                            <AccordionItemTrigger>
                                How can I buy Food & Beverages products at wholesale prices for my store?
                            </AccordionItemTrigger>
                            <AccordionItemContent>
                            Whether you’re buying products for a brick-and-mortar store, online shop, food truck, or pop-up shop, you can shop Food & Beverages products at wholesale prices on Nia—sign up for free. When you join as a retailer, you’ll unlock wholesale prices with thousands of independent brands.
                            </AccordionItemContent>
                        </AccordionItem>
                    </Box>
                </AccordionRoot>
            </Container>
        </Box>
    );
};

export default FAQSection;

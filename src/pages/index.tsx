import localFont from "next/font/local";
import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    Stack,
    Grid,
    Flex,
} from "@chakra-ui/react";
import FeaturedProducts from "@/components/Landing/FeaturedProducts";
import ShopButton from "@/components/Landing/ShopButton";
import {
    AccordionRoot,
    AccordionItem,
    AccordionItemTrigger,
    AccordionItemContent,
} from "@/components/ui/accordion";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function Home() {
    return (
        <Box bg="#FAFAFA" w="100%">
            {/* HERO SECTION */}
            <Box
                as="section"
                minH="100vh"
                w="100vw" 
                backgroundImage="url('/hero_image.jpeg')"
                backgroundSize="cover"
                backgroundPosition="center"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                position="relative"
                textAlign="center"
            >
                {/* Overlay */}
                <Box
                    bg="rgba(0, 0, 0, 0.5)"
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0} />

                <Container maxW="container.md" position="relative" zIndex={1}>
                    <Heading
                        as="h1"
                        fontSize={{ base: "32px", md: "64px" }}
                        fontFamily="Montserrat"
                        fontWeight="700"
                        lineHeight={{ base: "40px", md: "76.8px" }}
                        textAlign="center"
                        mb={4}
                    >
                        Buy for your Business,
                        <br />
                        All in One Place.
                    </Heading>
                    <Text
                        fontSize={{ base: "18px", md: "28px" }}
                        mb={8}
                        fontFamily="'Proxima Nova Condensed', sans-serif"
                        fontWeight="400"
                        lineHeight={{ base: "24px", md: "33.6px" }}
                        textAlign="center"
                    >
                        Bringing healthy, affordable food to your doorstep. We make it easy to
                        shop fresh,
                        <br />
                        eat well, and thrive in areas where food options are limited.
                    </Text>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <ShopButton />
                    </Box>
                </Container>
            </Box>

            {/* WELCOME SECTION */}
            <Box py={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }} bg="white">
                <Container maxW="container.xl">
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        align="center"
                        justify="space-between"
                    >
                        {/* Left: Text & Button */}
                        <Stack  width={{ base: "100%", md: "50%" }}>
                            <Text
                                fontSize={{ base: "24px", md: "48px" }}
                                color="black"
                                fontWeight="700"
                                lineHeight={{ base: "28px", md: "57.6px" }}
                            >
                                Welcome to Nia: Wholesale Marketplace for Independent Business
                                Owners
                            </Text>
                            <Text
                                fontSize={{ base: "16px", md: "24px" }}
                                color="black"
                                fontWeight="400"
                            >
                                At Nia, we're empowering small business owners and independent
                                brands to buy and sell wholesale goods online. If you're a retailer
                                or business shopping for wholesale products, Nia offers you
                                straight-forward financial terms and logistics that were
                                previously only available to large retail chains. We also provide
                                powerful sales, marketing, and analytics tools for brands, so sellers
                                can simplify their wholesale businesses and expand their reach of
                                independent shop owners.
                            </Text>
                            <ShopButton />
                            <Text
                                fontWeight="400"
                                fontSize={{ base: "14px", md: "18px" }}
                                lineHeight={{ base: "16px", md: "21.6px" }}
                                color="#5B5B5B"
                            >
                                Your privacy matters. Read our policy here.
                            </Text>
                        </Stack>

                        {/* Right: Image */}
                        <Box width={{ base: "100%", md: "50%" }}>
                            <Image
                                src="./m_image.png"
                                alt="Shop Now"
                                borderRadius="12px"
                                border="1px"
                                w={{ base: "100%", md: "624px" }}
                                h={{ base: "auto", md: "524px" }}
                                objectFit="cover"
                                opacity="0.99" />
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* CATEGORIES SECTION */}
            <Flex justifyContent="center" alignItems="center" py={{ base: 8, md: 16 }}>
                <Box px={{ base: 4, md: 16 }}>
                    <Heading
                        as="h1"
                        fontSize={{ base: "32px", md: "48px" }}
                        color="black"
                        fontWeight="700"
                        lineHeight={{ base: "40px", md: "57.6px" }}
                        textAlign="center"
                        p={{ base: 4, md: 12 }}
                    >
                        Discover Food, Drink and More
                    </Heading>

                    <Grid
                        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                        gap={6}
                    >
                        {[
                            {
                                src: "/categories/cat1.jpeg",
                                alt: "Category 1",
                                title: "Fresh Groceries and Vegetables",
                                subtitle: "Fresh and Locally Sourced",
                            },
                            {
                                src: "/categories/cat2.jpeg",
                                alt: "Category 2",
                                title: "Whole Grains and Breads",
                                subtitle: "Nutritious and Filling Options",
                            },
                            {
                                src: "/categories/cat3.jpeg",
                                alt: "Category 3",
                                title: "Canned Goods and Soups",
                                subtitle: "Convenient and Reliable Meals",
                            },
                            {
                                src: "/categories/cat4.jpeg",
                                alt: "Category 4",
                                title: "Meats and Proteins",
                                subtitle: "Quality Sources of Protein",
                            },
                            {
                                src: "/categories/cat5.jpeg",
                                alt: "Category 5",
                                title: "Dairy Products",
                                subtitle: "Essential for Balanced Diet",
                            },
                            {
                                src: "/categories/cat6.jpeg",
                                alt: "Category 6",
                                title: "Snacks and Treats",
                                subtitle: "Satisfying Your Cravings",
                            },
                        ].map((category, index) => (
                            <Box key={index}>
                                <Image
                                    src={category.src}
                                    alt={category.alt}
                                    borderRadius="md"
                                    mb={4}
                                    objectFit="cover"
                                    w="100%"
                                    h={{ base: "200px", md: "322px" }} />
                                <Text fontWeight="700" color="black">
                                    {category.title}
                                </Text>
                                <Text color="black" fontWeight="400">
                                    {category.subtitle}
                                </Text>
                            </Box>
                        ))}
                    </Grid>
                </Box>
            </Flex>

            {/* FEATURED PRODUCTS */}
            <FeaturedProducts/>

            {/* FAQ SECTION */}
            <Box py={{ base: 8, md: 16 }} px={{ base: 4, md: 16 }} color="black">
                <Container maxW="container.xl">
                    <Stack textAlign="center" mb={12}>
                        <Text
                            fontSize={{ base: "32px", md: "48px" }}
                            fontWeight="bold"
                            color="black"
                        >
                            Your Questions Answered
                        </Text>
                        <Text fontSize={{ base: "16px", md: "lg" }} color="gray.600">
                            Discover Our Commitment
                        </Text>
                    </Stack>

                    <AccordionRoot collapsible defaultValue={["b"]}>
                        {/* FAQ Item 1 */}
                        <Box border="1px solid #E2E8F0" borderRadius="8px" p={4} mb={4}>
                            <AccordionItem value="item1">
                                <AccordionItemTrigger color="black">
                                    What Food &amp; Beverages products can I buy on Nia at wholesale prices for
                                    my store?
                                </AccordionItemTrigger>
                                <AccordionItemContent>
                                    On Nia, there's a variety of products in Food &amp; Beverages available for
                                    purchase at wholesale prices for your store. Some of the top-selling Food
                                    &amp; Beverages products on Nia include: Dairy, Meats, Produce, Grains,
                                    and more. Start shopping today.
                                </AccordionItemContent>
                            </AccordionItem>
                        </Box>

                        {/* FAQ Item 2 */}
                        <Box border="1px solid #E2E8F0" borderRadius="8px" p={4} mb={4}>
                            <AccordionItem value="item6">
                                <AccordionItemTrigger color="black">
                                    How can I buy Food &amp; Beverages products at wholesale prices for my store?
                                </AccordionItemTrigger>
                                <AccordionItemContent>
                                    Whether you’re buying products for a brick-and-mortar store, online shop,
                                    food truck, or pop-up shop, you can shop Food &amp; Beverages products at
                                    wholesale prices on Nia—sign up for free. When you join as a retailer, you’ll
                                    unlock wholesale prices with thousands of independent brands.
                                </AccordionItemContent>
                            </AccordionItem>
                        </Box>
                    </AccordionRoot>
                </Container>
            </Box>
        </Box>
    );
}

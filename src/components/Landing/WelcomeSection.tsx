import { Box, Button, Container, HStack, Text, Stack, Image } from '@chakra-ui/react';
import ShopButton from '@/components/Landing/ShopButton';
import { MdOutlineShoppingCart } from "react-icons/md";

const WelcomeSection = () => {
  return (
    <Box 
        py={16}       
        bg="white" 
        width="1440px"
        height="652px"
        p="64px"
        gap="64px"
    >
      <Container maxW="container.xl">
        <HStack
          spacing={{ base: 4, md: 8 }}
          align="center"
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          {/* Left Section: Text and Shop Now Button */}
          <Stack spacing={4} width={{ base: '100%', md: '50%' }}>
            <Text 
                fontSize="48px"  
                color="black" 
                fontWeight="700"
                lineHeight="57.6px"
 
            >
                Welcome to Nia:
                Wholesale Marketplace for Independent Business Owners
            </Text>
            <Text fontSize="24px" color="black" fontWeight="400">
            At Nia, we're empowering small business owners and independent brands to buy and sell wholesale goods online. If you're a retailer or business shopping for wholesale products, Nia offers you straight-forward financial terms and logistics that were previously only available to large retail chains. We also provide powerful sales, marketing, and analytics tools for brands, so sellers can simplify their wholesale businesses and expand their reach of independent shop owners.
            </Text>
            <ShopButton />
            <Text fontWeight="400" fontSize="18px" lineHeight="21.6px" color="#5B5B5B">Your privacy matters. Read our policy here.</Text>
          </Stack>

          {/* Right Section: Image */}
          <Box width={{ base: '100%', md: '50%' }}>
            <Image
                src="./m_image.png"
                alt="Shop Now"
                borderRadius="12px" // Border radius set to 12px
                border="1px" // Border thickness of 1px
                width="624px" // Set width to 624px
                height="524px" // Set height to 524px
                minWidth="504px" // Set minimum width to 504px
                objectFit="cover"
                opacity="0.99" // Set opacity to 99%
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default WelcomeSection;

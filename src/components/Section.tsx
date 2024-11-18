import { Box, Button, Container, HStack, Text, Stack, Image } from '@chakra-ui/react';
import { colorPalettes } from "compositions/lib/color-palettes"
import { MdOutlineShoppingCart } from "react-icons/md";

const ShopSection = () => {
  return (
    <Box 
        py={16}       
        bg="gray.50" 
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
                Welcome to Nia: Nourishing Food for All!
            </Text>
            <Text fontSize="24px" color="black" fontWeight="400">
            Join us in making nutritious food accessible to everyone, especially in food deserts across America. Explore our diverse selection of affordable and healthy food options today!
            </Text>
            <Button 
                variant="solid"
                color="white"
                size="lg"
                bg="#009E4D" 
                _hover={{
                    bg: '#007A3D',
                }}
                width="168px" // Set width to 168px (Hug width)
                height="50px" // Set height to 50px (Hug height)
                fontSize="18px" // Change the font size to 18px
                fontWeight="400" // Set font weight to 400
                textAlign="center" // Align the text to the center
                display="flex" // Enable flexbox to properly align text and icon
                justifyContent="center" // Center the text horizontally
                alignItems="center" // Center the text vertically
                fontFamily="Proxima Nova Condensed, sans-serif" // Apply Proxima Nova Condensed font
                lineHeight="33" 
                borderRadius="10px"
                paddingTop="8px" 
                paddingRight="16px" // Set right padding to 16px
                paddingBottom="8px" // Set bottom padding to 8px
                paddingLeft="16px" // Set left padding to 16px
                gap="8px" // Set the gap between text and icon to 8px
            >
                Shop now <MdOutlineShoppingCart />
            </Button>
            <Text fontWeight="400" fontSize="18px" lineHeight="21.6px" color="#5B5B5B">Your privacy matters. Read our policy here.</Text>
          </Stack>

          {/* Right Section: Image */}
          <Box width={{ base: '100%', md: '50%' }}>
            <Image
                src="./welcome_image.jpeg"
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

export default ShopSection;

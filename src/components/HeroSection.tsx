// components/HeroSection.tsx
import { FunctionComponent } from 'react';
import { Box, Heading, Text, Button, Container } from '@chakra-ui/react';
import { MdOutlineShoppingCart } from "react-icons/md";
import ShopButton from '@/components/ShopButton';

interface HeroSectionProps {}

export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  return (
    <Box
      as="section"
      height="100vh"
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
      <Box bg="rgba(0, 0, 0, 0.5)" position="absolute" top={0} left={0} right={0} bottom={0} />
      
      <Container maxW="container.md" position="relative" zIndex={1}>
        <Heading 
            as="h1" 
            fontSize="64px" 
            fontFamily="Montserrat" 
            fontWeight="700"
            lineHeight="76.8px"
            textAlign="center"
            mb={4}
        >
        Nourishing Communities, <br /> 
        One Delivery at a Time
        </Heading>
        <Text 
            fontSize="28px" 
            mb={8}  
            fontFamily="'Proxima Nova Condensed', sans-serif" 
            fontWeight="400"
            lineHeight="33.6px"
            textAlign="center"
        >
            Bringing healthy, affordable food to your doorstep. We make it easy to shop fresh, <br /> 
            eat well, and thrive in areas where food options are limited.
        </Text>
        <Box
            display="flex" 
            justifyContent="center"
            alignItems="center" 
        >
            <ShopButton />
        </Box>
      </Container>
    </Box>
  );
};

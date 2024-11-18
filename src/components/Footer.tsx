import React from 'react';
import { Box, Container, Stack, Text, Link, IconButton, HStack, Input, Button, Flex, Image} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Field } from "@/components/ui/field"

const Footer: React.FC = () => {
  return (
    <Box bg="black" color="white" py={8} height="389px">
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="flex-start"
          h="full"
        >
          {/* Left Section: Join the Newsletter */}
          <Stack spacing={4} width={{ base: '100%', md: '40%' }} mb={{ base: 8, md: 0 }}>
            <Image 
                src="/nia_logo.png" // Path from the public directory
                width="66.33px" // Adjust width of the image
                height="68px" 
            />
            <Text fontSize="xl" fontWeight="bold">Join our newsletter to stay up to date on features and releases</Text>
            <Field label="Your Email">
                <HStack spacing={2}>
                    <Input
                        id="email"
                        type="email"
                        placeholder="yourmail@info.com"
                        size="md"
                        bg="white"
                        color="black"
                        borderRadius="12px"
                        border="1px"
                        width="328px"
                        height="46px" 
                        paddingLeft="12px"
                    />
                    <Button
                        bg="green"
                        color="white"
                        fontSize="lg"
                        fontWeight="bold"
                        borderRadius="md"
                        px={6}
                        py={3}
                        _hover={{
                          bg: 'primary.600',
                          boxShadow: 'lg',
                        }}
                        _active={{
                          bg: 'primary.700',
                        }}
                      >
                        Subscribe
                    </Button>
                </HStack>
                <Text fontWeight="400" fontSize="14px" color="#888888" lineHeight="16.8px">
                    By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                </Text>
            </Field>
          </Stack>

          {/* Right Section: Three Columns of Links */}
          <Flex
            direction={{ base: 'column', md: 'row' }}
            ml="auto" // This pushes the columns to the right
            width={{ base: '100%', md: '60%' }}
            align="flex-start"
            justify="flex-end" // Ensure items are aligned to the right
            h="full"
          >
            {/* Main Menu Links */}
            <Stack spacing={2} mr={{ base: 0, md: 8 }}>
              <Text fontWeight="bold">Main Menu</Text>
              <Link href="/" _hover={{ color: 'teal.300' }} color="#B6B6B6">Home</Link>
              <Link href="/about" _hover={{ color: 'teal.300' }} color="#B6B6B6">About</Link>
              <Link href="/services" _hover={{ color: 'teal.300' }} color="#B6B6B6">Services</Link>
              <Link href="/contact" _hover={{ color: 'teal.300' }} color="#B6B6B6">Contact</Link>
            </Stack>

            {/* Personal Links */}
            <Stack spacing={2} mr={{ base: 0, md: 8 }}>
              <Text fontWeight="bold">Personal</Text>
              <Link href="/profile" _hover={{ color: 'teal.300' }} color="#B6B6B6">My Profile</Link>
              <Link href="/orders" _hover={{ color: 'teal.300' }} color="#B6B6B6">My Orders</Link>
              <Link href="/wishlist" _hover={{ color: 'teal.300' }} color="#B6B6B6">Wishlist</Link>
            </Stack>

            {/* Socials Links */}
            <Stack spacing={2}>
              <Text fontWeight="bold">Follow Us</Text>
              <Link href="/profile" _hover={{ color: 'teal.300' }} color="#B6B6B6">Facebook</Link>
              <Link href="/orders" _hover={{ color: 'teal.300' }} color="#B6B6B6">Instagram</Link>
              <Link href="/wishlist" _hover={{ color: 'teal.300' }} color="#B6B6B6">Twitter</Link>
              <Link href="/wishlist" _hover={{ color: 'teal.300' }} color="#B6B6B6">Linked in</Link>
            </Stack>
          </Flex>
        </Flex>

        {/* Copyright Text */}
        <Box textAlign="left" pt={4} mt={4}>
          <Text fontSize="sm">
            © {new Date().getFullYear()} Nia. All rights reserved.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

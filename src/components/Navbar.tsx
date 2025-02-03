import { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Image,
  Input,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { InputGroup } from './ui/input-group';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { MdShoppingCart } from 'react-icons/md';
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
    const { onOpen, onClose } = useDisclosure();

    const [links] = useState<NavLink[]>([
        { label: 'Home', href: '/' },
        { label: 'Shop', href: '/shop' },
        { label: 'Contact Us', href: '/contact' },
    ]);


  return (
    <Box bg="white" px={4} color="white">
      <Flex h="80px" alignItems="center" justifyContent="space-between">
        {/* Logo */}
        
        <Image 
          src="/nia_logo.png" // Path from the public directory
          width={100} // Adjust width of the image
          height={100} 
        />
        {/* Search Input*/}
        <Box width="400px" height="46px">
          <InputGroup flex="1" width="400px" height="46px" ml={2}>
            <Input 
              placeholder="Search products or categories"
              height="46px"
              width="100%" 
              borderRadius="md"
              border="1px solid"  // Solid 1px border
              borderColor="gray.300" // Set the border color
              color="black"
              paddingLeft="16px"
              _focus={{
                borderColor: "gray.500", // Optional: Border color change on focus
              }}
            />
          </InputGroup>
        </Box>

        {/* Links */}
        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => (
            <Link href={link.href} key={link.label} passHref>
              <Button
                variant="ghost"
                fontFamily="'Proxima Nova Condensed', sans-serif"
                color={link.label === 'Home' ? '#D41A1F' : 'black'} // Change color for Home
              >
                {link.label}
              </Button>
            </Link>
          ))}
            {/* Sign In and Sign Up Buttons */}
        </HStack>
        <Box>
            <Button variant="ghost" fontFamily="'Proxima Nova Condensed', sans-serif" color="black" border="1px solid" onClick={onOpen}>
                Sign In
            </Button>
            <Button variant="ghost" fontFamily="'Proxima Nova Condensed', sans-serif" color="white" bg="#D41A1F">
                Sign up to Shop
            </Button>
        </Box>
        {/* Shopping Cart Icon */}
        <MdShoppingCart color='black'/>
      </Flex>
    </Box>
  );
};

export default Navbar;

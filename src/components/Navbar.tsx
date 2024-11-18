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
import Link from 'next/link';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {

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
        <Box width="400px" height="46px">
            <InputGroup flex="1" width="400px" height="46px">
                <Input 
                    placeholder="Search products or categories"
                    height="46px"
                    width="100%" 
                    borderRadius="md"
                    borderColor="gray.300"
                    color="black"
                    paddingLeft="12px"
                />
            </InputGroup>
        </Box>

        {/* Links */}
        <HStack spacing={8} alignItems="center" display={{ base: 'none', md: 'flex' }}>
          {links.map((link) => (
            <Link href={link.href} key={link.label} passHref>
              <Button variant="ghost" fontFamily="'Proxima Nova Condensed', sans-serif" color="black">
                {link.label}
              </Button>
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;

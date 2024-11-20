import { Box, VStack, Link, Text, Separator } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaTh, FaBoxOpen } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Sidebar = () => {
  return (
    <Box width="250px" bg="white" color="black" p={4} h="100vh">
      <VStack spacing={6} align="start">
        <NextLink href="/dashboard">
          <Link _hover={{ textDecor: "underline" }} fontWeight="400"> <FaTh/> Overview</Link>
        </NextLink>
        <NextLink href="/profile">
          <Link  _hover={{ textDecor: "underline" }} fontWeight="400"> <FaBoxOpen/> Orders</Link>
        </NextLink>
        <NextLink href="/settings">
          <Link  _hover={{ textDecor: "underline" }} fontWeight="400"> <IoIosPeople/> Customers</Link>
        </NextLink>

        <NextLink href="/settings">
          <Link  _hover={{ textDecor: "underline" }} fontWeight="400">Inventory</Link>
        </NextLink> 

        <Separator orientation='horizontal' />

        <NextLink href="/settings">
          <Link  _hover={{ textDecor: "underline" }} fontWeight="400">Settings</Link>
        </NextLink>

        <NextLink href="/settings">
          <Link _hover={{ textDecor: "underline" }} fontWeight="400">Log out</Link>
        </NextLink>

      </VStack>
    </Box>
  );
};

export default Sidebar;

import { Box, VStack, Link, Text, Separator } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaTh, FaBoxOpen } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Sidebar = () => {
  return (
    <Box width="250px" bg="#F6F8FF" color="black" p={4} h="100vh" >
      <VStack spacing={6} align="start">
          <Link _hover={{ textDecor: "underline" }} fontWeight="400"> <FaTh/> Overview</Link>
          <Link  _hover={{ textDecor: "underline" }} fontWeight="400"> <FaBoxOpen/> Orders</Link>
          <Link  _hover={{ textDecor: "underline" }} fontWeight="400"> <IoIosPeople/> Customers</Link>
          <Link  _hover={{ textDecor: "underline" }} fontWeight="400">Inventory</Link>
        <Separator orientation='horizontal' />
          <Link  _hover={{ textDecor: "underline" }} fontWeight="400">Settings</Link>
          <Link _hover={{ textDecor: "underline" }} fontWeight="400">Log out</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;

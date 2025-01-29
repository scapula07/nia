import React, { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../Dashboard/Sidebar"; // Assuming you have a Sidebar component


// Define the layout props type
type DashboardLayoutProps = {
  children: ReactNode; // This will be the page content that changes depending on the route
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">

      {/* Main content area */}
      <Flex flex="1" bg="#EEEFF1">
        {/* Sidebar */}
        <Box width="250px" bg="gray.100" borderRight="1px" borderColor="gray.200">
          <Sidebar />
        </Box>

        {/* Page Content */}
        <Box flex="1" p="6">
          {children} {/* This is where the page content will be rendered */}
        </Box>
      </Flex>
    </Flex>
  );
};

export default DashboardLayout;

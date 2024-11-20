import { Box, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "@/components/Dashboard/Sidebar"; // Sidebar component (optional)

const Dashboard = () => {

  // Placeholder content until user authentication is added
  return (
    <Box display="flex">
      <Sidebar />
      <Box flex="1" p={6}>
        <Text fontSize="2xl" fontWeight="bold">
          Welcome to the Dashboard!
        </Text>
        <Text mt={4}>This is your dashboard. Content will be user-specific later.</Text>

        {/* Stats Boxes */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
          {/* Stat Box 1 */}
          <GridItem>
            <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">

            </Box>
          </GridItem>

          {/* Stat Box 2 */}
          <GridItem>
            <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">

            </Box>
          </GridItem>

          {/* Stat Box 3 */}
          <GridItem>
            <Box bg="gray.100" p={4} borderRadius="md" boxShadow="sm">

            </Box>
          </GridItem>
        </Grid>

        {/* Additional Features Section */}
        <Box mt={6}>
          <Text fontWeight="bold">Dashboard Features:</Text>
          <ul>
            <li>Overview of your activities</li>
            <li>Statistics and insights (to be added)</li>
            <li>Upcoming events or tasks (to be added)</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;

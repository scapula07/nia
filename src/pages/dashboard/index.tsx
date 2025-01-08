import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "@/components/Dashboard/Sidebar";
import StatBox from "@/components/Dashboard/StatBox";
import TopProductBox from "@/components/Dashboard/TopProductBox";

const Dashboard = () => {
    const handleFilterChange = (filter: string) => {
        console.log("Filter changed to:", filter);
        // Logic for fetching or filtering data based on the selected time range
    };

    // Placeholder content until user authentication is added
    return (
        <Box display="flex" bg="#EEEFF1">
            <Sidebar />
            <Box flex="1" p={6}>
                {/* Stats Boxes */}
                <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>

                        <StatBox
                            title="Total Orders"
                            number={1245}
                            bgColor="#FBDCDD"
                        />
     
                        <StatBox
                            title="Total Customers"
                            number={1245}
                            bgColor="#D3FFE8"
                        />

                        <StatBox
                            title="Total Products"
                            number={1245}
                            bgColor="#8B58F533"
                        />

                </Grid>
                <TopProductBox />
            </Box>
        </Box>
    );
};

export default Dashboard;

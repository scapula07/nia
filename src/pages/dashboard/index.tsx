import { Box, Grid } from "@chakra-ui/react";
import DashboardLayout from "@/components/Layout/DashboardLayout";  // Import the DashboardLayout
import StatBox from "@/components/Dashboard/StatBox";
import IncomeStats from "@/components/Dashboard/IncomeStats";
import RecentOrders from "@/components/Dashboard/RecentOrders";
import TopSellingProducts from "@/components/Dashboard/TopSellingProducts";

const Dashboard = () => {
    const recentOrders = [
        { id: 101, customer: "Alice Johnson", status: "Completed", total: "$150.00" },
        { id: 102, customer: "Bob Smith", status: "Pending", total: "$300.00" },
        { id: 103, customer: "Charlie Brown", status: "Shipped", total: "$200.00" },
        { id: 104, customer: "Diana Prince", status: "Completed", total: "$400.00" },
        { id: 105, customer: "Eve Adams", status: "Cancelled", total: "$0.00" },
    ];

    return (
        <DashboardLayout> {/* Wrap the content with DashboardLayout */}
            <Box bg="#EEEFF1" flex="1" p={6}>
                {/* Stats Boxes */}
                <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
                    <StatBox title="Total Orders" number={1245} bgColor="#FBDCDD" />
                    <StatBox title="Total Customers" number={1245} bgColor="#D3FFE8" />
                    <StatBox title="Total Products" number={1245} bgColor="#8B58F533" />
                </Grid>

                {/* Income Stats and Top Selling Products Section */}
                <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6} mt={6}>
                    <IncomeStats />
                    <TopSellingProducts />
                </Grid>

                {/* Recent Orders */}
                <Box mt={6}>
                    <RecentOrders orders={recentOrders} pageSize={5} />
                </Box>
            </Box>
        </DashboardLayout> 
    );
};

export default Dashboard;

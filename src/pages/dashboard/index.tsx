import { Box, Grid, Link } from "@chakra-ui/react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import IncomeStats from "@/components/Dashboard/IncomeStats";
import RecentOrders from "@/components/Dashboard/RecentOrders";
import TopSellingProducts from "@/components/Dashboard/TopSellingProducts";
import { StatLabel, StatRoot, StatValueText } from "@/components/ui/stat";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase/config";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch total orders
                const ordersSnapshot = await getDocs(collection(db, "orders"));
                setTotalOrders(ordersSnapshot.empty ? 0 : ordersSnapshot.size);

                // Fetch total customers
                const customersSnapshot = await getDocs(collection(db, "customers"));
                setTotalCustomers(customersSnapshot.empty ? 0 : customersSnapshot.size);

                // Fetch total products
                const productsSnapshot = await getDocs(collection(db, "inventory"));
                setTotalProducts(productsSnapshot.empty ? 0 : productsSnapshot.size);
                
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };

        fetchStats();
    }, []);


    return (
        <DashboardLayout>
            <Box bg="#EEEFF1" flex="1">
                {/* Stats Boxes */}
                <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={6}>
                    {/* Total Orders */}
                    <Box
                        bg="#FBDCDD"
                        p={6}
                        borderRadius="lg"
                        height="170px"
                        width="360px"
                    >
                        <StatRoot>
                            <StatLabel pb={23} fontWeight="bold" color="#444444">
                                Total Orders
                            </StatLabel>
                            <StatValueText fontSize="40px"> {totalOrders}</StatValueText>
                        </StatRoot>
                        <Link
                            href="/dashboard/orders"
                            fontSize="18px"
                            fontWeight="600"
                            mt={23}
                            _hover={{ textDecoration: "underline" }}
                            bottom={4}
                            left={6}
                            color="#D41A1F"
                        >
                            View All Orders
                        </Link>
                    </Box>

                    {/* Total Customers */}
                    <Box
                        bg="#D3FFE8"
                        p={6}
                        borderRadius="lg"
                        height="170px"
                        width="360px"
                    >
                        <StatRoot>
                            <StatLabel pb={23} fontWeight="bold" color="#444444">
                                Total Customers
                            </StatLabel>
                            <StatValueText fontSize="40px">{totalCustomers}</StatValueText>
                        </StatRoot>
                        <Link
                            href="/dashboard/customers"
                            fontSize="18px"
                            fontWeight="600"
                            mt={23}
                            _hover={{ textDecoration: "underline" }}
                            bottom={4}
                            left={6}
                            color="#009E4D"
                        >
                            View All Customers
                        </Link>
                    </Box>

                    {/* Total Products */}
                    <Box
                        bg="#8B58F533"
                        p={6}
                        borderRadius="lg"
                        height="170px"
                        width="360px"
                    >
                        <StatRoot>
                            <StatLabel pb={23} fontWeight="bold" color="#444444">
                                Total Products
                            </StatLabel>
                            <StatValueText fontSize="40px">{totalProducts}</StatValueText>
                        </StatRoot>
                        <Link
                            href="/dashboard/inventory"
                            fontSize="18px"
                            fontWeight="600"
                            mt={23}
                            _hover={{ textDecoration: "underline" }}
                            bottom={4}
                            left={6}
                            color="#8B58F5"
                        >
                            View All Products
                        </Link>
                    </Box>
                </Grid>

                {/* Income Stats and Top Selling Products Section */}
                <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6} mt={6}>
                    <IncomeStats />
                    <TopSellingProducts />
                </Grid>

                {/* Recent Orders */}
                <Box mt={6}>
                </Box>
            </Box>
        </DashboardLayout>
    );
};

export default Dashboard;

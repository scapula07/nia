import React from "react";
import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Fresh Produce", value: 400 },
  { name: "Breads", value: 300 },
  { name: "Meats & Seafoods", value: 300 },
  { name: "Frozen Foods", value: 200 },
  { name: "Snacks", value: 150 },
  { name: "Beverages", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#36A2EB"];

const TopSellingProducts = () => {
  return (
    <Box
      bg="white"
      p={6}
      borderRadius="lg"
      maxW="lg"
      w="full"
      m="auto"
    >
      <Heading size="md" mb={4}>
        Top Selling Products
      </Heading>

      {/* Pie Chart */}
      <Box w="100%" h="315px">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              layout="horizontal"
              align="left"
              verticalAlign="bottom"
              wrapperStyle={{ marginTop: "10px", fontSize: "14px", }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

export default TopSellingProducts;

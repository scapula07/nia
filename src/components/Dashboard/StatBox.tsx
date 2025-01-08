import React from "react";
import { Box, Link, useToken } from "@chakra-ui/react";
import {
    NativeSelectField,
    NativeSelectRoot,
} from "@/components/ui/native-select";
import { StatLabel, StatRoot, StatValueText } from "@/components/ui/stat"

interface StatBoxProps {
    title: string;
    number: string | number; // Allows both string and number for flexibility
    bgColor?: string; // Optional prop to pass background color
}

const StatBox: React.FC<StatBoxProps> = ({ title, number, bgColor = "gray.100" }) => {


    return (
        <Box
            bg={bgColor} // Background color passed via prop
            p={6}
            borderRadius="lg"
            height="170px" // Provided height
            width="360px" // Provided width
        >
            {/* Title and Dropdown */}
            <StatRoot>
                <StatLabel pb={23} fontWeight="bold" color="#444444">{title}</StatLabel>
                <StatValueText fontSize="40px">{number}</StatValueText>
            </StatRoot>

            {/* View All Orders */}
            <Link
                href="#"
                fontSize="18px" 
                fontWeight="600"
                mt={23}
                _hover={{ textDecoration: "underline" }}
                bottom={4}
                left={6}
            >
                View All Orders

            </Link>
        </Box>
    );
};

export default StatBox;

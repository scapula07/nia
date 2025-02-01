"use client"; // This directive is used in Next.js to indicate that this component is client-side rendered.

import { Heading, Input, Button, Flex } from "@chakra-ui/react";
import DashboardLayout from "@/components/Layout/DashboardLayout";

const UploadCSV = () => {
    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Logic to handle CSV upload goes here
            console.log("CSV file selected:", file.name);
        }
    };

    return (
        <DashboardLayout>
            <Flex direction="column" align="center" justify="center" mb={8}>
                <Heading mb={4}>Upload CSV File</Heading>
                
                <Input 
                    type="file" 
                    accept=".csv"
                    onChange={handleFileUpload}
                    mb={4}
                    size="lg"
                />
                
                <Button bg="#D41A1F" color="white" width="200px">
                    Upload CSV
                </Button>
            </Flex>
        </DashboardLayout>
    );
};

export default UploadCSV;

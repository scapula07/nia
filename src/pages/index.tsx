import localFont from "next/font/local";
import { Box } from "@chakra-ui/react";
import { HeroSection } from "@/components/HeroSection";
import ShopSection from "@/components/Section";
import StatsSection from "@/components/StatsSection";
import CategoriesSection from "@/components/CategoriesSection";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
    return (
        <Box bg="gray.50">
            <HeroSection />
            <StatsSection />
            <ShopSection />
            <CategoriesSection /> 
        </Box>

      );
    }
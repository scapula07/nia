import localFont from "next/font/local";
import { Box } from "@chakra-ui/react";
import { HeroSection } from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import StatsSection from "@/components/StatsSection";
import CategoriesSection from "@/components/CategoriesSection";
import FAQSection from "@/components/FAQSection";
import FeatureSection from "@/components/FeatureSection";
import ValueSection from "@/components/ValueSection";




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
        <Box bg="white">
            <HeroSection />
            <StatsSection />
            <WelcomeSection />
            <FeatureSection />
            <CategoriesSection /> 
            <ValueSection />
            <FAQSection />
        </Box>

      );
    }
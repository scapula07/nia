import localFont from "next/font/local";
import { Box } from "@chakra-ui/react";
import { HeroSection } from "@/components/Landing/HeroSection";
import WelcomeSection from "@/components/Landing/WelcomeSection";
import StatsSection from "@/components/Landing/StatsSection";
import CategoriesSection from "@/components/Landing/CategoriesSection";
import FAQSection from "@/components/Landing/FaqSection";
import FeatureSection from "@/components/Landing/FeatureSection";
import ValueSection from "@/components/Landing/ValueSection";
import FeaturedProducts from "@/components/Landing/FeaturedProducts";


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
        <Box bg="#FAFAFA">
            <HeroSection />
            <WelcomeSection />
            <CategoriesSection />
            <FeaturedProducts /> 
            <FAQSection />
        </Box>

      );
    }
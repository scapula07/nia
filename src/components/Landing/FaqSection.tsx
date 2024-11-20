import {
    AccordionRoot,
    AccordionItem,
    AccordionItemTrigger,
    AccordionItemContent,
  } from "@/components/ui/accordion";
  import { Box, Container, Stack, Text, Button } from "@chakra-ui/react";
  
  const FAQSection = () => {
    return (
      <Box p={64} color="black">
        <Container maxW="container.xl">
          {/* Tagline and Subtitle */}
          <Stack spacing={4} textAlign="center" mb={12}>
            <Text fontSize="48px" fontWeight="bold" color="black">
              Your Questions Answered
            </Text>
            <Text fontSize="lg" color="gray.600">
              Discover Our Commitment
            </Text>
          </Stack>
  
          {/* Accordion */}
          <AccordionRoot collapsible defaultValue={["b"]}>
            {/* FAQ Item 1 */}
            <Box
              border="1px solid #E2E8F0" // Light gray border
              borderRadius="8px"
              p={4} // Add padding inside the border
              mb={4} // Add spacing between items
            >
              <AccordionItem value="item1">
                <AccordionItemTrigger color="black">
                  What types of food do you offer?
                </AccordionItemTrigger>
                <AccordionItemContent>
                Nia offers a complete selection of fresh meats, produce, dairy, pantry staples, and frozen foods to nourish your family. From farm-fresh fruits and vegetables to quality cuts of meat, nutritious grains, and everyday essentials, we're your one-stop shop for all your grocery needs.
                </AccordionItemContent>
              </AccordionItem>
            </Box>
  
            {/* FAQ Item 2 */}
            <Box
              border="1px solid #E2E8F0"
              borderRadius="8px"
              p={4}
              mb={4}
            >
              <AccordionItem value="item2">
                <AccordionItemTrigger>How do you ensure food quality?</AccordionItemTrigger>
                <AccordionItemContent>
                  We prioritize quality by partnering with trusted local farmers and suppliers who adhere to stringent safety and freshness standards. Regular inspections and customer feedback help us maintain our high quality.
                </AccordionItemContent>
              </AccordionItem>
            </Box>
  
            {/* FAQ Item 3 */}
            <Box
              border="1px solid #E2E8F0"
              borderRadius="8px"
              p={4}
              mb={4}
            >
              <AccordionItem value="item3">
                <AccordionItemTrigger>Can I order online?</AccordionItemTrigger>
                <AccordionItemContent>
                  Absolutely! Our user-friendly website allows you to browse our extensive catalog and place orders conveniently from your home. We offer delivery options to ensure everyone can access healthy food easily.
                </AccordionItemContent>
              </AccordionItem>
            </Box>
  
            {/* FAQ Item 4 */}
            <Box
              border="1px solid #E2E8F0"
              borderRadius="8px"
              p={4}
              mb={4}
            >
              <AccordionItem value="item4">
                <AccordionItemTrigger>What areas do you serve?</AccordionItemTrigger>
                <AccordionItemContent>
                  Our services extend to various food deserts across America. We aim to reach underserved communities to provide access to fresh and nutritious food options.
                </AccordionItemContent>
              </AccordionItem>
            </Box>
  
            {/* FAQ Item 5 */}
            <Box
              border="1px solid #E2E8F0"
              borderRadius="8px"
              p={4}
              mb={4}
            >
              <AccordionItem value="item5">
                <AccordionItemTrigger>How can I get involved?</AccordionItemTrigger>
                <AccordionItemContent>
                  You can support our mission by spreading the word, volunteering, or making a donation. Every effort contributes to providing healthy food options to those in need.
                </AccordionItemContent>
              </AccordionItem>
            </Box>
  
            {/* FAQ Item 6 */}
            <Box
              border="1px solid #E2E8F0"
              borderRadius="8px"
              p={4}
              mb={4}
            >
              <AccordionItem value="item6">
                <AccordionItemTrigger>Do you offer discounts for low-income communities?</AccordionItemTrigger>
                <AccordionItemContent>
                  Yes, we offer special discounts and programs for low-income communities to ensure that everyone has access to nutritious food, regardless of their financial situation.
                </AccordionItemContent>
              </AccordionItem>
            </Box>
          </AccordionRoot>
        </Container>
      </Box>
    );
  };
  
  export default FAQSection;
  
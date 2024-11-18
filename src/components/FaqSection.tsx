import { Box, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Text } from '@chakra-ui/react';

const FaqSection = () => {
  return (
    <Box p={8} bg="gray.100" borderRadius="md" boxShadow="lg">
      <Heading as="h2" size="xl" mb={6} textAlign="center" fontWeight="bold">
        Frequently Asked Questions
      </Heading>

      <Accordion allowToggle>
        {/* FAQ Item 1 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="lg" fontWeight="bold">
                  What is your return policy?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our return policy allows you to return products within 30 days of purchase. Items must be in their original condition, and a receipt is required for returns.
          </AccordionPanel>
        </AccordionItem>

        {/* FAQ Item 2 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="lg" fontWeight="bold">
                  How long does shipping take?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Shipping times vary depending on your location, but generally, we process orders within 2-3 business days, and shipping takes 5-7 days after that.
          </AccordionPanel>
        </AccordionItem>

        {/* FAQ Item 3 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="lg" fontWeight="bold">
                  Do you offer international shipping?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, we offer international shipping to several countries. Shipping rates and times will vary based on your location.
          </AccordionPanel>
        </AccordionItem>

        {/* FAQ Item 4 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="lg" fontWeight="bold">
                  Can I modify my order after placing it?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Once your order is placed, we are unable to make changes. However, you can cancel it within 30 minutes of placing the order, and then place a new order with the correct details.
          </AccordionPanel>
        </AccordionItem>

        {/* FAQ Item 5 */}
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Text fontSize="lg" fontWeight="bold">
                  How can I contact customer support?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            You can reach our customer support team via email at support@example.com, or by calling our toll-free number at 1-800-123-4567.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FaqSection;

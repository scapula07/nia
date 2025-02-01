import { Box, Grid, Image, Text, Heading, Flex } from '@chakra-ui/react';

const CategoriesSection = () => {
  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      <Box p={16}>
        <Heading 
          as="h1" 
          fontSize="48px"  
          color="black" 
          fontWeight="700" 
          lineHeight="57.6px" 
          textAlign="center"
          p={12}>
          Discover Food, Drink and More
        </Heading>

        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box>
            <Image
              src="/categories/cat1.jpeg"  // Path to your image
              alt="Category 1"
              borderRadius="md"
              mb={4}
              objectFit="cover"
              width="341.33px"   
              height="322px"     
            />
            <Text fontWeight="700"color="black">Fresh Groceries and Vegetables</Text>
            <Text color="black" fontWeight="400" >Fresh and Locally Sourced</Text>
          </Box>
          
          <Box>
            <Image
              src="/categories/cat2.jpeg"  
              alt="Category 2"
              borderRadius="md"
              mb={4}
              objectFit="cover"
              width="341.33px"
              height="322px"
            />
            <Text fontWeight="700"color="black">Whole Grains and Breads</Text>
            <Text color="black" fontWeight="400" >Nutritious and Filling Options</Text>
          </Box>

          <Box>
            <Image
              src="/categories/cat3.jpeg"  
              alt="Category 3"
              borderRadius="md"
              mb={4}
              objectFit="cover"
              width="341.33px"
              height="322px"
            />
            <Text fontWeight="700"color="black">Canned Goods and Soups</Text>
            <Text color="black" fontWeight="400" >Convenient and Reliable Meals</Text>
          </Box>

          <Box>
            <Image
              src="/categories/cat4.jpeg"  
              alt="Category 4"
              borderRadius="md"
              mb={4}
              objectFit="cover"
              width="341.33px"
              height="322px"
            />
            <Text fontWeight="700"color="black">Meats and Proteins</Text>
            <Text color="black" fontWeight="400" >Quality Sources of Protein</Text>
          </Box>

          <Box>
            <Image
              src="/categories/cat5.jpeg"  
              alt="Category 5"
              borderRadius="md"
              mb={4}
              objectFit="cover"
              width="341.33px"
              height="322px"
            />
            <Text fontWeight="700"color="black">Dairy Products</Text>
            <Text color="black" fontWeight="400" >Essential for Balanced Diet</Text>
          </Box>

          <Box>
            <Image
              src="/categories/cat6.jpeg"  
              alt="Category 6"
              borderRadius="md"
              mb={4}
              objectFit="cover"
              width="341.33px"
              height="322px"
            />
            <Text fontWeight="700"color="black">Snacks and Treats</Text>
            <Text color="black" fontWeight="400" >Satisfying Your Cravings</Text>
          </Box>
        </Grid>
      </Box>
    </Flex>
  );
};

export default CategoriesSection;

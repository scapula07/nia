import { Box, Container, Heading, Text, Grid, Flex, Link, Icon } from "@chakra-ui/react";
import { MdArrowForward } from "react-icons/md"; // Import the right arrow icon
import ProductCard from "./ProductCard"; // Import the ProductCard component

const FeaturedProducts = () => {
  // Sample product data
  const products = [
    {
      image: "./p1.png", // Add actual image path
      title: "Gallon of Fresh Milk",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Gallon of Fresh Milk to Cart"),
    },
    {
      image: "./p2.png", // Add actual image path
      title: "Crate of Fresh Eggs",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Crate of Fresh Eggs to Cart"),
    },
    {
      image: "./p3.png", // Add actual image path
      title: "Galbani Italian Mozzarella Cheese",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Galbani Italian Mozzarella Cheese to Cart"),
    },
    {
      image: "./p4.png", // Add actual image path
      title: "Siggi's Whole Milk Drinkable Yogurt",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Siggi's Whole Milk Drinkable Yogurt to Cart"),
    },
    {
      image: "./p5.png", // Add actual image path
      title: "Organic Valley Organic Whole Milk",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Organic Valley Organic Whole Milk to Cart"),
    },
    {
      image: "./p6.png", // Add actual image path
      title: "Lala Shelf Stable Whole Milk",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Lala Shelf Stable Whole Milk to Cart"),
    },
  ];

  return (
    <Box py={16} px={16} color="black">
      <Container maxW="container.xl">
        {/* Subheader */}
        <Heading fontSize="56px" fontWeight="700" lineHeight="67.2px" mb={6} textAlign="center">
          Featured Products
        </Heading>
        <Text fontSize="25.4px" lineHeight="30.48px" fontWeight="400" textAlign="center" mb={6}>
          Visit our shop for more amazing deals.
        </Text>

        {/* Navigation Links */}
        <Flex justify="center" mb={10} gap={4}>
          <Link
            fontSize="16px"
            fontWeight="600"
            _hover={{ color: "#009E4D"  }}
            href="#"
          >
            Groceries and Vegetables
          </Link>
          <Link
            fontSize="16px"
            fontWeight="600"
            _hover={{ color: "#009E4D" }}
            href="#"
          >
            Grains and Breads
          </Link>
          <Link
            fontSize="16px"
            fontWeight="600"
            _hover={{ color: "#009E4D"  }}
            href="#"
          >
            Canned Products
          </Link>
          <Link
            fontSize="16px"
            fontWeight="600"
            _hover={{ color: "#009E4D"  }}
            href="#"
          >
            Meats and Proteins
          </Link>
          <Link
            fontSize="16px"
            fontWeight="600"
            _hover={{ color: "#009E4D"  }}
            href="#"
          >
            Dairy Products
          </Link>
          <Link
            fontSize="16px"
            fontWeight="600"
            _hover={{ color: "#009E4D" }}
            href="#"
          >
            Snacks and Treats
          </Link>
        </Flex>

        {/* Grid Layout for Featured Products */}
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              discount={product.discount}
              onAddToCart={product.onAddToCart}
            />
          ))}
        </Grid>

        {/* Go to Shop Link */}
        <Flex justify="center" mt={6}>
          <Link
            fontSize="18px"
            fontWeight="600"
            color="green.500"
            _hover={{ color: "#009E4D" }}
            href="#"
            display="flex"
            alignItems="center"
            textDecoration="underline"
          >
            Go to Shop <MdArrowForward/>
            
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;

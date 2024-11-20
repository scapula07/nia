import { Box, Container, Heading, Text, Grid } from "@chakra-ui/react";
import ProductCard from "./ProductCard"; // Import the ProductCard component

const FeaturedProducts = () => {
  // Sample product data
  const products = [
    {
      image: "./images/gallon_of_fresh_milk.jpg", // Add actual image path
      title: "Gallon of Fresh Milk",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Gallon of Fresh Milk to Cart"),
    },
    {
      image: "./images/crate_of_fresh_eggs.jpg", // Add actual image path
      title: "Crate of Fresh Eggs",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Crate of Fresh Eggs to Cart"),
    },
    {
      image: "./images/galbani_mozzarella_cheese.jpg", // Add actual image path
      title: "Galbani Italian Mozzarella Cheese",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Galbani Italian Mozzarella Cheese to Cart"),
    },
    {
      image: "./images/siggis_yogurt.jpg", // Add actual image path
      title: "Siggi's Whole Milk Drinkable Yogurt",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Siggi's Whole Milk Drinkable Yogurt to Cart"),
    },
    {
      image: "./images/organic_valley_milk.jpg", // Add actual image path
      title: "Organic Valley Organic Whole Milk",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Organic Valley Organic Whole Milk to Cart"),
    },
    {
      image: "./images/lala_shelf_stable_milk.jpg", // Add actual image path
      title: "Lala Shelf Stable Whole Milk",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Lala Shelf Stable Whole Milk to Cart"),
    },
    {
      image: "./images/siggis_yogurt.jpg", // Add actual image path
      title: "Siggi's Whole Milk Drinkable Yogurt",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Siggi's Whole Milk Drinkable Yogurt to Cart"),
    },
    {
      image: "./images/organic_valley_milk.jpg", // Add actual image path
      title: "Organic Valley Organic Whole Milk",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Organic Valley Organic Whole Milk to Cart"),
    },
    {
      image: "./images/lala_shelf_stable_milk.jpg", // Add actual image path
      title: "Lala Shelf Stable Whole Milk",
      price: "$14.99",
      discount: "-15%",
      onAddToCart: () => console.log("Added Lala Shelf Stable Whole Milk to Cart"),
    },
  ];

  return (
    <Box bg="gray.50" py={16} color="black">
      <Container maxW="container.xl">
        <Heading fontSize="56px" fontWeight="700" lineHeight="67.2px" mb={6} textAlign="center">
          Featured Products
        </Heading>
        <Text fontSize="25.4px" lineHeight="30.48px" fontWeight="400" textAlign="center" mb={10}>
          Visit our shop for more amazing deals.
        </Text>

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
      </Container>
    </Box>
  );
};

export default FeaturedProducts;

import { Box, Image, Text, Button } from "@chakra-ui/react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  discount: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, discount, onAddToCart }) => {
  return (
    <Box
      border="1px solid #E2E8F0"
      borderRadius="8px"
      p={6}
      bg="white"
      textAlign="center"
      position="relative"
    >
      <Image
        src={image}
        alt={title}
        borderRadius="8px"
        mb={4}
        w="100%"
        h="auto"
      />
      {discount && (
        <Text position="absolute" top="10px" left="10px" bg="red.500" color="white" px={2} py={1}>
          {discount}
        </Text>
      )}
      <Text fontSize="xl" fontWeight="600">{title}</Text>
      <Text fontSize="lg" color="gray.600">{price}</Text>
      <Button mt={4} colorScheme="red" variant="solid" onClick={onAddToCart}>
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;

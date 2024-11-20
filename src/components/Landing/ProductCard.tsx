import { Box, Image, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";

interface ProductCardProps {
    image: string;
    title: string;
    price: string;
    discount: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, discount, onAddToCart }) => {
    return (
        <Flex
            p={6}
            textAlign="center"
            position="relative"
            direction="column"
            justify="space-between"
            height="100%"
        >
            <Box position="relative">
                <Image
                    src={image}
                    alt={title}
                    borderRadius="8px"
                    mb={4}
                    w="100%"
                    h="auto"
                />
                {/* Heart Icon positioned at the top-left corner of the image */}
                <Box
                position="absolute"
                top="10px"
                left="10px"
                bg="white"
                borderRadius="full"
                p="6px"
                cursor="pointer"
                >
                    <MdFavoriteBorder/>
                </Box>
                {discount && (
                    <Text
                        position="absolute"
                        top="10px"
                        right="10px"
                        bg="#FAFAFA"
                        color="#009E4D"
                        px={2}
                        py={1}
                        borderRadius="4px"
                        fontWeight="700"
                        fontSize="14px"
                    >
                        {discount}
                    </Text>
                )}
            </Box>
            {/* Title with Left Alignment and Styling */}
            <Text
                fontFamily="Proxima Nova Condensed"
                fontSize="24px"
                fontWeight="600"
                lineHeight="28.8px"
                textAlign="left"
                textUnderlinePosition="from-font"
                textDecorationSkipInk="none"
                mb={2}
            >
                {title}
            </Text>
            {/* Price with Left Alignment and Styling */}
            <Text
                fontFamily="Proxima Nova Condensed"
                fontSize="32px"
                fontWeight="700"
                lineHeight="38.4px"
                textAlign="left"
                textUnderlinePosition="from-font"
                textDecorationSkipInk="none"
                mb={4}
            >
                {price}
            </Text>
            <Button
                mt="auto"
                colorScheme="green"
                color="white"
                variant="solid"
                onClick={onAddToCart}
                bg="#009E4D"
                width="100%"
            >
                <MdOutlineShoppingCart /> Add to Cart
            </Button>
        </Flex>
    );
};

export default ProductCard;

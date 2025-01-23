import { Button } from "@chakra-ui/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";

const ShopButton: React.FC = () => {
  return (
    <Link href={"/shop"}>
        <Button
          variant="solid"
          color="white"
          size="lg"
          bg="#009E4D"
          _hover={{
            bg: "#007A3D",
          }}
          width="168px"
          height="50px"
          fontSize="18px"
          fontWeight="400"
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontFamily="Proxima Nova Condensed, sans-serif"
          lineHeight="33"
          borderRadius="10px"
          paddingTop="8px"
          paddingRight="16px"
          paddingBottom="8px"
          paddingLeft="16px"
          gap="8px"
        >
          Shop now <MdOutlineShoppingCart />
        </Button>
    </Link>
  );
};

export default ShopButton;

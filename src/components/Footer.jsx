import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="blue.600" color="white" py={4} mt={8}>
      <Flex justify="space-between" align="center" px={4}>
        <Text>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</Text>
        <Flex>
          <Link href="#" mx={2}>
            <FaFacebook />
          </Link>
          <Link href="#" mx={2}>
            <FaTwitter />
          </Link>
          <Link href="#" mx={2}>
            <FaInstagram />
          </Link>
        </Flex>
      </Flex>
      <Flex justify="center" mt={2}>
        <Link href="#" mx={2}>
          Privacy Policy
        </Link>
        <Link href="#" mx={2}>
          Terms of Service
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
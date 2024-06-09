import { Box, Flex, Link, Spacer, Text, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";


const Navbar = ({ setSearchQuery }) => {
  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Box bg="blue.600" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          E-Shop
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" px={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/products" px={2}>
            Products
          </Link>
          <Link as={RouterLink} to="/about" px={2}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" px={2}>
            Contact Us
          </Link>
          <InputGroup maxW="400px" mx={4}>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search products"
              onChange={handleSearchChange}
              bg="white"
              color="black"
            />
          </InputGroup>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
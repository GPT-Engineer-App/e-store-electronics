import { Box, Button, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="section" mb={8}>
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">
            Welcome to E-Shop
          </Heading>
          <Text fontSize="lg">Your one-stop shop for all electronics</Text>
          <Button as={RouterLink} to="/products" colorScheme="blue" size="lg">
            Shop Now
          </Button>
        </VStack>
      </Box>
      <Box as="section" mb={8}>
        <Heading as="h2" size="xl" mb={4}>
          Featured Product
        </Heading>
        <Box display="flex" justifyContent="center">
          <Image src="/images/featured-product.jpg" alt="Featured Product" boxSize="300px" objectFit="cover" />
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
import { Box, Button, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Products = () => {
  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Products
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
        {sampleProducts.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mb={4} />
            <VStack spacing={2}>
              <Text fontSize="lg" fontWeight="bold">
                {product.name}
              </Text>
              <Text>{product.price}</Text>
              <Button colorScheme="blue">Add to Cart</Button>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
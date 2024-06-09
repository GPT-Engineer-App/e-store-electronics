import { useState } from "react";
import { Box, Button, Grid, Heading, Image, Text, VStack, Checkbox, CheckboxGroup, Stack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Select } from "@chakra-ui/react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 699, image: "/images/smartphone.jpg", category: "Electronics", brand: "Brand A", rating: 4 },
  { id: 2, name: "Laptop", price: 999, image: "/images/laptop.jpg", category: "Electronics", brand: "Brand B", rating: 5 },
  { id: 3, name: "Headphones", price: 199, image: "/images/headphones.jpg", category: "Accessories", brand: "Brand A", rating: 3 },
];

const Products = ({ searchQuery }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleCategoryChange = (categories) => setSelectedCategories(categories);
  const handleBrandChange = (brands) => setSelectedBrands(brands);
  const handlePriceChange = (value) => setPriceRange(value);
  const handleRatingChange = (event) => setSelectedRating(parseInt(event.target.value));

  const filteredProducts = sampleProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      product.price >= priceRange[0] && product.price <= priceRange[1] &&
      product.rating >= selectedRating
    );
  });

  return (
    <Box p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Products
      </Heading>
      <Box display="flex" flexDirection={{ base: "column", md: "row" }}>
        <Box flex="1" maxW={{ base: "100%", md: "250px" }} mb={{ base: 4, md: 0 }} mr={{ md: 4 }}>
          <Heading as="h3" size="md" mb={2}>Filter By</Heading>
          <Box mb={4}>
            <Text fontWeight="bold">Category</Text>
            <CheckboxGroup onChange={handleCategoryChange}>
              <Stack>
                <Checkbox value="Electronics">Electronics</Checkbox>
                <Checkbox value="Accessories">Accessories</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Brand</Text>
            <CheckboxGroup onChange={handleBrandChange}>
              <Stack>
                <Checkbox value="Brand A">Brand A</Checkbox>
                <Checkbox value="Brand B">Brand B</Checkbox>
              </Stack>
            </CheckboxGroup>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Price Range</Text>
            <Slider
              min={0}
              max={1000}
              step={50}
              defaultValue={[0, 1000]}
              onChangeEnd={handlePriceChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} index={0} />
              <SliderThumb boxSize={6} index={1} />
            </Slider>
            <Text>{`$${priceRange[0]} - $${priceRange[1]}`}</Text>
          </Box>
          <Box mb={4}>
            <Text fontWeight="bold">Rating</Text>
            <Select onChange={handleRatingChange} placeholder="Select rating">
              <option value="1">1 star & up</option>
              <option value="2">2 stars & up</option>
              <option value="3">3 stars & up</option>
              <option value="4">4 stars & up</option>
              <option value="5">5 stars</option>
            </Select>
          </Box>
        </Box>
        <Box flex="3">
          <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
            {filteredProducts.map((product) => (
              <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mb={4} />
                <VStack spacing={2}>
                  <Text fontSize="lg" fontWeight="bold">
                    {product.name}
                  </Text>
                  <Text>{`$${product.price}`}</Text>
                  <Text>{`Rating: ${product.rating} stars`}</Text>
                  <Button colorScheme="blue">Add to Cart</Button>
                </VStack>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
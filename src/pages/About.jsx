import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Heading as="h2" size="xl" mb={4}>
        About Us
      </Heading>
      <Text fontSize="lg">
        Welcome to E-Shop, your number one source for all things electronics. We're dedicated to giving you the very best of gadgets, with a focus on quality, customer service, and uniqueness.
      </Text>
    </Container>
  );
};

export default About;
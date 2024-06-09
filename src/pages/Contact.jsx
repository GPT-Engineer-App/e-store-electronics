import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" p={4}>
      <Heading as="h2" size="xl" mb={4}>
        Contact Us
      </Heading>
      <Text fontSize="lg">
        If you have any questions or comments, please don't hesitate to contact us at support@eshop.com.
      </Text>
    </Container>
  );
};

export default Contact;
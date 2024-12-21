"use client";
import { Box, Text, Heading } from "@chakra-ui/react";

export default function BookContent({ book }) {
  return (
    <Box p={6}>
      <Heading as="h1" size="xl" color="gray.800" mb={6}>
        {book}
      </Heading>
      <Text fontSize="lg" color="gray.600">
        La página está en construcción pero{" "}
        <span style={{ fontWeight: "bold" }}>
          aquí se mostrará el contenido detallado del libro {book}.
        </span>
      </Text>
    </Box>
  );
}

"use client";
import { Box, Text, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function BookPage({ params }) {
  const [bookId, setBookId] = useState("");

  useEffect(() => {
    async function resolveParams() {
      const resolvedParams = await params;
      setBookId(decodeURIComponent(resolvedParams.bookId)); // Decodificar el bookId
    }
    resolveParams();
  }, [params]);

  return (
    <Box>
      <Heading as="h2" size="lg" color="gray.800">
        {bookId || "Cargando..."}
      </Heading>
      <Text mt={4} color="gray.600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </Text>
    </Box>
  );
}

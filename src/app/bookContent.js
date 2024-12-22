"use client";
import { Box, Text, Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic";

export default function BookContent({ book }) {
  // Mapear los nombres de los libros a sus respectivos componentes dinámicos
  const bookComponents = {
    "Génesis": dynamic(() => import("./books/book_genesis"), {
      ssr: false,
    })
    // Agregar aquí más libros a medida que se crean sus componentes
  };

  // Obtener el componente específico del libro seleccionado
  const SelectedBookComponent = bookComponents[book];

  return (
    <Box >
      {SelectedBookComponent ? (
        <SelectedBookComponent /> // Renderizar componente específico si existe
      ) : (
        <Text fontSize="lg" color="gray.600">
          La página está en construcción pero{" "}
          <span style={{ fontWeight: "bold" }}>
            aquí se mostrará el contenido detallado del libro {book}.
          </span>
        </Text>
      )}
    </Box>
  );
}

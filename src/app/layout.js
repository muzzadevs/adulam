"use client";
import {
  ChakraProvider,
  extendTheme,
  Box,
  Flex,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./sidebar"; // Sidebar con enlaces a libros
import Page from "./page"; // Vista inicial
import BookContent from "./bookContent"; // Vista de contenido de libros
import "@fontsource/metamorphous";
import "@fontsource/montserrat";
import "./globals.css";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
    custom: "Metamorphous",
  },
});

export default function RootLayout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentView, setCurrentView] = useState("Page"); // Maneja la vista actual
  const [selectedBook, setSelectedBook] = useState(null); // Maneja el libro seleccionado

  // Función para mostrar la vista inicial
  const resetApp = () => {
    setCurrentView("Page");
    setSelectedBook(null);
  };

  // Función para mostrar el contenido del libro
  const handleBookSelection = (book) => {
    setCurrentView("BookContent");
    setSelectedBook(book);
    onClose(); // Cierra el Drawer al final
  };

  // Renderiza la vista actual
  const renderContent = () => {
    if (currentView === "Page") {
      return <Page />;
    }
    if (currentView === "BookContent") {
      return <BookContent book={selectedBook} />;
    }
    return null;
  };

  return (
    <html lang="en">
      <head>
        <title>Adulam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/iconAdulam.ico" />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <Flex direction="column" height="100vh">
            {/* Navbar */}
            <Box
              as="header"
              bg="gray.800"
              color="white"
              p={4}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontSize="2xl"
              fontWeight="bold"
              cursor="pointer"
              onClick={resetApp} // Reinicia la vista al hacer clic
            >
              <Box as="span" fontFamily={theme.fonts.custom}>
                A D U L A M
              </Box>
              <Button
                aria-label="Abrir menú"
                onClick={onOpen}
                bg="gray.800"
                color="white"
                _hover={{ bg: "gray.700" }}
                p={2}
                borderRadius="md"
                display={{ base: "block", lg: "none" }}
              >
                <FiMenu size="1.5rem" />
              </Button>
            </Box>

            {/* Drawer para dispositivos móviles */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontFamily={theme.fonts.custom}>A D U L A M</DrawerHeader>
                <DrawerBody>
                  <Sidebar onSelectBook={handleBookSelection} />
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            {/* Layout principal */}
            <Flex flex="1" overflow="hidden">
              {/* Sidebar para pantallas grandes */}
              <Box
                as="aside"
                w="250px"
                bg="gray.200"
                p={4}
                overflowY="auto"
                height="100vh"
                display={{ base: "none", lg: "block" }}
              >
                <Sidebar onSelectBook={handleBookSelection} />
              </Box>
              {/* Contenido principal */}
              <Box flex="1" overflowY="auto" p={6}>
                {renderContent()}
              </Box>
            </Flex>
          </Flex>
        </ChakraProvider>
      </body>
    </html>
  );
}

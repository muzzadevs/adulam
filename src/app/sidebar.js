"use client";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const oldTestamentBooks = [
  "Génesis", "Éxodo", "Levítico", "Números", "Deuteronomio",
  "Josué", "Jueces", "Rut", "1 Samuel", "2 Samuel", 
  "1 Reyes", "2 Reyes", "1 Crónicas", "2 Crónicas", 
  "Esdras", "Nehemías", "Ester", "Job", "Salmos", 
  "Proverbios", "Eclesiastés", "Cantares", "Isaías", 
  "Jeremías", "Lamentaciones", "Ezequiel", "Daniel", 
  "Oseas", "Joel", "Amós", "Abdías", "Jonás", "Miqueas", 
  "Nahúm", "Habacuc", "Sofonías", "Hageo", "Zacarías", 
  "Malaquías"
];

const newTestamentBooks = [
  "Mateo", "Marcos", "Lucas", "Juan", "Hechos", 
  "Romanos", "1 Corintios", "2 Corintios", "Gálatas", 
  "Efesios", "Filipenses", "Colosenses", 
  "1 Tesalonicenses", "2 Tesalonicenses", 
  "1 Timoteo", "2 Timoteo", "Tito", "Filemón", 
  "Hebreos", "Santiago", "1 Pedro", "2 Pedro", 
  "1 Juan", "2 Juan", "3 Juan", "Judas", "Apocalipsis"
];

export default function Sidebar({ onSelectBook }) {
  return (
    <Accordion allowMultiple defaultIndex={[0]} w="100%">
      {/* Acordeón Antiguo Testamento */}
      <AccordionItem mb={4} borderRadius="md" overflow="hidden">
        <h2>
          <AccordionButton _hover={{ bg: "gray.600" }} bg="gray.700" color="white" borderRadius="md">
            <Box flex="1" textAlign="left" fontWeight="bold">
              Antiguo Testamento
            </Box>
            <AccordionIcon color="white" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box>
            {oldTestamentBooks.map((book) => (
              <Text
                key={book}
                as="span"
                display="block"
                p={2}
                bg="transparent"
                cursor="pointer"
                _hover={{ bg: "rgba(134, 154, 184)", color: "white" }}
                transition="background 0.2s ease"
                borderRadius="md"
                onClick={() => onSelectBook(book)} // Llama a la función al seleccionar un libro
              >
                {book}
              </Text>
            ))}
          </Box>
        </AccordionPanel>
      </AccordionItem>

      {/* Acordeón Nuevo Testamento */}
      <AccordionItem borderRadius="md" overflow="hidden">
        <h2>
          <AccordionButton _hover={{ bg: "gray.600" }} bg="gray.700" color="white" borderRadius="md">
            <Box flex="1" textAlign="left" fontWeight="bold">
              Nuevo Testamento
            </Box>
            <AccordionIcon color="white" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Box>
            {newTestamentBooks.map((book) => (
              <Text
                key={book}
                as="span"
                display="block"
                p={2}
                bg="transparent"
                cursor="pointer"
                _hover={{ bg: "rgba(134, 154, 184)", color: "white" }}
                transition="background 0.2s ease"
                borderRadius="md"
                onClick={() => onSelectBook(book)} // Llama a la función al seleccionar un libro
              >
                {book}
              </Text>
            ))}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

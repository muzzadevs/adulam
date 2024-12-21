"use client";
import { Box, Text, Heading, VStack } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box
      height="100%"
      overflowY="auto" // Permite el scroll en el contenedor principal
      p={6}
    >
      {/* Encabezado */}
      <Heading as="h1" size="xl" color="gray.800" mb={6}>
        Bienvenidos a la Cueva de Adulam
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={8}>
        Selecciona un libro del menú lateral para explorar su contenido, pero antes, si no conoces el método indutivo, lee el siguiente "tutorial":
      </Text>

      {/* Tutorial: Método Inductivo */}
      <Box bg="gray.50" borderRadius="lg" p={6} shadow="md">
        <Heading as="h2" size="lg" color="gray.700" mb={4}>
          Método de estudio bíblico inductivo
        </Heading>
        <Text fontSize="md" color="gray.700" mb={4}>
          El método inductivo es una herramienta rigurosa diseñada para examinar las Escrituras en profundidad, permitiendo comprenderlas desde su contexto original y aplicarlas de manera relevante en nuestra vida. Este enfoque consta de tres etapas esenciales: Observación, Interpretación y Aplicación.
        </Text>

        <VStack align="start" spacing={6}>
          {/* Observación */}
          <Box>
            <Heading as="h3" size="md" color="gray.800" mb={2}>
              1. Observación: ¿Qué dice el texto?
            </Heading>
            <Text fontSize="md" color="gray.600" lineHeight="tall" mb={4}>
              La observación es el proceso de examinar el texto para identificar lo que está explícitamente escrito. Esto implica interrogar el pasaje utilizando preguntas como:
            </Text>
            <VStack align="start" spacing={2} pl={4}>
              <Text fontSize="md" color="gray.600">
                - ¿Quiénes son los personajes principales?
              </Text>
              <Text fontSize="md" color="gray.600">
                - ¿Qué eventos o ideas se presentan?
              </Text>
              <Text fontSize="md" color="gray.600">
                - ¿Dónde y cuándo ocurre la acción?
              </Text>
              <Text fontSize="md" color="gray.600">
                - ¿Por qué se menciona este tema en este contexto?
              </Text>
              <Text fontSize="md" color="gray.600">
                - ¿Cómo interactúan los elementos del pasaje entre sí?
              </Text>
            </VStack>
            <Text fontSize="md" color="gray.600" mt={4}>
              Durante esta etapa, es útil identificar patrones, palabras clave, términos repetidos y conectores lógicos. También se recomienda usar herramientas como subrayado, diagramas y esquemas para visualizar las relaciones entre los elementos del texto.
            </Text>
          </Box>

          {/* Interpretación */}
          <Box>
            <Heading as="h3" size="md" color="gray.800" mb={2}>
              2. Interpretación: ¿Qué significa el texto?
            </Heading>
            <Text fontSize="md" color="gray.600" lineHeight="tall" mb={4}>
              La interpretación se centra en descubrir el mensaje original del autor inspirado. Para ello, es necesario:
            </Text>
            <VStack align="start" spacing={2} pl={4}>
              <Text fontSize="md" color="gray.600">
                - Considerar el contexto histórico y cultural del pasaje.
              </Text>
              <Text fontSize="md" color="gray.600">
                - Analizar el género literario (narrativa, poesía, profecía, epístola, etc.).
              </Text>
              <Text fontSize="md" color="gray.600">
                - Examinar el contexto inmediato y general de la Biblia.
              </Text>
              <Text fontSize="md" color="gray.600">
                - Consultar herramientas exegéticas, como diccionarios bíblicos y comentarios teológicos.
              </Text>
            </VStack>
            <Text fontSize="md" color="gray.600" mt={4}>
              Un ejemplo práctico podría ser el análisis de <strong>Génesis 1</strong>, donde se observa la repetición de la frase "Y vio Dios que era bueno". Esta frase no solo describe la creación como buena, sino que también refleja el carácter perfecto del Creador. Al interpretar este pasaje, es importante considerar cómo esta descripción influye en nuestra comprensión de la relación entre Dios y su creación.
            </Text>
          </Box>

          {/* Aplicación */}
          <Box>
            <Heading as="h3" size="md" color="gray.800" mb={2}>
              3. Aplicación: ¿Qué significa para mí?
            </Heading>
            <Text fontSize="md" color="gray.600" lineHeight="tall" mb={4}>
              La aplicación es el paso en el que se conecta el mensaje del texto con la vida diaria. Este proceso requiere reflexión personal y sensibilidad al Espíritu Santo para identificar cómo las verdades bíblicas pueden transformar actitudes, decisiones y comportamientos.
            </Text>
            <VStack align="start" spacing={2} pl={4}>
              <Text fontSize="md" color="gray.600">
                - ¿Cómo cambia este texto mi perspectiva sobre Dios, el prójimo o el mundo?
              </Text>
              <Text fontSize="md" color="gray.600">
                - ¿Qué acciones concretas debo tomar en respuesta al pasaje?
              </Text>
              <Text fontSize="md" color="gray.600">
                - ¿Cómo puedo compartir esta enseñanza con otros de manera fiel y edificante?
              </Text>
            </VStack>
            <Text fontSize="md" color="gray.600" mt={4}>
              Por ejemplo, al estudiar <strong>Juan 13:14-15</strong>, donde Jesús lava los pies de sus discípulos, una aplicación podría ser reflexionar sobre cómo adoptar una actitud de servicio humilde en nuestras interacciones diarias.
            </Text>
          </Box>

          {/* Conclusión */}
          <Box>
            <Heading as="h3" size="md" color="gray.800" mb={2}>
              Conclusión
            </Heading>
            <Text fontSize="md" color="gray.600" lineHeight="tall">
              El método inductivo no solo fomenta un estudio profundo de las Escrituras, sino que también capacita al lector para abordar el texto con un espíritu de humildad y apertura. Al seguir este enfoque, no solo entendemos mejor la Palabra de Dios, sino que también experimentamos una transformación espiritual que nos equipa para vivir conforme a su voluntad.
            </Text>
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

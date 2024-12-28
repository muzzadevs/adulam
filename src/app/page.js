"use client";
import { Box, Text, Heading, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Page() {
  return (
    <Box
      height="100%"
      overflowY="auto"
      p={6}
    >
        {/* Encabezado 1  */}
        <Heading as="h1" size="xl" color="gray.800" mb={6}>
        Bienvenidos a la Cueva de Adulam
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={8}>
        La "Cueva de Adulam" es un lugar emblemático en la narrativa bíblica,
        conocido por ser el refugio de David y un grupo de hombres que, aunque
        abatidos y en crisis, encontraron en ese lugar la dirección y la unidad
        bajo el propósito de Dios (1 Samuel 22:1-2). Así como ellos buscaron
        refugio y guía, nosotros también podemos hallar en el estudio de las
        Escrituras la fortaleza espiritual y la dirección necesarias para
        enfrentar los desafíos de nuestra vida. Este espacio se inspira en
        aquel refugio para ofrecerte una herramienta que te permita profundizar
        en la Palabra de Dios y encontrar significado en ella.
      </Text>
      <Text fontSize="lg" color="gray.600" mb={8}>
        Antes de explorar los textos bíblicos, queremos presentarte el método
        inductivo, una herramienta clave que te ayudará a descubrir por ti
        mismo las riquezas de la Escritura. Este método no solo te permitirá
        comprender el contexto histórico y cultural, sino que también te guiará
        a aplicar sus enseñanzas en tu vida diaria. 
      </Text>
      {/* Encabezado 2  */}
      <Heading as="h1" size="xl" color="gray.800" mb={6}>
        Método Inductivo
      </Heading>
      <Text fontSize="lg" color="gray.600" mb={8}>
        Este método consiste en tres pasos fundamentales: Observación, Interpretación y Aplicación. A continuación, encontrarás un tutorial detallado basado en Mateo 22:37-39, para aprender a implementarlo y descubrir las riquezas de la Palabra de Dios en profundidad.
      </Text>

      {/* Introducción */}
      <Box bg="gray.50" borderRadius="lg" p={6} shadow="md" mb={8}>
        <Heading as="h2" size="lg" color="gray.700" mb={4}>
          Introducción
        </Heading>
        <Text fontSize="md" color="gray.700" mb={4}>
          Antes de comenzar, es crucial orar y pedir al Espíritu Santo que nos guíe en el estudio. La verdad de la Biblia no se consigue por nosotros mismos; es dada por Dios.
        </Text>
      </Box>

      {/* Observación */}
      <Box bg="gray.50" borderRadius="lg" p={6} shadow="md" mb={8}>
        <Heading as="h2" size="lg" color="gray.700" mb={4}>
          1. Observación: ¿Qué dice el texto?
        </Heading>
        <Text fontSize="md" color="gray.600" mb={4}>
          La observación es el primer paso del método inductivo. Nos lleva a examinar detenidamente el texto y descubrir sus detalles esenciales. Este paso incluye:
        </Text>
        <UnorderedList pl={6} mb={4}>
          <ListItem fontSize="md" color="gray.600">Hacer preguntas clave: ¿Quién? ¿Qué? ¿Cuándo? ¿Dónde? ¿Por qué? ¿Cómo?</ListItem>
          <ListItem fontSize="md" color="gray.600">Identificar palabras y frases clave que son esenciales para el mensaje del autor.</ListItem>
          <ListItem fontSize="md" color="gray.600">Subrayar, marcar o usar símbolos para destacar patrones repetidos.</ListItem>
          <ListItem fontSize="md" color="gray.600">Observar el contexto inmediato y general del pasaje.</ListItem>
        </UnorderedList>
        <Text fontWeight={"bold"} fontSize="md" color="gray.600" mb={4}>
          Ejemplo práctico:
        </Text>
        <Text fontStyle={"italic"} fontSize="md" color="gray.600" mb={4}>
          "Jesús dijo: ‘Amarás al Señor tu Dios con todo tu corazón, con toda tu alma y con toda tu mente’. Este es el primero y más grande mandamiento. Y el segundo es semejante: ‘Amarás a tu prójimo como a ti mismo’."
        </Text>
        <Text fontWeight={"bold"} fontStyle={"italic"} fontSize="md" color="gray.600" mb={4}>
          Mateo 22:37-39
        </Text>
        <UnorderedList pl={6} mb={4}>
          <ListItem fontSize="md" color="gray.600">"Jesús dijo": responde a la pregunta ¿Quién? (Jesús).</ListItem>
          <ListItem fontSize="md" color="gray.600">"Amarás al Señor tu Dios": ¿Qué se manda hacer? (Amar a Dios).</ListItem>
          <ListItem fontSize="md" color="gray.600">"Con todo tu corazón, alma y mente": ¿Cómo se debe amar? (Con todo el ser).</ListItem>
          <ListItem fontSize="md" color="gray.600">"Este es el primero y más grande mandamiento": ¿Por qué es importante? (Es prioritario).</ListItem>
        </UnorderedList>
      </Box>

      {/* Interpretación */}
      <Box bg="gray.50" borderRadius="lg" p={6} shadow="md" mb={8}>
        <Heading as="h2" size="lg" color="gray.700" mb={4}>
          2. Interpretación: ¿Qué quería decir el autor original a los lectores originales?
        </Heading>
        <Text fontSize="md" color="gray.600" mb={4}>
          La interpretación busca comprender el mensaje original que el autor inspirado quiso transmitir a los destinatarios originales. En este caso, Jesús respondía a una pregunta sobre el mandamiento más importante, destacando el amor a Dios y al prójimo como el fundamento de toda la Ley y los Profetas.
        </Text>
        <UnorderedList pl={6} mb={4}>
          <ListItem fontSize="md" color="gray.600">Analiza el contexto cultural: ¿Qué significaba amar a Dios y al prójimo en la cultura judía del primer siglo?</ListItem>
          <ListItem fontSize="md" color="gray.600">Identifica el género literario: Este pasaje es parte de un diálogo en los Evangelios.</ListItem>
          <ListItem fontSize="md" color="gray.600">Considera el contexto general: ¿Cómo se relaciona este pasaje con otros textos sobre el amor en la Biblia?</ListItem>
          <ListItem fontSize="md" color="gray.600">Estudia palabras clave en el idioma original: Por ejemplo, "amar" (ágape) implica amor sacrificial y desinteresado.</ListItem>
        </UnorderedList>
        <Text fontSize="md" color="gray.600" mb={4}>
          La interpretación correcta requiere tiempo y cuidado. Reflexiona sobre cómo este mandamiento resume toda la Ley y cómo los destinatarios originales habrían entendido este llamado radical al amor total.
        </Text>
      </Box>

      {/* Aplicación */}
      <Box bg="gray.50" borderRadius="lg" p={6} shadow="md">
        <Heading as="h2" size="lg" color="gray.700" mb={4}>
          3. Aplicación: ¿Qué me dice a mí el texto?
        </Heading>
        <Text fontSize="md" color="gray.600" mb={4}>
          En la aplicación, conectamos el mensaje del texto con nuestra vida diaria. Este paso requiere reflexión personal y sensibilidad al Espíritu Santo. Algunas preguntas que pueden guiar este proceso son:
        </Text>
        <UnorderedList pl={6} mb={4}>
          <ListItem fontSize="md" color="gray.600">¿Cómo puedo amar más a Dios con todo mi ser en mis decisiones diarias?</ListItem>
          <ListItem fontSize="md" color="gray.600">¿De qué manera puedo demostrar amor genuino y práctico hacia mi prójimo?</ListItem>
          <ListItem fontSize="md" color="gray.600">¿Qué áreas de mi vida necesitan alinearse más con estos mandamientos?</ListItem>
        </UnorderedList>
        <Text fontSize="md" color="gray.600" mb={4}>
          Este texto nos invita a examinar nuestras prioridades y relaciones. Amar a Dios implica dedicarle tiempo, obedecer Su palabra y priorizar Su voluntad. Amar al prójimo se refleja en actos de servicio, compasión y justicia.
        </Text>
        <Text fontSize="md" color="gray.600" mb={4}>
          Ejemplo práctico: Dedicar tiempo diario a la oración y la adoración para fortalecer nuestra relación con Dios. Además, buscar oportunidades concretas para ayudar a quienes están en necesidad, como participar en ministerios de servicio o apoyar a una familia en crisis.
        </Text>
      </Box>
    </Box>
  );
}

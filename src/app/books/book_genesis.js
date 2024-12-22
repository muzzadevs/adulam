"use client";
import { Box, Text, Heading, Divider, List, ListItem, VStack, Link } from "@chakra-ui/react";
import { IoLink } from "react-icons/io5";

export default function BookGenesis() {
  return (
    <Box p={2} maxW={"1000px"}>
      {/* Título del libro */}
      <Heading as="h1" size="2xl" color="gray.800" mb={6}>
        Génesis
      </Heading>

      {/* Índice */}
      <Box bg="gray.100" p={4} borderRadius="md" shadow="md" mb={6}>
        <Heading as="h3" size="md" color="gray.700" mb={4}>
          Índice
        </Heading>
        <VStack align="start" spacing={3}>
          <Link href="#autor" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Autor
          </Link>
          <Link href="#fecha" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Fecha de Escritura
          </Link>
          <Link href="#lectores" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Lectores Originales
          </Link>
          <Link href="#contexto" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Contexto Histórico
          </Link>
          <Link href="#capitulos" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Número de Capítulos
          </Link>
          <Link href="#resumen" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Resumen del Contenido
          </Link>
          <Link href="#temas" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Temas Principales
          </Link>
          <Link href="#aplicacion" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Aplicación Práctica
          </Link>
          <Link href="#retos" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Retos del Libro
          </Link>
        </VStack>
      </Box>

      <Divider my={4} />

      {/* Autor */}
      <Heading as="h2" id="autor" size="lg" color="gray.700" mb={4}>
        Autor
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis, al igual que los otros cuatro libros del Pentateuco, es atribuido tradicionalmente a Moisés.
        Su autoría se sustenta en la tradición judeocristiana y en referencias posteriores en las Escrituras.
        Es probable que Moisés recopilara fuentes orales y escritas bajo inspiración divina, estructurándolas para instruir al pueblo de Israel.
      </Text>

      <Divider my={4} />

      {/* Fecha de Escritura */}
      <Heading as="h2" id="fecha" size="lg" color="gray.700" mb={4}>
        Fecha de Escritura
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Se estima que Génesis fue escrito entre el 1446 y el 1406 a.C., durante el período del éxodo y la peregrinación
        del pueblo de Israel en el desierto. Esto explica su énfasis en establecer una identidad nacional y espiritual
        basada en el pacto de Dios con los patriarcas.
      </Text>

      <Divider my={4} />

      {/* Lectores Originales */}
      <Heading as="h2" id="lectores" size="lg" color="gray.700" mb={4}>
        Lectores Originales
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Los destinatarios iniciales fueron los israelitas liberados de Egipto. Génesis les proporcionó un marco histórico
        y teológico para entender sus raíces y su relación especial con Dios. También buscaba fortalecer su fe en un Dios
        soberano y único en un contexto cultural plagado de politeísmo.
      </Text>

      <Divider my={4} />

      {/* Contexto Histórico */}
      <Heading as="h2" id="contexto" size="lg" color="gray.700" mb={4}>
        Contexto Histórico
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis refleja un período histórico que abarca desde la creación del mundo hasta la migración de Jacob y su familia a Egipto.
        Los relatos interactúan con las culturas vecinas de Oriente Próximo, como la babilónica y la egipcia, pero enfatizan la unicidad
        de Dios frente a las múltiples divinidades de esas culturas.
      </Text>

      <Divider my={4} />

      {/* Número de Capítulos */}
      <Heading as="h2" id="capitulos" size="lg" color="gray.700" mb={4}>
        Número de Capítulos
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis consta de 50 capítulos divididos en dos secciones principales:
      </Text>
      <List spacing={3} mb={6}>
        <ListItem>
          <strong>Capítulos 1-11:</strong> Relatos universales que incluyen la creación, el diluvio y la torre de Babel.
        </ListItem>
        <ListItem>
          <strong>Capítulos 12-50:</strong> Relatos patriarcales centrados en Abraham, Isaac, Jacob y José.
        </ListItem>
      </List>

      <Divider my={4} />

      {/* Resumen del Contenido */}
      <Heading as="h2" id="resumen" size="lg" color="gray.700" mb={4}>
        Resumen del Contenido
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis ofrece un marco para comprender los orígenes de la humanidad y la relación de Dios con su creación. El libro puede dividirse en:
      </Text>
      <List spacing={3} mb={6}>
        <ListItem>
          <strong>Capítulos 1-2:</strong> Relato de la creación, donde Dios ordena el caos y forma un mundo perfecto.
        </ListItem>
        <ListItem>
          <strong>Capítulos 3-5:</strong> La caída de Adán y Eva y las consecuencias del pecado.
        </ListItem>
        <ListItem>
          <strong>Capítulos 6-9:</strong> La corrupción humana y el juicio mediante el diluvio, seguido del pacto con Noé.
        </ListItem>
        <ListItem>
          <strong>Capítulos 10-11:</strong> La dispersión de las naciones tras la torre de Babel.
        </ListItem>
        <ListItem>
          <strong>Capítulos 12-25:</strong> Historia de Abraham, destacando el pacto y las promesas de Dios.
        </ListItem>
        <ListItem>
          <strong>Capítulos 26-36:</strong> Vida de Isaac y Jacob, y el conflicto entre Esaú y Jacob.
        </ListItem>
        <ListItem>
          <strong>Capítulos 37-50:</strong> Historia de José, que resalta la providencia de Dios incluso en medio de las adversidades.
        </ListItem>
      </List>

      <Divider my={4} />

      {/* Temas Principales */}
      <Heading as="h2" id="temas" size="lg" color="gray.700" mb={4}>
        Temas Principales
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis aborda temas teológicos y existenciales fundamentales, como:
      </Text>
      <List spacing={3} mb={6}>
        <ListItem>
          <strong>Creación:</strong> Dios como el creador soberano del universo.
        </ListItem>
        <ListItem>
          <strong>Pecado y Juicio:</strong> La desobediencia humana y sus consecuencias, pero también la misericordia de Dios.
        </ListItem>
        <ListItem>
          <strong>Pacto:</strong> Promesas de Dios a los patriarcas como base de su plan redentor.
        </ListItem>
        <ListItem>
          <strong>Providencia:</strong> Dios obra incluso a través de las circunstancias más adversas para cumplir sus propósitos.
        </ListItem>
      </List>

      <Divider my={4} />

      {/* Aplicación Práctica */}
      <Heading as="h2" id="aplicacion" size="lg" color="gray.700" mb={4}>
        Aplicación Práctica
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis nos invita a reflexionar sobre nuestra relación con Dios, el impacto del pecado y la esperanza en sus promesas.
        Nos desafía a vivir en fe y obediencia, siguiendo el ejemplo de los patriarcas.
      </Text>

      <Divider my={4} />

      {/* Retos del Libro */}
      <Heading as="h2" id="retos" size="lg" color="gray.700" mb={4}>
        Retos del Libro
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        El estudio de Génesis presenta preguntas difíciles que invitan a una reflexión profunda. Entre los desafíos más comunes están:
      </Text>
      <List spacing={3} mb={6}>
        <ListItem>
          <strong>La creación en seis días:</strong> ¿Cómo interpretar los "días" en el relato de la creación: literales o simbólicos?
        </ListItem>
        <ListItem>
          <strong>La caída del hombre:</strong> ¿Cómo se relaciona el pecado original con la condición humana actual?
        </ListItem>
        <ListItem>
          <strong>El diluvio universal:</strong> ¿Fue un evento global o localizado? ¿Qué implicaciones tiene para la interpretación
          teológica y científica?
        </ListItem>
        <ListItem>
          <strong>El pacto con Abraham:</strong> ¿Qué relevancia tiene este pacto para la teología del Nuevo Testamento y para los creyentes
          actuales?
        </ListItem>
      </List>
      <Text fontSize="md" color="gray.600" mb={6}>
        Para abordar estas preguntas, es útil emplear herramientas como:
      </Text>
      <List spacing={3} mb={6}>
      <ListItem>
          <strong>Oración y Reflexión:</strong> Buscar la guía del Espíritu Santo para aplicar las enseñanzas de Génesis a la vida diaria.
        </ListItem>
        <ListItem>
          <strong>Comentarios Bíblicos:</strong> Consultar expositores respetados como Matthew Henry o comentaristas modernos.
        </ListItem>
        <ListItem>
          <strong>Contexto Cultural:</strong> Examinar los antecedentes históricos y culturales del antiguo Oriente Próximo.
        </ListItem>
        <ListItem>
          <strong>Estudio Comparativo:</strong> Analizar textos paralelos y referencias cruzadas dentro de la Biblia.
        </ListItem>
        
      </List>
    </Box>
  );
}

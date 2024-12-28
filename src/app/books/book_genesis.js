"use client";
import {
  Box,
  Text,
  Heading,
  Divider,
  List,
  ListItem,
  VStack,
  Link,
} from "@chakra-ui/react";
import { IoLink } from "react-icons/io5";

export default function BookGenesis() {
  return (
    <Box p={4} maxW="1000px">
      {/* Título del libro */}
      <Heading as="h1" size="2xl" color="gray.800" mb={6}>
        Génesis: Un Análisis Académico
      </Heading>

      {/* Índice */}
      <Box bg="gray.100" p={4} borderRadius="md" shadow="md" mb={6}>
        <Heading as="h3" size="md" color="gray.700" mb={4}>
          Índice
        </Heading>
        <VStack align="start" spacing={3}>
          <Link href="#introduccion" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Introducción
          </Link>
          <Link href="#autor-fecha" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Autor y Fecha de Composición
          </Link>
          <Link href="#estructura" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Estructura y Contenido
          </Link>
          <Link href="#temas" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Temas Teológicos Principales
          </Link>
          <Link href="#contexto" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Contexto Histórico y Cultural
          </Link>
          <Link href="#interpretaciones" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Interpretaciones y Debates Académicos
          </Link>
          <Link href="#conclusion" color="blue.500">
            <IoLink style={{ display: "inline", marginRight: "8px" }} />
            Conclusión
          </Link>
        </VStack>
      </Box>

      <Divider my={4} />

      {/* Introducción */}
      <Heading as="h2" id="introduccion" size="lg" color="gray.700" mb={4}>
        Introducción
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis, el primer libro de la Biblia, establece los fundamentos para
        la narrativa bíblica al abordar los orígenes del universo, la
        humanidad y el pueblo de Israel. Su nombre proviene del griego
        "génesis", que significa "origen" o "comienzo". Este libro presenta
        las bases teológicas para entender la relación de Dios con su
        creación y su plan redentor.
      </Text>

      <Divider my={4} />

      {/* Autor y Fecha de Composición */}
      <Heading as="h2" id="autor-fecha" size="lg" color="gray.700" mb={4}>
        Autor y Fecha de Composición
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Tradicionalmente, la autoría del Génesis se atribuye a Moisés, quien
        habría escrito el Pentateuco, incluyendo Génesis, durante el siglo XV
        a.C. Sin embargo, los estudios críticos modernos sugieren que el
        texto podría ser una compilación de tradiciones orales y escritas,
        recopiladas entre los siglos X y V a.C.
      </Text>

      <Divider my={4} />

      {/* Estructura y Contenido */}
      <Heading as="h2" id="estructura" size="lg" color="gray.700" mb={4}>
        Estructura y Contenido
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis se divide en dos grandes secciones:
      </Text>
      <List spacing={3} mb={6}>
        <ListItem>
          <strong>Capítulos 1-11:</strong> Narran eventos universales como la
          creación, la caída del hombre, el diluvio y la torre de Babel.
        </ListItem>
        <ListItem>
          <strong>Capítulos 12-50:</strong> Se centran en los patriarcas:
          Abraham, Isaac, Jacob y José, y el desarrollo del pueblo de Israel.
        </ListItem>
      </List>

      <Divider my={4} />

      {/* Temas Teológicos Principales */}
      <Heading as="h2" id="temas" size="lg" color="gray.700" mb={4}>
        Temas Teológicos Principales
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis abarca una amplia gama de temas teológicos, incluyendo:
      </Text>
      <List spacing={3} mb={6}>
        <ListItem>
          <strong>Creación:</strong> Dios como el creador soberano del
          universo, destacando el propósito y el diseño en su obra.
        </ListItem>
        <ListItem>
          <strong>Pecado y Caída:</strong> La desobediencia de Adán y Eva y
          las consecuencias universales del pecado.
        </ListItem>
        <ListItem>
          <strong>Pacto:</strong> Las promesas de Dios a Abraham, estableciendo
          el fundamento de su plan redentor para la humanidad.
        </ListItem>
        <ListItem>
          <strong>Providencia Divina:</strong> La mano de Dios guiando la
          historia, incluso en medio de circunstancias adversas, como se ve en
          la vida de José.
        </ListItem>
      </List>

      <Divider my={4} />

      {/* Contexto Histórico y Cultural */}
      <Heading as="h2" id="contexto" size="lg" color="gray.700" mb={4}>
        Contexto Histórico y Cultural
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis fue escrito en el contexto de las antiguas culturas del
        Cercano Oriente, como las civilizaciones mesopotámicas y egipcias.
        Estas culturas tenían narrativas míticas sobre los orígenes del mundo
        y la humanidad, pero Génesis presenta una visión única de un Dios
        soberano y personal.
      </Text>

      <Divider my={4} />

      {/* Interpretaciones y Debates Académicos */}
      <Heading as="h2" id="interpretaciones" size="lg" color="gray.700" mb={4}>
        Interpretaciones y Debates Académicos
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis ha sido objeto de diversas interpretaciones a lo largo de la
        historia. Algunos interpretan la creación de manera literal, mientras
        que otros adoptan enfoques simbólicos o poéticos. El relato del
        diluvio, por ejemplo, genera debates sobre su alcance global o local.
        Además, el pacto con Abraham es visto como central para la teología
        bíblica y la narrativa de la redención.
      </Text>

      <Divider my={4} />

      {/* Conclusión */}
      <Heading as="h2" id="conclusion" size="lg" color="gray.700" mb={4}>
        Conclusión
      </Heading>
      <Text fontSize="md" color="gray.600" mb={6}>
        Génesis no solo relata los orígenes del mundo y la humanidad, sino que
        establece las bases teológicas para toda la narrativa bíblica. Su
        mensaje trasciende las épocas, recordándonos la soberanía de Dios, la
        seriedad del pecado y la esperanza en sus promesas. Este libro invita
        a los lectores a reflexionar sobre su relación con el Creador y su
        lugar en su plan eterno.
      </Text>
    </Box>
  );
}

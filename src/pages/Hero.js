import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  Button,
  HStack,
} from "@chakra-ui/react";

const KuttyHero = () => {
  const bg = useColorModeValue("black", "gray.800");
  return (
    <Flex bg={bg} px={4} py={32} mx='auto'>
      <Box w='full' mx='auto' w={{ lg: 8 / 12, xl: 5 / 12 }}>
        <chakra.p
          mb={2}
          fontSize='xs'
          fontWeight='semibold'
          letterSpacing='wide'
          color='gray.400'
          textTransform='uppercase'
        >
          VISUAL STORYTELLING
        </chakra.p>
        <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight='bold'
          lineHeight='shorter'
          color={useColorModeValue("gray.900", "white")}
        >
          See the bigger picture
        </chakra.h1>
        <chakra.p mb={5} color='gray.500' fontSize={{ md: "lg" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
          parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
          egestas quam volutpat viverra. In pretium nec senectus erat. Et
          malesuada lobortis.
        </chakra.p>
        <HStack>
          <Button
            as='a'
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size='lg'
          >
            Read the blog
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
};

export default KuttyHero;

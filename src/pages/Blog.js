import React from "react";
import {
  chakra,
  Box,
  Image,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

const Ma = () => {
  return (
    <Flex
      bg={useColorModeValue("black", "#1B1B2F")}
      p={50}
      w='full'
      alignItems='centre'
      justifyContent='space-between'
    >
      <Box
        mx='auto'
        rounded='lg'
        shadow='md'
        bg={useColorModeValue("white", "black")}
        maxW='md'
      >
        <Image
          roundedTop='lg'
          w='full'
          h={64}
          fit='cover'
          src='https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          alt='Article'
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize='xs'
              textTransform='uppercase'
              color={useColorModeValue("brand.600", "brand.400")}
            >
              29 Jun 2021
            </chakra.span>
            <Link
              display='block'
              color={useColorModeValue("gray.800", "white")}
              fontWeight='bold'
              fontSize='2xl'
              mt={2}
              _hover={{ color: "gray.600", textDecor: "underline" }}
            >
              Some football based visualisation
            </Link>
            <chakra.p
              mt={2}
              fontSize='sm'
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </chakra.p>
          </Box>

          <Box mt={4}>
            <Flex alignItems='center'>
              <Flex alignItems='center'>
                <Image
                  h={10}
                  fit='cover'
                  rounded='full'
                  src='https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60'
                  alt='Avatar'
                />
                <Link
                  mx={2}
                  fontWeight='bold'
                  color={useColorModeValue("gray.700", "gray.200")}
                >
                  Pranav V A
                </Link>
              </Flex>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Ma;

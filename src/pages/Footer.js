import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

export default function Sj() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "#1B1B2F")}
      p={50}
      w='full'
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        justify='center'
        bg={useColorModeValue("white", "#1B1B2F")}
        w='full'
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={20}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight='extrabold'
            letterSpacing='tight'
            lineHeight='shorter'
            color={useColorModeValue("gray.900", "gray.100")}
            mb={6}
          >
            <chakra.span display='block'>Want to dive deeper?</chakra.span>
            <chakra.span
              display='block'
              color={useColorModeValue("brand.600", "#cc92fc")}
            >
              Find me over at these sites.
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          >
            <Box display='inline-flex' rounded='md' shadow='md'>
              <Link
                w='full'
                display='inline-flex'
                alignItems='center'
                justifyContent='center'
                px={5}
                py={3}
                border='solid transparent'
                fontWeight='bold'
                rounded='md'
                color={useColorModeValue("white")}
                bg={useColorModeValue("brand.600", "#2F0C49")}
                _hover={{
                  bg: useColorModeValue("brand.700", "#2F0C49"),
                }}
              >
                Github
              </Link>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}

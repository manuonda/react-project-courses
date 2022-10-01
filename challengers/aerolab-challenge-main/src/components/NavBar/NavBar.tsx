import {Box, Container, Image, Stack, Text} from "@chakra-ui/react";
import React from "react";

import coin from "@/assets/icons/coin.svg";
import logo from "@/assets/logo.svg";

const NavBar: React.FC = () => {
  return (
    <Box backgroundColor="white" boxShadow="md">
      <Container maxWidth="6xl">
        <Stack
          alignItems="center"
          as="nav"
          direction="row"
          justifyContent="space-between"
          paddingY="3"
        >
          <Image height={8} src={logo} width={8} />
          <Stack alignItems="center" color="gray.500" direction="row" spacing={3}>
            <Text>Jhon Kite</Text>
            <Stack
              alignItems="center"
              backgroundColor="gray.100"
              borderRadius={100}
              cursor="pointer"
              direction="row"
              paddingX={3}
              paddingY={2}
            >
              <Text fontWeight={500}>1000</Text>
              <Image height={6} src={coin} width={6} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default NavBar;

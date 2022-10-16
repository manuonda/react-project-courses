import React from "react";
import {Container, Stack, Box, Image, Text, Input, StackDivider, Icon} from "@chakra-ui/react";
import {AiFillPrinter, AiOutlineSearch} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {IoCartOutline} from "react-icons/io5";

import logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={4}>
        <Container alignSelf="center" maxWidth="container.xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image src={logo} />
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  borderRadius="sm"
                  boxShadow="sm"
                  direction="row"
                  divider={<StackDivider />}
                  maxWidth={600}
                  padding={2}
                  width="100%"
                >
                  <Input paddingX={2} variant="unstyled" />
                  <Icon as={AiOutlineSearch} color="gray.400" height={6} width={6} />
                </Stack>
              </Stack>
              <Stack alignItems="center" color="blackAlpha.600" direction="row" spacing={3}>
                <Icon as={AiFillPrinter} height={8} width={8} />
                <Text fontSize="lg" fontWeight={500}>
                  Compra tu Point y QR
                </Text>
              </Stack>
            </Stack>
            <Stack alignItems="baseline" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing={12}>
                <Stack alignItems="center" direction="row" spacing={1}>
                  <Icon as={GoLocation} height={6} width={6} />
                  <Stack spacing={0}>
                    <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal">
                      Enviar a{" "}
                    </Text>
                    <Text fontSize="sm" lineHeight="normal">
                      Buenos Aires 1876
                    </Text>
                  </Stack>
                </Stack>
                <Stack color="blackAlpha.700" direction="row" fontSize="sm" spacing={6}>
                  <Text>Categorias</Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>

              <Stack alignItems="center" direction="row" fontSize="sm" spacing={6}>
                <Text>Creá tu Cuenta</Text>
                <Text>Ingresá mis compras</Text>
                <Icon as={IoCartOutline} width={6} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Stack backgroundColor="gray.100" direction="row" marginTop={0}>
        <Routes />
      </Stack>
    </Stack>
  );
};

export default App;

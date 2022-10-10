import React from "react";
import {Container, Stack, Box, Image, Text, Input, StackDivider, Icon} from "@chakra-ui/react";
import {AiFillPrinter, AiOutlineSearch} from "react-icons/ai";

import logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={4}>
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          <Stack>
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

            <Stack direction="row">
              <Text>Enviar a Buenos Aires</Text>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;

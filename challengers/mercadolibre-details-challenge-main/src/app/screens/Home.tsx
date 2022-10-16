import React from "react";
import {Link, Stack, Text, Container, Box, Image, Divider, Icon} from "@chakra-ui/react";
import {SearchRounded} from "@material-ui/icons";

import {Banner} from "../components/Banner";

const HomeScreen: React.FC = () => {
  return (
    <Container alignSelf="center" maxWidth="container.xl">
      <Stack direction="row" justifyContent="space-evenly" marginTop={23} width="100%">
        <Stack alignItems="center" direction="column">
          <Text>134343232322342 asdfa sdfasdf asd</Text>
        </Stack>

        <Stack direction="column" width="100%">
          <Box bg="white" borderRadius="md" padding={10}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="column">
                <Image
                  height={200}
                  src="https://http2.mlstatic.com/D_NQ_NP_841697-MLA50326755099_062022-V.webp"
                  width={240}
                />
              </Stack>
              <Stack direction="column" spacing={23} width="100%">
                <Stack
                  alignItems="baseline"
                  direction="row"
                  justifyContent="space-between"
                  spacing={23}
                >
                  <Text fontSize={17} fontWeight={100}>
                    Juguete De Cactus Bailar Iluminoso Cantar Voz Repetir Tiktok
                  </Text>
                  <Icon />
                </Stack>
                <Text fontSize={20}> $3.059</Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default HomeScreen;

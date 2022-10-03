import React from "react";
import {Box, Center, Divider, Flex, Image, Stack, Text} from "@chakra-ui/react";
import {BoxProps} from "@material-ui/core";

import {usePoints} from "@/hooks/hooks.user";
import {IProduct} from "@/models";
import coin from "@/assets/icons/coin.svg";

export interface ProductCarInterface extends BoxProps {
  product: IProduct;
  isSelected: boolean;
}

const ProductCar: React.FC<ProductCarInterface> = ({product, isSelected, ...props}) => {
  const [points] = usePoints();

  return (
    <Box
      backgroundColor="white"
      borderRadius="sm"
      boxShadow="md"
      padding={6}
      position="relative"
      {...props}
    >
      <Stack spacing={3}>
        <Stack
          alignItems="center"
          backgroundColor="white"
          borderRadius={9999}
          borderWidth={1}
          color="primary.500"
          direction="row"
          fontSize="sm"
          fontWeight="500"
          justifyContent="center"
          paddingX={3}
          paddingY={1}
          position="absolute"
          right={6}
          spacing={2}
          top={6}
        >
          <Text>{product.cost}</Text>
          <Image height={4} src={coin} width={4} />
        </Stack>
        <Center>
          <Image objectFit="contain" src={product.img.url} width={64} />
        </Center>
        <Divider />
        <Stack alignItems="flex-start" spacing={0}>
          <Text color="gray.500" fontSize="sm">
            {product.category}
          </Text>
          <Text fontWeight="500">{product.name}</Text>
        </Stack>
        <Stack />
      </Stack>
      {isSelected && (
        <Flex
          alignItems="center"
          borderRadius="sm"
          height="100%"
          justifyContent="center"
          left={0}
          position="absolute"
          top={0}
          width="100%"
          zIndex={2}
        >
          <Box>
            <Stack>
              <Stack>
                <Text>{points}</Text>
                <Text>- {product.cost}</Text>
                <Text>{points - product.cost}</Text>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      )}
    </Box>
  );
};

export default ProductCar;

import React from "react";
import {Box, Button, Center, Divider, Flex, Image, Stack, Text} from "@chakra-ui/react";
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
  const cantBuy = product.cost < points;

  return (
    <Box
      backgroundColor="white"
      borderRadius="sm"
      boxShadow="md"
      cursor={cantBuy ? "pointer" : "not-allowed"}
      opacity={cantBuy ? 1 : 0.5}
      padding={6}
      position="relative"
      {...props}
    >
      <Stack spacing={3}>
        <Stack
          alignItems="center"
          backgroundColor="white"
          borderColor={cantBuy ? "primary.500" : "orange.500"}
          borderRadius={9999}
          borderWidth={1}
          color={cantBuy ? "primary.500" : "orange.500"}
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
          <Text>{cantBuy ? product.cost : `Missing ${product.cost - points} points`}</Text>
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
          backgroundColor="orange.500"
          borderRadius="sm"
          height="100%"
          justifyContent="center"
          left={0}
          opacity={0.7}
          position="absolute"
          top={0}
          width="100%"
          zIndex={2}
        >
          <Box
            backgroundColor={cantBuy ? "primary.500" : "gray.500"}
            borderRadius="sm"
            height="100%"
            left={0}
            opacity={0.9}
            top={0}
            width="100%"
          />
          <Stack color="white" fontSize="2xl" fontWeight="bold" spacing={6} zIndex={3}>
            <Stack spacing={0}>
              <Text>{points}</Text>
              <Text borderBottomColor="white" borderBottomWidth="2">
                - {product.cost}
              </Text>
              <Divider />
              <Text>{points - product.cost}</Text>
            </Stack>
            {cantBuy && <Button color="primary.500">Redeem Now</Button>}
          </Stack>
        </Flex>
      )}
    </Box>
  );
};

export default ProductCar;

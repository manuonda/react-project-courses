import {CircularProgress, Flex, Heading, Stack} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";

import {ProductsList} from "@/pages/components/ProductsList";
import serviceProduct from "@/services/service.product";
import {IProduct} from "@/models";
import header from "@/assets/header.png";

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [status, setStatus] = useState<"pending" | "resolved" | "rejected">("pending");

  useEffect(() => {
    serviceProduct.list().then((products: IProduct[]) => {
      setProducts(products);
      setStatus("resolved");
    });
  }, []);

  if (status === "pending") {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Flex>
    );
  }

  return (
    <Stack flex={1} spacing={6}>
      <Flex
        alignItems="flex-end"
        backgroundImage={`url(${header})`}
        backgroundSize="cover"
        borderRadius="md"
        justifyContent="flex-start"
        minHeight={64}
        padding="6"
      >
        <Heading color="white" fontSize="4xl">
          Electronics
        </Heading>
      </Flex>

      <ProductsList products={products} />
    </Stack>
  );
};

export default Home;

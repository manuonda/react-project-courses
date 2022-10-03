import React from "react";
import {Stack, Grid as ChakraGrid, Box} from "@chakra-ui/react";

import {ProductCar} from "../ProductCar";

import {IProduct} from "@/models";
export interface GridProductsInterface {
  products: IProduct[];
}

const GridProducts: React.FC<GridProductsInterface> = ({products}) => {
  const [selected, setSelected] = React.useState<IProduct["_id"] | null>();

  return (
    <Stack>
      <ChakraGrid gap={6} templateColumns="repeat(auto-fill,minmax(256px, 1fr))" width="100%">
        {products.map((product: IProduct) => (
          <ProductCar
            key={product._id}
            isSelected={selected === product._id}
            product={product}
            onClick={() => setSelected(product._id)}
          />
        ))}
      </ChakraGrid>
    </Stack>
  );
};

export default GridProducts;

import {Divider, Stack} from "@chakra-ui/react";
import React from "react";

import {Count} from "./Count";

import {Filter, IProduct} from "@/models";
export interface ProductsListInterface {
  products: IProduct[];
}

const ProductsList: React.FC<ProductsListInterface> = ({products}: ProductsListInterface) => {
  const [filter, setFilter] = React.useState<Filter>(Filter.MostRecent);

  return (
    <Stack alignItems="flex-start" spacing={6}>
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        divider={<Divider borderColor="gray.300" height={12} orientation="vertical" />}
        flex={1}
        spacing={6}
        width="100%"
      />
      <Count current={products.length} total={products.length} />
      <Filter active={filter} onChange={setFilter} />
    </Stack>
  );
};

export default ProductsList;

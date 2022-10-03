import {Divider, Stack} from "@chakra-ui/react";
import React from "react";

import {Count} from "./Count";
import {Filters} from "./Filters";
import {GridProducts} from "./GridProducts";

import {Filter} from "@/models";
import {IProduct} from "@/models";
export interface ProductsListInterface {
  products: IProduct[];
}

const ProductsList: React.FC<ProductsListInterface> = ({products}: ProductsListInterface) => {
  const [filter, setFilter] = React.useState<Filter>(Filter.MostRecent);
  const filteredProducts = React.useMemo(() => {
    switch (filter) {
      case Filter.HighestPrice: {
        return [...products].sort((a, b) => b.cost - a.cost);
      }
      case Filter.LowestPrice: {
        return [...products].sort((a, b) => a.cost - b.cost);
      }
      case Filter.MostRecent:
      default: {
        return products;
      }
    }
  }, [filter, products]);

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
      >
        <Count current={filteredProducts.length} total={filteredProducts.length} />
        <Filters active={filter} onChange={setFilter} />
      </Stack>
      <GridProducts products={filteredProducts} />
      <Count current={filteredProducts.length} total={filteredProducts.length} />
    </Stack>
  );
};

export default ProductsList;

import {Box, Stack, Text} from "@chakra-ui/react";
import React from "react";

import {Filter} from "@/models";

export interface FiltersInterface {
  active: Filter;
  onChange: (filter: Filter) => void;
}

const FILTERS: Filter[] = [Filter.MostRecent, Filter.HighestPrice, Filter.LowestPrice];

const Filters: React.FC<FiltersInterface> = ({onChange, active}) => {
  return (
    <Stack alignItems="center" direction="row" spacing={6}>
      <Text color="gray.500">Sort by</Text>
      <Stack direction="row" spacing={4}>
        {FILTERS.map((filter) => (
          <Box
            key={filter}
            backgroundColor={filter === active ? "primary.400" : "grey.100"}
            borderRadius={9999}
            color={filter === active ? "white" : "gray.600"}
            cursor="pointer"
            fontWeight="500"
            paddingX={6}
            paddingY={2}
            onClick={() => onChange(filter)}
          >
            {filter}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Filters;

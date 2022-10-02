import React from "react";
import {Text} from "@chakra-ui/react";
export interface CountInterface {
  current: number;
  total: number;
}

const Count: React.FC<CountInterface> = ({current, total}) => {
  return (
    <Text color="gray.500" fontWeight="bold">
      {current} of {total} products
    </Text>
  );
};

export default Count;

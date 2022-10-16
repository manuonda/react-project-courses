import {Image, Stack} from "@chakra-ui/react";
import React from "react";
export interface BannerInterface {}

const Banner: React.FC<BannerInterface> = () => {
  return (
    <Stack direction="row">
      <Image
        height={90}
        src="https://http2.mlstatic.com/D_NQ_NP_788710-MLA51700974645_092022-OO.jpg"
      />
    </Stack>
  );
};

export default Banner;

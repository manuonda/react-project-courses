import {resolve} from "path";

import {IProduct} from "~/models";

export default {
  list: (): Promise<IProduct[]> =>
    new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            Promise.resolve([
              {
                _id: "5a033eeb364bf301523e9b92",
                name: "Sandalia Pale Gold YSL",
                cost: 200,
                category: "Indumentaria",
                img: {
                  url: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
                  hdUrl: "https://coding-challenge-api.aerolab.co/images/Alienware13-x2.png",
                },
              },
              {
                _id: "5a033f0f364bf301523e9b93",
                name: "iPhone 7 Case Sea-Blue",
                cost: 200,
                category: "Accesorios",
                img: {
                  url: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
                  hdUrl: "https://coding-challenge-api.aerolab.co/images/SamsungTabS2-x1.png",
                },
              },
            ]),
          ),
        500,
      ),
    ),
};

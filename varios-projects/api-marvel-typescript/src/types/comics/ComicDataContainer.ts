import { iComic } from "./Comic";

export interface iComicDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Array<iComic>;
}

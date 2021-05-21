import axios, { AxiosError } from "axios";
import React from "react";
import data from "../data/example.json";

import type { Root as SearchResults } from "./result";

const useSearch = async (
  term: string,
  start: number
): Promise<SearchResults> => {
  const res = await axios.get(
    `${process.env.GOOGLE_API_URL}?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${term}`
    // &start=${start}
  );
  return res.data;
  return data;
};

export default useSearch;

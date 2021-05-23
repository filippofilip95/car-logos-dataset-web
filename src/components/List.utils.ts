import useFetch from "src/hooks/useFetch";
import { ManufacturerLogos } from "src/types/Logos";
import { isFirstStringIncludedInSecondString } from "src/utils/string";
import { useMemo } from "react";

const url =
  "https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json";

export function useLogos() {
  return useFetch<ManufacturerLogos>(url);
}

export function useFilterLogos(search: string, logos?: ManufacturerLogos) {
  return useMemo(
    () =>
      logos?.filter((logo) =>
        isFirstStringIncludedInSecondString(search, logo.name)
      ) ?? [],
    [search, logos]
  );
}

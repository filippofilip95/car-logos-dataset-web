import { normalizeSync } from "normalize-diacritics";

/**
 * Function is comparing if first string is included second string.
 * Compared strings are processed to find broader match.
 * It's ordinary useful for filtering functionality.
 */
export function isFirstStringIncludedInSecondString(
  val1: string,
  val2: string
): boolean {
  const string1 = normalizeSync(val1.toLowerCase().replace(/\s/g, ""));
  const string2 = normalizeSync(val2.toLowerCase().replace(/\s/g, ""));

  return string2.includes(string1);
}

import React, { FC, useEffect, useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/all";

type Props = {
  onDebouncedChange: (val: string) => void;
};

const debounceTime = 200;

const SearchInput: FC<Props> = ({ onDebouncedChange }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => onDebouncedChange(search), debounceTime);
    return () => void clearTimeout(timer);
  }, [search, onDebouncedChange]);

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        color="gray.300"
        children={<FaSearch />}
      />
      <Input
        fontSize="xl"
        icon
        placeholder="Search for manufacturer..."
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;

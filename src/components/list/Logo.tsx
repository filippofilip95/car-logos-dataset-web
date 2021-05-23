import React, { FC, useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { ManufacturerLogo } from "src/types/Logos";
import Preview from "./logo/Preview";
import DetailModal from "src/components/list/logo/DetailModal";

type Props = {
  logo: ManufacturerLogo;
};

const Logo: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const bg = useColorModeValue("gray.50", "gray.600");

  function onClose() {
    setIsOpen(false);
  }

  function onShow() {
    setIsOpen(true);
  }

  return (
    <>
      <Preview logo={props.logo} onClick={onShow} />
      <DetailModal isOpen={isOpen} onClose={onClose} logo={props.logo} />
    </>
  );
};

export default Logo;

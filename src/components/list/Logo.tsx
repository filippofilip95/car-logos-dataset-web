import React, { FC, useState } from "react";
import { ManufacturerLogo } from "src/types/Logos";
import Preview from "./logo/Preview";
import DetailModal from "src/components/list/logo/DetailModal";

type Props = {
  logo: ManufacturerLogo;
};

const Logo: FC<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

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

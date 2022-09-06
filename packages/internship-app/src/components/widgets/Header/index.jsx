import Image from "next/image";
import Logo from "../../../../public/icons/betablocks.svg";
import Help from "../../../../public/icons/Help";

import Button from "../../atoms/Button";
const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <Image src={Logo} alt="logo" />
      <div className="flex flex-row gap-4">
        <Help />
        <Button className="bg-bb-1 text-bb-2" title="Exit" />
      </div>
    </div>
  );
};
export default Header;

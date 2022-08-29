import Image from "next/image";
import Logo from "../../../../public/icons/betablocks.svg";
import Help from "../../../../public/icons/help.svg";
const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      <Image src={Logo} alt="logo" />
      <div className="flex flex-row gap-4">
        <Image src={Help} alt="help" />
        <button className="bg-bb-1 text-bb-2 text-xs font-semibold uppercase px-8 py-3">
          Exit
        </button>
      </div>
    </div>
  );
};
export default Header;

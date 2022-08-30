import Image from "next/image";
import Logo from "../../../../public/icons/betablocksColored.svg";
import Help from "../../../../public/icons/blueHelp.svg";
import NavBarButtons from "../NavBarButtons";

const StorefrontHeader = () => {
  return (
    <div className="flex flex-row justify-between content-center text-center items-center">
      <Image src={Logo} alt="logo" />
      <NavBarButtons />
      <div className="flex flex-row gap-4">
        <Image src={Help} alt="help" />
        <button className="bg-transparent to-pp-1 text-accent-1 capitalize px-7 py-3 text-xs font-semibold">
          launch storefront
        </button>
        <button className="bg-gradient-to-r from-pp-2 to-pp-1 text-white-2 uppercase px-7 py-3 text-xs font-semibold">
          exit
        </button>
      </div>
    </div>
  );
};
export default StorefrontHeader;

import Image from "next/image";
import Logo from "../../../public/icons/betablocks.svg";
import Help from "../../../public/icons/help.svg";
import HeaderLink from "./headerLink";
const Header = () => {
  return (
    <div className="flex flex-row justify-between px-36">
      <Image src={Logo} alt="logo" />
      <div className="xl:flex flex-row gap-9 hidden">
        <HeaderLink text={"Pages"} />
        <HeaderLink text={"Digital Offerings"} />
        <HeaderLink text={"Reports"} />
        <HeaderLink text={"Access"} />
        <HeaderLink text={"Settings"} />
      </div>
      <div className="flex flex-row gap-4">
        <Image src={Help} alt="help" />
        <button className="text-xs text-accent-1 font-semibold p-1">
          Launch Storefront
        </button>
        <button className="bg-gradient-to-r from-pp-2 to-pp-1 text-white-2 text-xs font-semibold uppercase px-5 py-3">
          Exit
        </button>
      </div>
    </div>
  );
};
export default Header;

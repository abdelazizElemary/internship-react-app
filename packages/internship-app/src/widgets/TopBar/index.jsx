import Image from "next/image";
import PurpleButton from "../../atoms/purpleButton";
import Help from "../../images/help.svg";
import Logo from "../../images/logo.svg";

const TopBar = () => {
  return (
    <div className="flex h-18 w-full items-center  border-y-2 border-grey-1">
      <span className="ml-36 pl-3" style={{ marginBottom: "1px" }}>
        <Image src={Logo} alt="Beta Blocks logo" />
      </span>
      <div className="flex  items-end gap-9 ml-28 pl-1">
        <span className="text-xs font-normal font-Roboto text-balabizo">
          Pages
        </span>
        <span className="text-xs font-normal font-Roboto text-balabizo">
          Digital Offerings
        </span>
        <span className="text-xs font-normal font-Roboto text-balabizo">
          Reports
        </span>
        <span className="text-xs font-normal font-Roboto text-balabizo">
          Access
        </span>
        <span className="text-xs font-normal font-Roboto text-balabizo">
          Settings
        </span>
      </div>
      <span className="ml-24 pl-23">
        <Image src={Help} alt="Beta Blocks logo" />
      </span>
      <span className="font-sans font-semibold text-xs ml-6">
        Launch Storefront
      </span>
      <span className="ml-5">
        <PurpleButton>Exit</PurpleButton>
      </span>
    </div>
  );
};
export default TopBar;

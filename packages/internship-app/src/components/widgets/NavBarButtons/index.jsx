import Link from "next/link";

const NavBarButtons = () => {
  return (
    <div className="lg:flex flex-row gap-9 hidden">
      <p className="capitalize text-xs text-bb-2 font-sans">pages</p>
      <p className="capitalize text-xs text-bb-2 font-sans">
        digital offerings
      </p>
      <p className="capitalize text-xs text-bb-2 font-sans">reports</p>
      <p className="capitalize text-xs text-bb-2 font-sans">access</p>
      <Link href={"/storefront/settings"}>
        <p className="capitalize text-xs text-bb-2 font-sans cursor-pointer">
          settings
        </p>
      </Link>
    </div>
  );
};

export default NavBarButtons;

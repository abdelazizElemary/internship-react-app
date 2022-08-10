import Image from "next/image";
import Icon from "../../../public/icons/icon.svg";
const HomePage = () => {
  return (
    <div className="flex flex-col items-center p-10 border border-black mt-2 rounded-md">
      <p className="text-2xl font-bold">Hello</p>
      <p className="text-lg font-semibold">Start editing !</p>
      <Image src={Icon} alt="" width={400} height={400} />
      <div className="flex flex-col w-1/2">
        <label className="text-xs font-bold">Store Name</label>
        <input
          value={"Sony Music"}
          className="bg-bg-1 rounded px-4 py-2 border border-bg-2"
        />
      </div>
    </div>
  );
};
export default HomePage;

import Image from "next/image";
import Lock from "../../../public/icons/lock.svg";
import Published from "../../../public/icons/published-icon.svg";

const PagesCard = ({ title, subTitle, state, date }) => {
  return (
    <div className="bg-bg-1 flex flex-row border border-bg-5 rounded-lg h-20 max-w-4xl p-5 w-full">
      <Image src={Lock} alt="" />
      <div className="flex flex-col items-start gap-2 w-1/2 ml-5">
        <p className=" capitalize text-xl text-bg-10 font-normal">{title}</p>
        <p className="text-pp-1 text-xs">{subTitle}</p>
      </div>
      <div className="flex flex-row gap-8 items-center">
        <span className="flex flex-row items-center gap-1">
          <Image src={Published} alt="" />
          <p className="text-xs text-bg-8 capitalize">{state}</p>
        </span>
        <p className="text-xs text-bg-8">{date}</p>
      </div>
    </div>
  );
};

export default PagesCard;

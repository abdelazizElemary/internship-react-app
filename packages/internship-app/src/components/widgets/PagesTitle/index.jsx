import Image from "next/image";
import MinusIcon from "../../../../public/icons/minus.svg";
import PlusIcon from "../../../../public/icons/plus-icon.svg";

const PagesTitle = ({ title, buttonText, setShowPages, showPages }) => {
  return (
    <div className="flex flex-row justify-between items-center content-center">
      <div className="flex flex-row gap-6 items-center text-center">
        <div
          onClick={() => {
            setShowPages(!showPages);
            console.log(showPages);
          }}
          tabIndex={0}
          onKeyDown={() => setShowPages(!showPages)}
          className="flex self-center"
        >
          <Image
            src={showPages ? MinusIcon : PlusIcon}
            alt=""
            width={18}
            height={18}
          />
        </div>
        <p className="text-4xl font-bold text-bg-10 capitalize">{title}</p>
      </div>
      <button className="bg-gradient-to-r from-pp-2 to-pp-1 text-white-2 uppercase px-10 py-3 text-xs font-semibold">
        {buttonText}
      </button>
    </div>
  );
};

export default PagesTitle;

import classNames from "classnames";
import Image from "next/image";
import NotSelectedRadioButton from "../../../../public/icons/not-selected-radio.svg";
import SelectedRadioButton from "../../../../public/icons/selected-radio.svg";

const OptionItem = ({
  setSelectedOption,
  selectedOption,
  haveSubtitles,
  option,
}) => {
  return (
    <div
      onClick={() => {
        setSelectedOption(option.label);
      }}
      className={classNames(
        "flex flex-row gap-2 cursor-pointer",
        haveSubtitles ? "items-start" : "items-center"
      )}
    >
      <div className={classNames("flex", haveSubtitles && "pt-0.5")}>
        <Image
          src={
            selectedOption === option.label
              ? SelectedRadioButton
              : NotSelectedRadioButton
          }
          alt=""
        />
      </div>

      <div className="flex flex-col">
        <label
          className={classNames(
            "text-bg-12",
            haveSubtitles ? "text-base font-semibold" : "text-[14px]"
          )}
        >
          {option.label}
        </label>
        {haveSubtitles && (
          <div className="flex flex-col justify-start">
            <label className="text-[#676D6F] text-xs">Fees</label>
            <label className="text-xs text-[#676D6F]">{option.subTitle}</label>
          </div>
        )}
      </div>
    </div>
  );
};
export default OptionItem;

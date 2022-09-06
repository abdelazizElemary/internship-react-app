import classNames from "classnames";
import Image from "next/image";
import Help from "../../../../public/icons/Help";
import NotSelectedRadioButton from "../../../../public/icons/not-selected-radio.svg";
import SelectedRadioButton from "../../../../public/icons/selected-radio.svg";
import OptionItem from "../OptionItem";

const LabelledRadioButtons = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
  help,
  haveSubtitles = false,
}) => {
  return (
    <div className="flex flex-col justify-start pt-6">
      <div
        className={classNames(
          "flex flex-row items-center gap-1",
          haveSubtitles ? "pb-12" : "pb-2"
        )}
      >
        <p className="font-extrabold text-xs text-bg-10">{title}</p>
        {help && <Help width="16" height="16" />}
      </div>
      <div className="flex flex-wrap gap-9 items-center">
        {options.map((option, index) => (
          <OptionItem
            key={index}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            haveSubtitles={haveSubtitles}
            option={option}
          />
        ))}
        {haveSubtitles && (
          <div
            onClick={() => {
              setSelectedOption("No Automatical Withdraw");
            }}
            className={
              "flex flex-row gap-2 items-start self-start cursor-pointer"
            }
          >
            <div className={"flex pt-0.5"}>
              <Image
                src={
                  selectedOption === "No Automatical Withdraw"
                    ? SelectedRadioButton
                    : NotSelectedRadioButton
                }
                alt=""
              />
            </div>
            <label className={"text-bg-12 text-[14px] w-[90px] h-[38px]"}>
              No Automatical Withdraw
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default LabelledRadioButtons;

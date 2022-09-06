import { useState } from "react";
import Help from "../../../../public/icons/Help";
import Button from "../../atoms/Button";
import LabelledInput from "../../atoms/LabelledInput";
import LabelledRadioButtons from "../../widgets/LabelledRadioButtons";
import PageHeader from "../../widgets/PageHeader";

const PaymentPreferencesForm = () => {
  const [payment, setPayment] = useState("");
  const [wallet, setWallet] = useState("");
  const [coin, setCoin] = useState("");

  return (
    <form className="container max-w-3xl pb-10 p-4">
      <PageHeader
        className="pt-20"
        title="How will you get paid?"
        subTitle="Specify how you would like to recieve the funds from your customer and how often you would like to withdraw those funds from your storefront."
      />
      <LabelledRadioButtons
        title="Payment Perference"
        options={[{ label: "Bank Transfer" }, { label: "Crypto" }]}
        selectedOption={payment}
        setSelectedOption={setPayment}
      />
      <LabelledRadioButtons
        title="Wallet Type"
        options={[{ label: "Wallet Connect" }, { label: "Metamask" }]}
        selectedOption={wallet}
        setSelectedOption={setWallet}
        help
      />

      <div className="flex flex-col justify-start md:flex-row gap-4 pt-6">
        <LabelledInput
          title="Wallet Address"
          placeholder={"Sample wallet address"}
        />
        <a className="flex self-start md:self-center capitalize text-accent-1 md:w-1/4 text-[14px] font-bold md:pt-5">
          link a different account
        </a>
      </div>

      <LabelledRadioButtons
        title="Preferred Crypto"
        options={[
          { label: "Bitcoin (BTC)" },
          { label: "Ethereum (ETH)" },
          { label: "USD Coin (USDC)" },
        ]}
        selectedOption={coin}
        setSelectedOption={setCoin}
      />
      <LabelledRadioButtons
        title="Preferred Frequency"
        options={[
          { label: "Daily", subTitle: "$1.50 / transfer" },
          { label: "Weekly", subTitle: "$1.50 / transfer" },
          { label: "Monthly", subTitle: "$1.50 / transfer" },
          { label: "Bi-Monthly", subTitle: "$1.50 / transfer" },
        ]}
        selectedOption={coin}
        setSelectedOption={setCoin}
        haveSubtitles
      />

      <div className="flex flex-col pt-9">
        <a className="text-brand-blue text-xs font-semibold h-7 capitalize flex flex-row gap-1">
          Why am i being charged a fee?
          <Help width="16" height="16" />
        </a>
        <div className="flex flex-row">
          <Button
            title={"cancel"}
            className="bg-transparent text-accent-1"
            align={"left"}
            href={`/storefront`}
          />
          <Button
            title={"Save payment preferences"}
            className="bg-gradient-to-r from-pp-2 to-pp-1 text-white-2"
          />
        </div>
      </div>
    </form>
  );
};

export default PaymentPreferencesForm;

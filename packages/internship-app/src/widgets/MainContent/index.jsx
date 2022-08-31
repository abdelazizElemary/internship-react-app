import PurpleButton from "../../atoms/purpleButton";

const MainContent = (props) => {
  return (
    <div className="absolute left-405 top-301">
      <div
        className="font-sans font-bold text-Blue-Grey-10 "
        style={{
          fontSize: "32px",
          letterSpacing: "0.01rem",
          lineHeight: "26px",
          marginTop: "9px",
        }}
      >
        Change Collection Name
      </div>
      <div
        className=" font-Roboto text text-Blue-Grey-08 "
        style={{
          fontSize: "15px",
          letterSpacing: "0.01rem",
          lineHeight: "26px",
          marginTop: "10px",
        }}
      >
        Collections are ways for you to organize your NFTs in your storefront.
      </div>
      <div
        className="mt-6 font-bold text-xs text-Blue-Grey-10"
        style={{ lineHeight: "26px  " }}
      >
        collection Name
      </div>
      <div
        className="bg-grey-3 border-grey-2 border-2 rounded-sm py-2 text-sm text-Blue-Grey-07 "
        style={{ width: "430px", paddingRight: "10px", paddingLeft: "10px" }}
      >
        Enter Name Here
      </div>
      <div className="mt-6 flex items-center gap-5">
        <span className="font-semibold  text-xs uppercase tracking-wide">
          BACK
        </span>
        <span>
          {" "}
          <PurpleButton> save name</PurpleButton>
        </span>
      </div>
    </div>
  );
};
export default MainContent;

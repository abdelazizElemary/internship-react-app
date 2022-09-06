import classNames from "classnames";

const PageHeader = ({ title, subTitle, className }) => {
  return (
    <div className={classNames("flex flex-col justify-start", className)}>
      <p className="text-bg-10 text-3xl font-bold capitalize">{title}</p>
      <p className="text-bg-8 text-[15px]">{subTitle}</p>
    </div>
  );
};

export default PageHeader;

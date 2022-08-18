import PagesCard from "../PagesCard";

const PagesContent = () => {
  return (
    <div className="flex flex-col items-center pt-20">
      <PagesCard
        title="Storefront Home Page"
        subTitle="[yourwebsiteurl.com]"
        state="published"
        date="Aug 07, 2019"
      />
    </div>
  );
};

export default PagesContent;

import PagesCard from "../PagesCard";
import PagesNavbar from "../PagesNavbar";

const PagesContent = () => {
  return (
    <div className="flex flex-col items-center pt-20 gap-7">
      <PagesNavbar />
      <PagesCard
        title="Storefront Home Page"
        subTitle="[yourwebsiteurl.com]"
        state="published"
        date="Aug 07, 2019"
        locked
      />
      <PagesCard
        title="Default collection Page"
        subTitle="[yourwebsiteurl.com]/categories"
        state="published"
        date="Aug 07, 2019"
      />
    </div>
  );
};

export default PagesContent;

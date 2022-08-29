import { useState } from "react";
import PagesContent from "../../widgets/PagesContent";
import PagesTitle from "../../widgets/PagesTitle";
import Layout from "../Layout";

const StorefrontPages = () => {
  const [showPages, setShowPages] = useState(false);
  return (
    <Layout storefront>
      <div className="container px-28 pt-24 items-center content-center">
        <PagesTitle
          title="store pages"
          buttonText="create store page"
          setShowPages={setShowPages}
          showPages={showPages}
        />
        {showPages && <PagesContent />}
      </div>
    </Layout>
  );
};
export default StorefrontPages;

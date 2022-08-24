import Head from "next/head";
import StorefrontPages from "../../components/pages/StorefrontPages";

const Storefront = () => {
  return (
    <div>
      <Head>
        <title>Internship App</title>
      </Head>

      <StorefrontPages />
    </div>
  );
};

export default Storefront;

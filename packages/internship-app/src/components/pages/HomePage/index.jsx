import Image from "next/image";
import Icon from "../../../../public/icons/icon.svg";
import Layout from "../Layout";
const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center content-center">
        <Image src={Icon} alt="icon" />
        <p className="text-bb-2 text-4xl font-extrabold pb-2 font-sans">
          Let’s get started
        </p>
        <p className="text-bg-8 font-sans font-light">
          Setting up your first storefront is easy, we’re here to guide you
          through the process.
        </p>
        <div className="flex flex-row pt-7">
          <button className="bg-transparent text-accent-1 uppercase px-7 py-3 text-sm font-semibold">
            back
          </button>
          <button className="bg-gradient-to-r from-pp-2 to-pp-1 text-white-2 uppercase px-7 py-3 text-sm font-semibold">
            start selling
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;

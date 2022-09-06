import Image from "next/image";
import Icon from "../../../../public/icons/icon.svg";
import Button from "../../atoms/Button";
import Layout from "../../widgets/Layout";
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
          <Button className="bg-transparent text-accent-1" title="back" />
          <Button
            className="bg-gradient-to-r from-pp-2 to-pp-1 text-white-2"
            title="start selling"
            href={"/storefront"}
          />
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;

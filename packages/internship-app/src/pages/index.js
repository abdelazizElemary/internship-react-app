import ButtonsConfirmed from "../components/pages/ButtonsConfirmed";
import HeadLineTitle from "../components/pages/HeadLineTitle";
import InputName from "../components/pages/InputName";
import Layout from "../components/pages/Layout";

export default function Home() {
  return (
    <Layout>
      <div className=" flex-col items-start content-center inline-block absolute left-1/3 top-72  ">
        <HeadLineTitle />
        <InputName />
        <ButtonsConfirmed />
      </div>
    </Layout>
  );
}

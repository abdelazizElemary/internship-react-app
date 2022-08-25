import Layout from "../components/pages/Layout";
export default function Home() {
  return (
    <Layout storefront={1}>
      <div className=" w-11/12 md:w-[700px] mx-auto py-[311px] mb-8">
        <h1 className="font-bold text-3xl text-bg-10 font-gsans">
          Change Collection Name
        </h1>
        <p className="font-roboto text-bg-8">
          Collections are ways for you to organize your NFTs in your storefront.
        </p>
        <p name="collection" className="pt-6 text-xs font-bold capitalize mb-2">
          collection Name
        </p>
        <input
          placeholder="Enter Name Here"
          className="placeholder-bg-7 bg-basic-1 pr-4 pl-3 border-solid border border-bg-2 w-11/12 md:w-[430px] h-9"
        ></input>
        <div className="pt-10">
          <button className="font-semibold text-xs text-pp-1 mr-5">BACK</button>
          <button className="font-semibold text-white-2 bg-gradient-to-r from-pp-2 to-pp-1 py-[10px] px-[18px] text-xs">
            SAVE NAME
          </button>
        </div>
      </div>
    </Layout>
  );
}

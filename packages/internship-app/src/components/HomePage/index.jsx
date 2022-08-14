import Layout from "../Layout";
const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-start content-center">
        <div className="mb-6">
          <p className="text-3xl font-extrabold pb-2 font-sans">
            Change Collection Name
          </p>
          <p className="text-bg-8 font-sans font-normal text-sm">
            Collections are ways for you to organize your NFTs in your
            storefront.
          </p>
        </div>
        <div className="w-full max-w-md">
          <form className="bg-white rounded flex flex-col">
            <label className="font-bold text-xs h-6">collection Name</label>
            <input
              className=" border-bg-2 border-solid border rounded bg-bg-4 py-1 px-3 text-sm"
              placeholder="Enter Name Here"
            />
          </form>
        </div>
        <div className="flex flex-row pt-6">
          <button className="bg-transparent text-accent-1 uppercase py-3 text-xs font-semibold mr-4">
            back
          </button>
          <button className="bg-gradient-to-r from-pp-2 to-pp-1 text-white-2 uppercase px-4 py-2 text-xs w-28 font-semibold">
            Save name
          </button>
        </div>
      </div>
    </Layout>
  );
};
export default HomePage;

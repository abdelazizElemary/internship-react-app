import Header from "../Header";
import StorefrontHeader from "../StorefrontHeader";

const Layout = ({ children, storefront }) => {
  return (
    <>
      <div className="flex flex-col px-20 py-4 bg-white-1 border-b border-bg-3">
        {storefront ? <StorefrontHeader /> : <Header />}
      </div>
      <main>{children}</main>
    </>
  );
};
export default Layout;

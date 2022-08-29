import Header from "../Header";
import StorefrontHeader from "../StorefrontHeader";

const Layout = ({ children}) => {
  return (
    <>
      <div className="flex flex-col px-20 py-4 bg-white-1 border-b border-bg-3">
         <StorefrontHeader /> 
      </div>
      <main>{children}</main>
    </>
  );
};
export default Layout;

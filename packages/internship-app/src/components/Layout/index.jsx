import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col px-20 py-4 bg-white-1 border-b border-bg-3">
        <Header />
      </div>
      <main>{children}</main>
    </>
  );
};
export default Layout;

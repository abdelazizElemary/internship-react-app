import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col px-20 py-4 bg-white-1 border-b border-bg-3">
        <Header />
      </div>
      <main>{children}</main>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </div>
  );
};
export default Layout;

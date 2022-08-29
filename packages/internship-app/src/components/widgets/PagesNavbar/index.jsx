const PagesNavbar = () => {
  return (
    <div className="flex flex-row w-full max-w-4xl py-5 px-10">
      <p className="w-6"> &nbsp;</p>
      <p className="text-xxs text-bg-7 uppercase w-1/2">Page Title/URL</p>
      <div className="flex flex-row gap-14">
        <div className="flex flex-row">
          <p className="w-8"> &nbsp;</p>
          <p className="text-xxs text-bg-7 uppercase">Status</p>
        </div>
        <p className="text-xxs text-bg-7 uppercase">Creation</p>
      </div>
    </div>
  );
};

export default PagesNavbar;

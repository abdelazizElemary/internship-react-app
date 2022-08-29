const InputName = () => {
  return (
    <div className="w-full max-w-md">
      <form className="bg-white rounded flex flex-col">
        <label className="font-bold text-xs h-6">collection Name</label>
        <input
          className=" border-bg-2 border-solid border rounded bg-bg-4 py-1 px-3 text-sm"
          placeholder="Enter Name Here"
        />
      </form>
    </div>
  );
};
export default InputName ;

const LabelledInput = ({ title, placeholder }) => {
  return (
    <div className="flex flex-col w-3/4">
      <label className="font-extrabold text-xs capitalize pb-2">{title}</label>
      <input
        className="border border-basic-400 rounded bg-basic-200 h-9 p-4 text-bg-10 text-[15px] font-light placeholder:text-bg-10"
        placeholder={placeholder}
      />
    </div>
  );
};
export default LabelledInput;

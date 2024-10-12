export const Background = () => {
  return (
    <>
      
      <div className="fixed w-full min-h-full z-[2] select-none">
      <div className="text-gray-500 font-semibold flex gap-10 items-center justify-center text-sm bg-black">
          <div className=" flex items-center justify-center gap-2 h-10"><div className="w-[15px] h-[15px] rounded-full bg-red-900"></div>When docs pending</div>
          <div className=" flex items-center justify-center gap-2 h-10"><div className="w-[15px] h-[15px] rounded-full bg-green-900"></div>When docs done</div>
      </div>
        <h1 className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[13vw] font-bold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};
